import { useReducer } from 'react';

export enum EAppFormInfoReducerActionType {
    SET_DEFAULT,
    UPDATE_INFO,
    UPDATE_QUESTIONS,
}

export interface IAppFormInfoReducerAction {
    type?: EAppFormInfoReducerActionType;
    payload?: any;
}

function appFormInfoReducerFunc<T>(state: Partial<T>, action: IAppFormInfoReducerAction) {
    const { type, payload } = action;

    let newState: Partial<T> = {
        ...state,
    };

    if (type === EAppFormInfoReducerActionType.SET_DEFAULT) {
        newState = {
            ...action.payload,
        };
    } else if (type === EAppFormInfoReducerActionType.UPDATE_INFO) {
        const { key, info } = payload;

        newState = {
            ...newState,
            [key]: {
                ...(newState as any)[key],
                ...info,
            },
        };
    } else if (type === EAppFormInfoReducerActionType.UPDATE_QUESTIONS) {
        const { key, questions } = payload;
        newState = {
            ...newState,
            [key]: questions,
        };
    }

    return newState;
}

function useAppFormInfo<T>(initInfo?: T) {
    const [info, dispatch] = useReducer(appFormInfoReducerFunc<T>, { ...initInfo });

    return { info, dispatch };
}

export default useAppFormInfo;
