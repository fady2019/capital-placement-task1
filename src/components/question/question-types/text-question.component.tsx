import React from 'react';

import FormItem from '../../ui/form-item/form-item.component';
import Input from '../../ui/input/input.component';

import { IQuestion } from '../../../models/app-form/app-form-question.model';

const TextQuestion: React.FC<{
    question: IQuestion;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { question, changeHandler } = props;

    return (
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
    );
};

export default TextQuestion;
