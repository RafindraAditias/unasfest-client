export const loadImageDimensions = (
  file: File
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      resolve({ width: image.width, height: image.height });
    };

    image.onerror = () => {
      reject(new Error("Gagal memuat gambar"));
    };
  });
};
