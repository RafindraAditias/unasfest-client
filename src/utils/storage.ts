import { storage } from "@/config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// 'file' comes from the Blob or File API
export function uploadFile(file: File) {
  const storageRef = ref(storage, "file_name");

  const metadata = {
    contentType: file.type,
  };

  uploadBytes(storageRef, file, metadata).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
    });
    console.log(snapshot);
    console.log("Uploaded a blob or file!");
  });
}
