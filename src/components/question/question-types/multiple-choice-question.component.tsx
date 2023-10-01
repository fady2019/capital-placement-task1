import React from 'react';

import FormItem from '../../ui/form-item/form-item.component';
import Input from '../../ui/input/input.component';
import QuestionTextInput from './question-inputs/question-text-input.component';
import QuestionChoicesInputs from './question-inputs/question-choices-inputs.component';

import { IQuestion } from '../../../models/app-form/app-form-question.model';

const MultipleChoiceQuestion: React.FC<{
    question: IQuestion;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { question, changeHandler } = props;

    return (
        <>
            <QuestionTextInput questionText={question.question} changeHandler={changeHandler} />

            <QuestionChoicesInputs
                choices={question.choices}
                enableOtherOption={question.other}
                changeHandler={changeHandler}
            />

            <FormItem style={{ marginTop: '32px' }}>
                <label>Max choice allowed</label>
                <Input
                    type="number"
                    placeholder="Enter number of choice allowed here"
                    defaultValue={question.maxChoice}
                    onChange={(e) => {
                        changeHandler({
                            maxChoice: +e.target.value,
                        });
                    }}
                />
            </FormItem>
        </>
    );
};

export default MultipleChoiceQuestion;
