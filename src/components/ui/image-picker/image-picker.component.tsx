import { useEffect, useRef, useState } from 'react';

import IconButton from '../icon-button/icon-button.component';

import ImagePickerUtil from './image-picker.util';

import classes from './image-picker.styles.module.css';

import { ReactComponent as UploadIcon } from '../../../assets/icons/upload.svg';
import { ReactComponent as TrashIcon } from '../../../assets/icons/trash.svg';

const ImagePicker: React.FC<{
    title: string;
    note: string;
    defaultImagePreviewURL?: string;
    accept?: React.InputHTMLAttributes<HTMLInputElement>['accept'];
    imagePickingHandler: (image: File | null, url?: string | null) => void;
}> = (props) => {
    const { note, title, accept, defaultImagePreviewURL, imagePickingHandler } = props;

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [pickedImageValue, setPickedImageValue] = useState('');
    const [imagePreviewURL, setImagePreviewURL] = useState<string | null | undefined>(defaultImagePreviewURL);

    useEffect(() => {
        setImagePreviewURL(defaultImagePreviewURL);
    }, [defaultImagePreviewURL]);

    const handleImagePickerOpening = () => {
        fileInputRef.current?.click();
    };

    const handleImagePicking = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files?.length) {
            return;
        }
        const image = files.item(0);

        const imageURL = await ImagePickerUtil.readImage(image as Blob);

        setImagePreviewURL(imageURL);
        imagePickingHandler(image, imageURL);
        setPickedImageValue(event.target.value);
    };

    const handleImagePreviewRemoving = () => {
        setImagePreviewURL(null);
        setPickedImageValue('');
        imagePickingHandler(null);
    };

    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                hidden={true}
                multiple={false}
                accept={accept}
                value={pickedImageValue}
                onChange={handleImagePicking}
            />

            {imagePreviewURL && (
                <div className={classes['image-preview']}>
                    <img src={imagePreviewURL} alt="img-preview" />

                    <div className={classes['image-preview-actions']}>
                        <IconButton onClick={handleImagePreviewRemoving}>
                            <TrashIcon />
                        </IconButton>
                        <IconButton onClick={handleImagePickerOpening}>
                            <UploadIcon />
                        </IconButton>
                    </div>
                </div>
            )}

            {!imagePreviewURL && (
                <div className={classes['image-picker']} role="button" onClick={handleImagePickerOpening}>
                    <UploadIcon />
                    <h3 className={classes['title']}>{title}</h3>
                    <p className={classes['note']}>{note}</p>
                </div>
            )}
        </>
    );
};

export default ImagePicker;
