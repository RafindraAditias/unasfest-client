import { storage } from "@/config/firebaseConfig";
import {
  ListResult,
  StorageReference,
  getDownloadURL,
  listAll,
  ref,
} from "firebase/storage";

export const galeriRef = ref(storage, "galeri");

export async function getYearRef(
  ref: StorageReference
): Promise<StorageReference[]> {
  const years = (await listAll(ref)).prefixes;
  return years;
}

export async function getActivity(): Promise<ListResult> {
  const yearRef = await getYearRef(galeriRef);
  return new Promise((resolve, reject) => {
    yearRef.forEach(async (yearFolder) => {
      try {
        const activity = await listAll(yearFolder);
        resolve(activity);
      } catch (error) {
        reject(error);
      }
    });
  });
}

export async function getActivityImage(): Promise<string> {
  return new Promise((resolve) => {
    getActivity().then((activity) =>
      activity.items.forEach(async (item) => {
        const url = await getDownloadURL(item);
        resolve(url);
      })
    );
  });
}
