import React from 'react';
import styled from 'styled-components';

function Section({title, describtion, backgroundImg, leftButton, rightButton}) {
    return (
      <Wrap bgImg={backgroundImg}>
          <ItemText>
              <h1>{title}</h1>
              {describtion &&
              <p>{describtion}</p>}
          </ItemText>
          <Buttons>
              <ButtonGroup>
                  <LeftButton>{leftButton}</LeftButton>
                  {rightButton && 
                  <RightButton>{rightButton}</RightButton>}
                  
              </ButtonGroup>
              <DownArrow src="/images/down-arrow.svg"/>
          </Buttons>
      </Wrap>
    )
  }
  
  export default Section;
  const Wrap = styled.div`
      display: flex;
      justify-content: space-between;
      align-items:center;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: ${props => `url("/images/${props.bgImg}")`};
  `
  
  const ItemText = styled.div`
      padding-top: 15vh;
      text-align: center;
  
  `

  const ButtonGroup = styled.div`
      display: flex;
      margin-bottom: 30px;
      justify-content:center;
      align-items: center;
      @media (max-width: 768px) {
          flex-direction: column;
      }
  
  `
  const LeftButton = styled.div`
      margin: 8px; 
      background-color: rgba(23,26,32,0.8);
      height: 40px;
      width: 256px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      opacity: .85;
      text-transform: uppercase;
      font-size: 12px;
  `
  const RightButton = styled(LeftButton)`
      background-color: #fff;
      opacity: 0.65;
      color: #363c41;
  `
  const DownArrow = styled.img`
      height: 40px;
      animation: animateDown infinite 1.5s;
  `
  const Buttons = styled.div`
      padding-bottom: 10px;
      flex-direction: column
    display: flex;
    justify-content: center;
    align-items: center;
  `