import React from 'react';

import Card from '../../ui/card/card.component';
import ImagePicker from '../../ui/image-picker/image-picker.component';

const CoverImagUploader: React.FC<{
    coverImage?: string;
    imagePickingHandler: (image: File | null, url?: string | null | undefined) => void;
}> = (props) => {
    return (
        <Card title="Upload cover image">
            <ImagePicker
                title="Upload cover image"
                note="16:9 ratio is recommended. Max image size 1mb"
                accept="img/"
                imagePickingHandler={props.imagePickingHandler}
                defaultImagePreviewURL={props.coverImage}
            />
        </Card>
    );
};

export default CoverImagUploader;
