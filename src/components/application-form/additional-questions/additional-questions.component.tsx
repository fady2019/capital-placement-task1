import React from 'react';

import Card from '../../ui/card/card.component';
import Questions from '../questions/questions.component';
import { IQuestion } from '../../../models/app-form/app-form-question.model';

const AdditionalQuestions: React.FC<{
    additionalQuestions?: IQuestion[];
    handleQuestionsUpdating: (questions: IQuestion[]) => void;
}> = (props) => {
    const { additionalQuestions, handleQuestionsUpdating } = props;

    return (
        <Card title="Additional questions">
            <Questions questions={additionalQuestions} questionsChangesHandler={handleQuestionsUpdating} />
        </Card>
    );
};

export default AdditionalQuestions;
