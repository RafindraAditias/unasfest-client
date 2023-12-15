import { Suspense, useLayoutEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TKegiatan, TTahunKegiatan } from "@/types/galeriType";
import { getDownloadURL, list, ref, StorageReference } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import Loading from "../loading";

function GaleriSection() {
  const [kegiatan, setKegiatan] = useState<TKegiatan>("LKTI");
  const [tahunKegiatan, setTahunKegiatan] = useState<TTahunKegiatan>("2022");
  const [folders, setFolders] = useState<string[]>([]);
  const [_, setGalleryImages] = useState<string[]>([]); // ini masih bisa dihapus
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [gallery] = useState({});

  const imageRef = useRef<HTMLImageElement>(null);
  const galeriRef = ref(storage, "galeri");

  useLayoutEffect(() => {
    const galleryData = Object.entries(gallery).find(
      (e) => e[0] === `${tahunKegiatan}/${kegiatan}`
    );

    const uniqueFolder: Set<string> = new Set();
    let imageUrls: string[] = [];

    async function folderWalk(ref: StorageReference) {
      setGalleryImages([]);
      list(ref, { maxResults: 12 })
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            uniqueFolder.add(folderRef.name);
            if (
              folderRef.name.toLowerCase().includes(kegiatan.toLowerCase()) ||
              folderRef.name.toLowerCase().includes(tahunKegiatan.toLowerCase())
            ) {
              return folderWalk(folderRef);
            }
          });
          res.items
            .filter((value) => {
              return (
                value.fullPath.toLowerCase().includes(kegiatan.toLowerCase()) &&
                value.fullPath
                  .toLowerCase()
                  .includes(tahunKegiatan.toLowerCase())
              );
            })
            .forEach((itemRef) => {
              getDownloadURL(itemRef).then((downloadURL) => {
                setGalleryImages((prev) => [...prev, downloadURL]);
                imageUrls.push(downloadURL);
              });
            });
        })
        .catch((error) => {
          return error;
        })
        .finally(() => {
          setFolders([...uniqueFolder]);
          Object.assign(gallery, {
            [`${tahunKegiatan}/${kegiatan}`]: imageUrls,
          });
        });
    }

    if (!galleryData) {
      folderWalk(galeriRef);
    }
  }, [kegiatan, tahunKegiatan]);

  useLayoutEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setImageLoaded(true);
    }
  }, [kegiatan, tahunKegiatan]);

  const yearFolder = folders.filter((folder) => parseInt(folder));
  const filteredGallery = Object.entries(gallery).find(
    (data) =>
      data[0].includes(`${tahunKegiatan}/${kegiatan}`) &&
      (data[1] as string[]).length > 0
  )?.[1];

  return (
    <Suspense fallback={<p className="w-full h-screen">loading image bang</p>}>
      <section className="w-full h-fit">
        <div className="w-4/5 max-w-screen-xl m-auto">
          <h1>Galeri Kilas Balik Unas Fest</h1>
          <div className="flex gap-9">
            <Select
              defaultValue="LKTI"
              onValueChange={(event: TKegiatan) => {
                setKegiatan(event);
                setImageLoaded(false);
              }}
            >
              <SelectTrigger className="w-[254px]">
                <SelectValue placeholder="Pilih Galeri" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Galeri Kegiatan</SelectLabel>
                  <SelectItem value="LKTI">LKTI</SelectItem>
                  <SelectItem value="KDBI">KDBI</SelectItem>
                  <SelectItem value="EDC">EDC</SelectItem>
                  <SelectItem value="SEMNAS">SEMNAS</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              onValueChange={(event: TTahunKegiatan) => {
                setTahunKegiatan(event);
                setImageLoaded(false);
              }}
              defaultValue="2022"
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Pilih Tahun" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tahun Kegiatan</SelectLabel>
                  {yearFolder.map((folder, index) => (
                    <SelectItem key={index} value={folder}>
                      {folder}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div
            className={`mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
              filteredGallery === undefined ? "block" : "grid"
            } text-center`}
          >
            {filteredGallery ? (
              (filteredGallery as string[]).map((image, key) => {
                return (
                  <div key={key}>
                    {!imageLoaded && <Loading className="w-full" />}
                    <img
                      onLoad={() => setImageLoaded(true)}
                      ref={imageRef}
                      loading="lazy"
                      srcSet={image}
                      id="galeriImages"
                      src={image}
                      className={`aspect-square object-cover ${
                        !imageLoaded && "none"
                      }`}
                      width={750}
                      height={480}
                      alt="galeri kegiatan"
                    />
                  </div>
                );
              })
            ) : (
              <div className="w-full h-96 border flex justify-center items-center">
                <p>no image</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default GaleriSection;
