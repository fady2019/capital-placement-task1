import { useEffect, useRef } from 'react';

import CoverImagUploader from './cover-image/cover-image-uploader.component';
import PersonalInfo from './personal-info/personal-info.component';
import ProfileInfo from './profile-info/profile-info.component';
import AdditionalQuestions from './additional-questions/additional-questions.component';

import useHttp from '../../hooks/http.hook';
import { IAppFormData } from '../../models/app-form/app-form.model';

import classes from './application-form.styles.module.css';

const APP_FORM_BACKEND_URL = `${process.env.REACT_APP_BACKEND_APP_URL}/api/1.0/programs/1/application-form`;

const ApplicationForm = () => {
    const {
        sendRequest: fetchAppFormData,
        data: fetchedData,
        // isLoading: isFetchingData,
        // error: errorOnFetching,
    } = useHttp<{ data: IAppFormData }>();

    const {
        sendRequest: saveAppFormData,
        // isLoading: isSavingData,
        // data: savedData,
        // error: errorOnSaving,
    } = useHttp<{ data: IAppFormData }>();

    const appFormDataLastUpdateRef = useRef<IAppFormData>();

    const appFormData = appFormDataLastUpdateRef.current || fetchedData?.data;

    useEffect(() => {
        fetchAppFormData(APP_FORM_BACKEND_URL);
    }, []);

    const handleAttributesChange = (key: string, value: any) => {
        const _data: any = {
            ...appFormData,
            attributes: {
                ...appFormData?.attributes,
                [key]: value,
            },
        };

        appFormDataLastUpdateRef.current = _data;

        console.log('Final Data', _data);

        saveAppFormData(APP_FORM_BACKEND_URL, {
            method: 'put',
            body: JSON.stringify({ data: _data }),
            headers: { 'Content-Type': 'application/json' },
        });
    };

    // if (errorOnFetching) {
    //     console.error(errorOnFetching);
    // }

    // if (isFetchingData || isSavingData) {
    //     return <h2 style={{ textAlign: 'center' }}>{isFetchingData ? 'Fetching...' : 'Saving...'}</h2>;
    // }

    return (
        <div className={classes['application-form']}>
            <CoverImagUploader
                coverImage={appFormData?.attributes?.coverImage}
                imagePickingHandler={(_image, url) => {
                    handleAttributesChange('coverImage', url);
                }}
            />

            <PersonalInfo
                personalInfo={appFormData?.attributes?.personalInformation}
                changeHandler={handleAttributesChange.bind(null, 'personalInformation')}
            />

            <ProfileInfo
                profileInfo={appFormData?.attributes?.profile}
                changeHandler={handleAttributesChange.bind(null, 'profile')}
            />

            <AdditionalQuestions
                additionalQuestions={appFormData?.attributes.customisedQuestions}
                handleQuestionsUpdating={handleAttributesChange.bind(null, 'customisedQuestions')}
            />
        </div>
    );
};

export default ApplicationForm;
