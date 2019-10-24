import React, { ReactElement } from "react";
import styled from 'styled-components';
import bg from '../public/img/grass.jpg';

const Grass = styled.div`
    width: 100%;
    height: 31px;
    background: url(${bg});
    position:absolute;
    ${props => props.top ? "top:0px" : "bottom:0px"};
    z-index: 1;
`;
export default (props): ReactElement => { return (<Grass top={props.top} />); };