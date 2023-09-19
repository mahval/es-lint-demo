import React from 'react';
import './Framework.css';
import angularLogo from '../../logos/angular.svg';
import reactLogo from '../../logos/react.svg';
import vueLogo from '../../logos/vue.svg';
import { FrameworkEnum } from '../../types/framework';

interface FrameworkProps {
    framework: FrameworkEnum;
}

export const Framework = ({ framework }: FrameworkProps) => {
    const getFrameworkLogo = () => {
        if (framework === FrameworkEnum.REACT) {
            return reactLogo;
        }

        if (framework === FrameworkEnum.ANGULAR) {
            return angularLogo;
        }

        return vueLogo;
    };

    return (
        <div className="Framework">
            <header className="Framework-header">
                <img src={getFrameworkLogo()} className="Framework-logo" alt={framework} />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="Framework-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {`Learn ${framework}`}
                </a>
            </header>
        </div>
    );
};
