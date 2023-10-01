import React from 'react';

import Checkbox from '../../ui/checkbox/checkbox.component';

import { IQuestion } from '../../../models/app-form/app-form-question.model';
import QuestionTextInput from './question-inputs/question-text-input.component';

const YesNoQuestion: React.FC<{
    question: IQuestion;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { question, changeHandler } = props;

    return (
        <>
            <QuestionTextInput questionText={question.question} changeHandler={changeHandler} />

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
