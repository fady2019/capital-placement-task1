import React from 'react';

import FormItem from '../../../ui/form-item/form-item.component';
import Input from '../../../ui/input/input.component';

import { IQuestion } from '../../../../models/app-form/app-form-question.model';

const QuestionTextInput: React.FC<{
    questionText: string;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { questionText, changeHandler } = props;

    return (
        <FormItem>
            <label>Question</label>
            <Input
                type="text"
                placeholder="Type here"
                defaultValue={questionText}
                onChange={(e) => {
                    changeHandler({
                        question: e.target.value,
                    });
                }}
            />
        </FormItem>
    );
};

export default QuestionTextInput;
