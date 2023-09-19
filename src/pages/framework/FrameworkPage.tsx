import React from 'react';
import { useParams } from 'react-router-dom';
import { Framework } from '../../components/framework/Framework';
import { Navigation } from '../../components/navigation/Navigation';
import { ensureIsValidFramework } from '../../utils/query-utils';

export const FrameworkPage = () => {
    const { framework } = useParams();

    const foundFramework = ensureIsValidFramework(framework);

    return (
        <>
            <Navigation />
            {foundFramework !== null && <Framework framework={foundFramework} />}
        </>
    );
};
