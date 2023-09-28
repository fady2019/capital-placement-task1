import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import FormItem from '../ui/form-item/form-item.component';
import SelectMenu from '../ui/select-menu/select-menu.component';
import TextQuestion from '../question/question-types/text-question.component';
import YesNoQuestion from '../question/question-types/yes-no-question.component';
import DropdownQuestion from './question-types/dropdown-question.component';
import MultipleChoiceQuestion from '../question/question-types/multiple-choice-question.component';
import QuestionActions from './question-actions/question-actions.component';
import QuestionOverview from './question-overview/question-overview.component';
import VideoQuestion from './question-types/video-question/video-question.component';

import { EQuestionType, IQuestion } from '../../models/app-form/app-form-question.model';

import classes from './question.styles.module.css';

const Question: React.FC<{
    question: IQuestion & { isNew?: boolean };
    saveQuestionHandler: (question: IQuestion) => void;
    deleteQuestionHandler: (id: string) => void;
}> = (props) => {
    const { question, saveQuestionHandler, deleteQuestionHandler } = props;

    const questionRef = useRef(question);
    const [questionType, setQuestionType] = useState<string>(questionRef.current.type);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(question.isNew === true);
    }, [question.isNew]);

    useLayoutEffect(() => {
        questionRef.current = question;
    });

    const handleSavingQuestion = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveQuestionHandler(questionRef.current);
        setIsOpen(false);
    };

    const typeOptions = Object.entries(EQuestionType).map(([label, id]) => ({
        label,
        id,
    }));

    let QuestionCom = TextQuestion;

    switch (questionType) {
        case EQuestionType['Dropdown']:
            QuestionCom = DropdownQuestion;
            break;
        case EQuestionType['Multiple choice']:
            QuestionCom = MultipleChoiceQuestion;
            break;
        case EQuestionType['Video question']:
            QuestionCom = VideoQuestion;
            break;
        case EQuestionType['Yes/No']:
            QuestionCom = YesNoQuestion;
            break;
    }

    if (!isOpen) {
        return (
            <QuestionOverview
                type={typeOptions.find((t) => t.id === question.type)?.label!}
                question={question.question}
                openQuestionDetailHandler={() => {
                    setIsOpen(true);
                }}
            />
        );
    }

    return (
        <form onSubmit={handleSavingQuestion} className={classes['question-form']}>
            {questionRef.current.isNew && (
                <FormItem>
                    <label>Type</label>

                    <SelectMenu
                        label="Choice a type"
                        options={typeOptions}
                        onChange={(type) => setQuestionType(type!)}
                        defaultValue={questionType}
                        required={true}
                    />
                </FormItem>
            )}

            <QuestionCom
                question={questionRef.current}
                changeHandler={(question) => {
                    questionRef.current = {
                        ...questionRef.current,
                        type: questionType as EQuestionType,
                        ...question,
                    };
                }}
            />

            <QuestionActions cancelHandler={deleteQuestionHandler.bind(null, question.id)} />
        </form>
    );
};

export default Question;
