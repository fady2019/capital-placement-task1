class ImagePickerUtil {
    static async readImage(image: Blob) {
        return new Promise<string | null>((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(image);

            fileReader.onload = () => {
                resolve(fileReader.result as string);
            };

            fileReader.onerror = () => {
                reject(fileReader.error);
            };
        });
    }
}

export default ImagePickerUtil;
