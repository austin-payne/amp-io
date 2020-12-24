import { useEffect } from 'react';

export const useRemoveServerStyles = () =>
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);
