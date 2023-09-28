import React from 'react';

import FormItem from '../../ui/form-item/form-item.component';
import Input from '../../ui/input/input.component';
import Checkbox from '../../ui/checkbox/checkbox.component';

import { IQuestion } from '../../../models/app-form/app-form-question.model';

const YesNoQuestion: React.FC<{
    question: IQuestion;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { question, changeHandler } = props;

    return (
        <>
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

            <Checkbox
                isChecked={question.disqualify!}
                label="Disqualify candidate if the answer is no"
                togglingHandler={(checked) => {
                    changeHandler({
                        disqualify: checked || false,
                    });
                }}
            />
        </>
    );
};

export default YesNoQuestion;
