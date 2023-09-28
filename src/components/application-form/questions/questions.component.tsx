import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Question from '../../question/question.component';
import IconButton from '../../ui/icon-button/icon-button.component';

import { EQuestionType, IQuestion } from '../../../models/app-form/app-form-question.model';

import classes from './questions.styles.module.css';

import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg';

const Questions: React.FC<{
    questions?: IQuestion[];
    questionsChangesHandler: (questions: IQuestion[]) => void;
}> = (props) => {
    const [questions, setQuestions] = useState<(IQuestion & { isNew?: boolean })[]>([]);
    const questionsChangesHandlerRef = useRef(props.questionsChangesHandler);
    const isQuestionsChanged = useRef(false);

    useEffect(() => {
        setQuestions(props.questions || []);
    }, [props.questions]);

    useEffect(() => {
        if (!isQuestionsChanged.current) {
            return;
        }

        questionsChangesHandlerRef.current(
            questions.map((question) => {
                const _question = { ...question };
                delete _question.isNew;
                return _question;
            })
        );

        isQuestionsChanged.current = false;
    }, [questions]);

    useLayoutEffect(() => {
        questionsChangesHandlerRef.current = props.questionsChangesHandler;
    });

    const handleAddingQuestion = () => {
        setQuestions((curr) => {
            return curr.concat([
                {
                    id: uuid(),
                    type: EQuestionType['Paragraph'],
                    question: '',
                    isNew: true,
                },
            ]);
        });
    };

    const handleSavingQuestion = (question: IQuestion) => {
        isQuestionsChanged.current = true;

        setQuestions((curr) => {
            const idx = curr.findIndex((q) => q.id === question.id);

            if (idx === -1) {
                return curr;
            }

            const _questions = [...curr];
            _questions[idx] = {
                ...question,
                isNew: false,
            };

            return _questions;
        });
    };

    const handleDeletingQuestion = (id: string) => {
        setQuestions((curr) => {
            isQuestionsChanged.current = curr.find((q) => q.id === id)?.isNew !== true;
            return curr.filter(({ id: questionId }) => questionId !== id);
        });
    };

    return (
        <div>
            <div className={classes['question-list']}>
                {questions.map((question) => {
                    return (
                        <Question
                            key={question.id}
                            question={question}
                            saveQuestionHandler={handleSavingQuestion}
                            deleteQuestionHandler={handleDeletingQuestion}
                        />
                    );
                })}
            </div>

            <IconButton className={classes['add-question-btn']} onClick={handleAddingQuestion}>
                <AddIcon /> Add a question
            </IconButton>
        </div>
    );
};

export default Questions;
