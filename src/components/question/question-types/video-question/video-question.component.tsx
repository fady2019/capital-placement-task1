import React from 'react';

import FormItem from '../../../ui/form-item/form-item.component';
import Input from '../../../ui/input/input.component';
import Textarea from '../../../ui/textarea/textarea.component';
import SelectMenu from '../../../ui/select-menu/select-menu.component';

import { EVideoQuestionDurationFormat, IQuestion } from '../../../../models/app-form/app-form-question.model';

import classes from './video-question.styles.module.css';

const VideoQuestion: React.FC<{
    question: IQuestion;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { question, changeHandler } = props;

    const durationFormats = Object.entries(EVideoQuestionDurationFormat).map(([label, id]) => ({
        label,
        id,
    }));

    return (
        <FormItem className={classes['video-question']}>
            <FormItem>
                <label>Question</label>
                <Input
                    type="text"
                    placeholder="Type here"
                    defaultValue={question.question}
                    onChange={(e) => {
                        changeHandler({
                            question: e.target.value,
                        });
                    }}
                />
            </FormItem>

            <Textarea
                placeholder="Additional Information"
                defaultValue={question.videoAdditionalInfo}
                onChange={(e) => {
                    changeHandler({
                        videoAdditionalInfo: e.target.value,
                    });
                }}
            />

            <div className={classes['video-duration-metadata']}>
                <Input
                    type="number"
                    placeholder="Max duration of video"
                    defaultValue={question.videoMaxDuration}
                    onChange={(e) => {
                        changeHandler({
                            videoMaxDuration: +e.target.value,
                        });
                    }}
                />

                <SelectMenu
                    label="in (sec/min)"
                    options={durationFormats}
                    defaultValue={''}
                    required={true}
                    onChange={(format) => {
                        changeHandler({
                            videoMaxDurationFormat: format as EVideoQuestionDurationFormat,
                        });
                    }}
                />
            </div>
        </FormItem>
    );
};

export default VideoQuestion;
