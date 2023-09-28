import React from 'react';

import IconButton from '../../ui/icon-button/icon-button.component';

import classes from './question-overview.styles.module.css';

import { ReactComponent as PenIcon } from '../../../assets/icons/pen.svg';

const QuestionOverview: React.FC<{
    type: string;
    question: string;
    openQuestionDetailHandler: () => void;
}> = (props) => {
    const { type, question, openQuestionDetailHandler } = props;

    return (
        <div className={classes['question-overview']}>
            <p className={classes['question-overview__title']}>{type}</p>
            <div className={classes['question-overview__body']}>
                <h2>{question}</h2>

                <IconButton onClick={openQuestionDetailHandler}>
                    <PenIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default QuestionOverview;
