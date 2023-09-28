import { IQuestion } from './app-form-question.model';

export interface IPersonalInfoItem {
    internalUse: boolean;
    show: boolean;
}

export interface IPersonalInfo {
    firstName: IPersonalInfoItem;
    lastName: IPersonalInfoItem;
    emailId: IPersonalInfoItem;
    phoneNumber: IPersonalInfoItem;
    nationality: IPersonalInfoItem;
    currentResidence: IPersonalInfoItem;
    idNumber: IPersonalInfoItem;
    dateOfBirth: IPersonalInfoItem;
    gender: IPersonalInfoItem;
    personalQuestions: IQuestion[];
}

export interface IProfileInfoItem {
    mandatory: boolean;
    show: boolean;
}

export interface IProfileInfo {
    education: IProfileInfoItem;
    experience: IProfileInfoItem;
    resume: IProfileInfoItem;
    profileQuestions: IQuestion[];
}

export interface IAppFormAttributes {
    coverImage: string;
    personalInformation: IPersonalInfo;
    profile: IProfileInfo;
    customisedQuestions: IQuestion[];
}

export interface IAppFormData {
    id: string;
    type: string;
    attributes: IAppFormAttributes;
}
