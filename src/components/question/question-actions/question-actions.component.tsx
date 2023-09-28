import React from 'react';

import IconButton from '../../ui/icon-button/icon-button.component';

import classes from './question-actions.styles.module.css';

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';

const QuestionActions: React.FC<{ cancelHandler: () => void }> = (props) => {
    const { cancelHandler } = props;

    return (
        <div className={classes['question-actions']}>
            <IconButton className={classes['delete']} onClick={cancelHandler}>
                <CloseIcon /> Delete question
            </IconButton>

            <button type="submit" className={classes['save']}>
                Save
            </button>
        </div>
    );
};

export default QuestionActions;
