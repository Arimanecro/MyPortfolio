import React, { ReactElement, useContext } from "react";
import { ContextSettings } from '../../context/context';
import styled from 'styled-components';
import bg from '../../public/img/btnclose.png';

const BtnClose = styled.div`
    width: 40px;
    height: 40px;
    background: url(${bg}) no-repeat;
    background-size:contain;
    position:absolute;
    z-index: 5;
    top:0px;
    right:0px;
`;
export default (): ReactElement => {
    let [settings, setSettings] = useContext(ContextSettings);
    return (<BtnClose onClick={() => setSettings({ ...settings, go: true, close: true })} />);
};