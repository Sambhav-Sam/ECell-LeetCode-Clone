import React from 'react';
import styled from "styled-components";

function Card() {
  return (
    <CardContainer>
      <h1>Some Clones Made By Me</h1>
      <CardInside>
        <Inside>
          <a href="https://linkedin-clone-dcd52.web.app/" target="_blank">
            <img src="/images/linked.png" alt="" style={{ height: "154px", width: "100%" }} />
            <hr />
            <h6>LinkedIn Clone</h6>
            <p>This is a Clone of LinkedIn with Login Page And connected to firebase.</p>
          </a>
        </Inside>
        <Inside>
          <a href="https://disneyplus-clone-2881b.web.app/" target="_blank">
            <img src="/images/disney2.png" alt="" style={{ height: "154px", width: "100%" }} />
            <hr />
            <h6>Disney Clone</h6>
            <p>This is a Clone of Disney with Login Page, connected to firebase And Videos Loop Functionality</p>
          </a>
        </Inside>
        <Inside>
          <a href="https://clone-57acb.web.app/" target="_blank">
            <img src="/images/amazon.png" alt="" style={{ height: "154px", width: "100%" }} />
            <hr />
            <h6>Amazon Clone</h6>
            <p>This is a Clone of Amazon with Login Page And connected to firebase database.</p>
          </a>
        </Inside>
      </CardInside>
      <Last>
        <h2>Click On the Cards Above To View The Website of These Clones</h2>
        <img src="/images/arrow.png" alt="" />
      </Last>
    </CardContainer>
  )
};

const CardContainer = styled.div`
  position: relative;
  /* display:flex;
  flex-direction: column; */
  h1{
      margin-top:40px;
  }
`;

const CardInside = styled.div`
  margin-top:14px;
  display:flex;
  justify-content: space-around;
  
`;

const Inside = styled.div`
  background-color: #f3f3f3;
  margin-right: 20px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  width: 360px;
  color: #4d689e;
  cursor: pointer;
  a{
    color: #866eb2;
    text-decoration: none;
    background-color: #f3f3f3;
  }
  h6{
    font-size: 20px;
    padding: 0px 100px;
    font-weight: 700;
    margin-top: -4px;
    margin-bottom: 0px;
  }
  p{
      width: 100%;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Last = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: 27px;
  img{
    height: 32px;
    width: 32px;
  }
`;


export default Card;
