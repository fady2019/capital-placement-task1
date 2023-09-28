import { useCallback, useEffect, useRef, useState } from 'react';

function useHttp<T>() {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const activeRequests = useRef<AbortController[]>([]);

    useEffect(() => {
        return () => {
            activeRequests.current.forEach((reqCtrl) => reqCtrl.abort());
        };
    }, []);

    const sendRequest = useCallback(async (url: string, opt: RequestInit = {}) => {
        setIsLoading(true);

        const reqAbortCtrl = new AbortController();
        activeRequests.current.push(reqAbortCtrl);

        try {
            let fetchedResponse;

            try {
                fetchedResponse = await fetch(url, { ...opt, signal: reqAbortCtrl.signal });
            } catch (error) {
                throw new Error('something wrong has been occurred, please try again later!');
            }

            activeRequests.current.filter((ctrl) => ctrl !== reqAbortCtrl);

            const data = await fetchedResponse.json();

            if (!fetchedResponse.ok) {
                throw new Error(data.message);
            }

            setData(data);
        } catch (err: any) {
            const errorMsg = err.message || 'something wrong has been occurred!';
            setError(errorMsg);
        }

        setIsLoading(false);
    }, []);

    return { sendRequest, data, isLoading, error };
}

export default useHttp;
