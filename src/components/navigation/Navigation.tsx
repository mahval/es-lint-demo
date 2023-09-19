import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FrameworkEnum } from '../../types/framework';

export const Navigation = () => {
    const navigate = useNavigate();

    return (
        <NavigateRow>
            <NavigateButton onClick={() => navigate(`/frameworks/${FrameworkEnum.REACT}`)}>React</NavigateButton>
            <NavigateButton onClick={() => navigate(`/frameworks/${FrameworkEnum.ANGULAR}`)}>Angular</NavigateButton>
            <NavigateButton onClick={() => navigate(`/frameworks/${FrameworkEnum.VUE}`)}>Vue</NavigateButton>
        </NavigateRow>
    );
};

const NavigateRow = styled.nav`
    display: flex;
    flex-flow: row wrap;
`;

const NavigateButton = styled.button`
    flex-grow: 1;
    background: #61dafb;
    border: 4px solid #282c34;
    padding: 24px 0;
    font-size: 2rem;
    color: #282c34;
    cursor: pointer;

    &:hover {
        background-color: #d9f2f9;
    }
`;
