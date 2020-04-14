import React, { Suspense, ReactElement, useContext } from "react";
import { ContextSettings } from '../../context/context';
import styled from 'styled-components';
import BtnClose from './btnClose';

const LazyComponents = {
    about: React.lazy(() => import('../categories/about')),
    contacts: React.lazy(() => import('../categories/contacts')),
    skills: React.lazy(() => import('../categories/skills')),
    stacks: React.lazy(() => import('../categories/stack'))
}

const Panel = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-left: ${(props) => (props.go && !props.close) ? "0vw" : "-100vw"};
    background-color: rgba(68, 46, 104, 0.75);
    position:absolute;
    transition: all ease .55s;
    z-index: 2;
    top:0px;
`;

export default (props): ReactElement => {
    let [settings] = useContext(ContextSettings);
    const Category = LazyComponents[settings.category];
    return (
        <Panel {...settings}>
            <BtnClose />
            <Suspense fallback={<></>}>
                <Category />
            </Suspense>
        </Panel>
    );
}