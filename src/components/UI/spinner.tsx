import React, { ReactElement } from "react";
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import bg_knight from '/public/img/sprites/knight.png';
import bg_goldKnight from '/public/img/sprites/gold_knight.png';
import bg_bloodbd from '/public/img/sprites/bloodbug.png';
import bg_explosion from '/public/img/sprites/ZUiY.gif';

export default (): ReactElement => {

  createGlobalStyle`
    font-family: "KreepTown";
    src: url("/public/wf/KreepTown.eot?#iefix") format("embedded-opentype"),
      url("/public/wf/KreepTown.woff") format("woff"),
      url("/public/wf/KreepTown.ttf") format("truetype"),
      url("/public/wf/KreepTown.svg#KreepTown") format("svg");
    font-weight: normal;
    font-style: normal;
`

  const knight_attack = keyframes`
    from {
        background-position-x: 0px;
      }
      to {
        background-position-x: -796px;
      }
    `;
  const gold_knight_attack = keyframes`
    from {
        background-position-x: 0px;
      }
      to {
        background-position-x: -804px;
      }
    `;
  const bloodbug = keyframes`
    from {
        background-position-x: 0px;
      }
      to {
        background-position-x: -942px;
      }
    `;

  const knight_an = props => css`${knight_attack} .55s steps(7) infinite`;
  const gold_knight_an = props => css`${gold_knight_attack} .55s steps(7) infinite`;
  const bloodbug_an = props => css`${bloodbug} 1.35s steps(12) infinite`;

  const Spinner = styled.div`
        display:flex;
        justify-content:center;
        align-items: flex-end;
        width: 288px;
        height: 168px;
        position:absolute;
        z-index:6;
        left: 0; 
        right: 0;
        top: 50%; 
        margin-left: auto; 
        margin-right: auto;
        transform: translateY(-50%);      
    `;

  const Character = styled.div`
        will-change: transform;
        z-index: 1;
        transition: all ease;
    `;

  const Knight = styled(Character)`
        width: 111px;
        height: 118px;
        left:186px;
        background: url("${bg_knight}") no-repeat;
        animation: ${knight_an}
    `;

  const GoldKnight = styled(Character)`
    width: 112px;
    height: 106px;
    transform: rotateY(-180deg);
    background: url("${bg_goldKnight}") no-repeat;
    animation: ${gold_knight_an}
    `;

  const BloodBug = styled.div`
    width: 74px;
    height: 80px;
    margin: 0px -16px 0px -18px;
    text-align:center;
    background: url("${bg_bloodbd}") no-repeat;
    background-position-y: 30px;
    animation: ${bloodbug_an};
    z-index: 2;
    `
  const Explosion = styled.div`
        width: 74px;
        height: 51px;
        background: url("${bg_explosion}") no-repeat;
        background-size: contain;
        background-position-y: 0px;
        z-index:3;
    `

  const Bug = styled.p`
      color:#fb2502;
      font-size:20px;
      font-family: "KreepTown";
    `

  const Loading = styled.div`
      color: #bb02bb;
      font-size:34px;
      font-family: "KreepTown";
      position:absolute;
      top:0px;
    `
  return (
    <Spinner id="spinner">
      <Loading>Loading...</Loading>
      <Knight />
      <BloodBug>
        <Bug>BUG</Bug>
        <Explosion />
      </BloodBug>
      <GoldKnight />
    </Spinner>
  )
}