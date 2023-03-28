import React, { useState } from 'react';
import styled from 'styled-components';
import '../index.css';
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const carsModel = ['model 5', 'model 3', 'model x', 'model y', 'solar roof', 'solar panels', 'power wall'];
    const sideNav = ['Existing inventory', 'used inventory', 'Trade-in', 'demo drive', 'insurance', 'cybertruck', 'roadster', 'semi', 'charging', 'commercial energy', 'utilities', 'find us', 'support', 'investor relations'];
    return (
        <Container>
        <a>
            <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
            {carsModel.map((car, index) => {<a key={index} href="#">{car}</a>})}
            <a href="#">model 5</a>
            <a href="#">model 3</a>
            <a href="#">model x</a>
            <a href="#">model y</a>
            <a href="#">solar roof</a>
            <a href="#">solar panels</a>
            <a href="#">power wall</a>
        </Menu>
        <RightMenu>
            <a href="#">shop</a>
            <a href="#">account</a>
            <a href="#" onClick={() => setBurgerStatus(true)}>menu</a>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrap>
                <CloseBtn onClick={() => setBurgerStatus(false)}>
                    <span className='leftClose'></span>
                    <span className='rightClose'></span>
                </CloseBtn>
            </CloseWrap>
            {sideNav.map((car, index) => 
                <li key={index}><a href="#">{car}</a></li>
            )}
        </BurgerNav>
    </Container>
  )
}
export default Header;
const Container = styled.div`
    min-height:60px;
    position: fixed;
    padding: 0 45px;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    @media(max-width: 768px) {
        padding: 0 15px;
    }
`

const Menu = styled.div`
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        margin: 0 10px;
        text-transform: uppercase;
        font-weight: 600;
    }
    @media(max-width: 768px) {
        display: none;
    }

`
const RightMenu = styled(Menu)`
    a{
        margin-right: 0;
    }
    @media(max-width: 768px) {
        display: block;
    }
`
const BurgerNav = styled.div`
    padding: 30px;
    position: fixed;
    top: 0;
    right: 0;
    bottom; 0;
    height: 100vh;
    width: 300px;
    background-color: #fff;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform ease-in-out .2s;
    z-index: 9999;
    li {
        list-style: none;
        margin: 25px 0;
        a{
            color: #000;
            font-weight: 600;
            text-transform: capitalize;
        }
    }
`

const CloseWrap = styled.div `
        display: flex;
        justify-content: flex-end;
        align-items: center;
`

const CloseBtn = styled.div`
    cursor: pointer;
`