export enum EQuestionType {
    'Paragraph' = 'Paragraph',
    'Short answer' = 'ShortAnswer',
    'Yes/No' = 'YesNo',
    'Dropdown' = 'Dropdown',
    'Multiple choice' = 'MultipleChoice',
    'Date' = 'Date',
    'Number' = 'Number',
    'File upload' = 'FileUpload',
    'Video question' = 'Video',
}

export enum EVideoQuestionDurationFormat {
    'Seconds' = 'Sec',
    'Minutes' = 'Min',
}

export interface IQuestion {
    id: string;
    type: EQuestionType;
    question: string;
    choices?: string[];
    maxChoice?: number;
    disqualify?: boolean;
    other?: boolean;
    videoAdditionalInfo?: string;
    videoMaxDuration?: number;
    videoMaxDurationFormat?: EVideoQuestionDurationFormat;
}
