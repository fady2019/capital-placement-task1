import React from 'react';

import FormItem from '../../ui/form-item/form-item.component';
import Input from '../../ui/input/input.component';
import Checkbox from '../../ui/checkbox/checkbox.component';
import Choices from './choices/choices.component';

import { IQuestion } from '../../../models/app-form/app-form-question.model';

const DropdownQuestion: React.FC<{
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

            <Choices
                choices={question.choices}
                changeHandler={(choices) => {
                    changeHandler({
                        choices,
                    });
                }}
            />

            <Checkbox
                isChecked={question.other!}
                label="Enable “Other” option"
                togglingHandler={(checked) => {
                    changeHandler({
                        other: checked || false,
                    });
                }}
            />
        </>
    );
};

export default DropdownQuestion;
