import React from 'react';

import QuestionTextInput from './question-inputs/question-text-input.component';

import { IQuestion } from '../../../models/app-form/app-form-question.model';

const TextQuestion: React.FC<{
    question: IQuestion;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { question, changeHandler } = props;

    return <QuestionTextInput questionText={question.question} changeHandler={changeHandler} />;
};

export default TextQuestion;
