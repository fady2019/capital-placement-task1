import React from 'react';

import QuestionTextInput from './question-inputs/question-text-input.component';
import QuestionChoicesInputs from './question-inputs/question-choices-inputs.component';

import { IQuestion } from '../../../models/app-form/app-form-question.model';

const DropdownQuestion: React.FC<{
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
        </>
    );
};

export default DropdownQuestion;
