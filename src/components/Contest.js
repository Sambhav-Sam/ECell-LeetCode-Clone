import React, { useState, Children } from 'react'
import styled from "styled-components";
import "./Contest.css"
import Footer from './Footer';

const Contest = () => {
    return (
        <Container>
            <div className="top-pic">
                <div className="top-text">
                    <p>Happy Leetcoding!🎉</p>
                </div>
                <img className="leet" src="images/leet.png" alt="" />
            </div>
            <div>
                <div className="big">
                    <div className="card">
                        <div id="DisplayFrame" className="inside">
                            <div className="calender"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-[24px] text-white"><path fill-rule="evenodd" d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z" clip-rule="evenodd"></path></svg></div>
                            <a href="" target="_blank">
                                <img src="/images/air.png" alt="" style={{ height: "154px", width: "100%" }} />
                                <div className="data">
                                    <h6>Weekly Contest 311</h6>
                                    <p>Sunday 8:00 AM GMT+5:30</p>
                                </div>
                            </a>
                        </div>
                        <div className="inside">
                            <div className="calender"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-[24px] text-white"><path fill-rule="evenodd" d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z" clip-rule="evenodd"></path></svg></div>
                            <a href="" target="_blank">
                                <img src="/images/aire.png" alt="" style={{ height: "154px", width: "100%" }} />
                                <div className="data">
                                    <h6>BiWeekly Contest 175</h6>
                                    <p>Saturday 8:00 AM GMT+5:30</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <button className="l">◀</button>
                    <button className="r">▶</button>
                </div>
            </div>
            <div className="box2">
                <div className="featured">
                    <div className="textRight"><p>Featured Contests</p></div>
                    <div className="textLeft"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="1em" height="1em" fill="currentColor"><path d="M11.166 12.825l-1.714-1.847a.669.669 0 01-.164-.45.666.666 0 01.174-.444.574.574 0 01.413-.188.572.572 0 01.417.176l1.714 1.847.92-.99-6.109-6.582a2.868 2.868 0 00-2.096-.906 2.875 2.875 0 00-2.083.94 3.338 3.338 0 00-.872 2.244 3.346 3.346 0 00.84 2.26l6.108 6.582.966-1.04-1.714-1.848a.669.669 0 01-.164-.45.666.666 0 01.174-.444.574.574 0 01.413-.188.572.572 0 01.417.177l1.714 1.847.646-.696zm-2.067 4.011a.57.57 0 01-.413.164.575.575 0 01-.404-.188L1.765 9.79a4.516 4.516 0 01-.93-1.457 4.796 4.796 0 01-.024-3.468 4.53 4.53 0 01.91-1.472 4.16 4.16 0 011.366-.98 3.906 3.906 0 011.611-.335 3.911 3.911 0 011.607.361c.508.234.968.575 1.352 1.002L8.714 4.58l1.129-1.215a4.172 4.172 0 011.352-1.002A3.912 3.912 0 0112.802 2c.552-.004 1.1.11 1.611.335a4.16 4.16 0 011.367.98c.39.421.7.922.909 1.473a4.796 4.796 0 01-.024 3.467 4.517 4.517 0 01-.93 1.458l-6.515 7.02a.68.68 0 01-.121.104zm.456-11.35l4.21 4.537 1.13-1.216a3.34 3.34 0 00.872-2.27 3.34 3.34 0 00-.872-2.268 2.874 2.874 0 00-2.106-.94c-.79 0-1.548.338-2.106.94L9.556 5.485z"></path></svg><p>Sponsor a content</p></div>
                </div>
                <div className="card1">
                    <div className="inside2">
                        <a href="https://leetcode.com/contest/weekly-contest-291/" target="_blank">
                            <img src="/images/first.png" alt="" style={{ height: "154px", width: "100%" }} />
                            <div className="data">
                                <h6>Weekly Contest 291</h6>
                                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="mr-1"><path fill-rule="evenodd" d="M14.707 2.707a1 1 0 00-1.414-1.414l-2 2a1 1 0 00-.15 1.221l1.5 2.5a1 1 0 001.714-1.029l-.454-.757a8 8 0 11-6.347 1.119 1 1 0 00-1.112-1.662A9.991 9.991 0 002 13c0 5.523 4.477 10 10 10s10-4.477 10-10c0-4.775-3.347-8.769-7.823-9.762l.53-.53zM13 10a1 1 0 10-2 0v4a1 1 0 00.445.832l3 2a1 1 0 001.11-1.664L13 13.465V10z" clip-rule="evenodd"></path></svg>Ended May 1 2022</p>
                            </div>
                        </a>
                    </div>
                    <div className="inside2">
                        <a href="https://leetcode.com/contest/weekly-contest-290/" target="_blank">
                            <img src="/images/second.png" alt="" style={{ height: "154px", width: "100%" }} />
                            <div className="data">
                                <h6>Weekly Contest 290</h6>
                                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="mr-1"><path fill-rule="evenodd" d="M14.707 2.707a1 1 0 00-1.414-1.414l-2 2a1 1 0 00-.15 1.221l1.5 2.5a1 1 0 001.714-1.029l-.454-.757a8 8 0 11-6.347 1.119 1 1 0 00-1.112-1.662A9.991 9.991 0 002 13c0 5.523 4.477 10 10 10s10-4.477 10-10c0-4.775-3.347-8.769-7.823-9.762l.53-.53zM13 10a1 1 0 10-2 0v4a1 1 0 00.445.832l3 2a1 1 0 001.11-1.664L13 13.465V10z" clip-rule="evenodd"></path></svg>Ended Apr 24 2022</p>
                            </div>
                        </a>
                    </div>
                    <div className="inside2">
                        <a href="https://leetcode.com/contest/biweekly-contest-85/" target="_blank">
                            <img src="/images/third.png" alt="" style={{ height: "154px", width: "100%" }} />
                            <div className="data">
                                <h6>Biweekly Contest 85</h6>
                                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="mr-1"><path fill-rule="evenodd" d="M14.707 2.707a1 1 0 00-1.414-1.414l-2 2a1 1 0 00-.15 1.221l1.5 2.5a1 1 0 001.714-1.029l-.454-.757a8 8 0 11-6.347 1.119 1 1 0 00-1.112-1.662A9.991 9.991 0 002 13c0 5.523 4.477 10 10 10s10-4.477 10-10c0-4.775-3.347-8.769-7.823-9.762l.53-.53zM13 10a1 1 0 10-2 0v4a1 1 0 00.445.832l3 2a1 1 0 001.11-1.664L13 13.465V10z" clip-rule="evenodd"></path></svg>Ended Aug 20 2022</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="box3">
                <div className="mobile">
                    <p>Contests</p>
                    <p>Ranking</p>
                </div>
            </div>
            <Box1>
                <table>
                    <Full>
                        <Left>
                            <thead>
                                <th className="active"><p>My Contests</p></th>
                                <th><p>Past Contests</p></th>
                            </thead>
                        </Left>
                        <Right>
                            <thead>
                                <tr className="last">
                                    <th><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="mr-1 shrink-0 cursor-pointer"><path fill-rule="evenodd" d="M10.944 9.835a1 1 0 11-1.887-.663 3.25 3.25 0 016.316 1.082c0 1.06-.618 1.884-1.57 2.52a5.915 5.915 0 01-1.364.678 1 1 0 11-.633-1.897c.205-.068.552-.222.887-.446.454-.302.68-.604.68-.857a1.25 1.25 0 00-2.43-.417zM11.186 16a1 1 0 112 0v.135a1 1 0 11-2 0V16zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"></path></svg>Virtual Contest</th>
                                </tr>
                            </thead>
                        </Right>
                    </Full>
                    <tbody>

                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1"><img src="/images/one.png" alt="" /><div className="data"> <div className="up">Weekly Contest 310</div>
                                        <div className="down">Oct 30, 2022 8:00 PM GMT+5:30</div></div></td>
                                </Left>
                                <img src="/images/inside2.png" alt="" />
                                <Right>
                                    <td className="td2">Virtual</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1"><img src="/images/two.png" alt="" /><div className="data"> <div className="up">Weekly Contest 311</div>
                                        <div className="down">Oct 1, 2022 8:00 PM GMT+5:30</div></div></td>
                                </Left>
                                <Right>
                                    <td className="td2">Virtual</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1"><img src="/images/three.png" alt="" /><div className="data"> <div className="up">Weekly Contest 312</div>
                                        <div className="down">Nov 20, 2022 8:00 PM GMT+5:30</div></div></td>
                                </Left>
                                <Right>
                                    <td className="td2">Virtual</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1"><img src="/images/four.jpg" alt="" /><div className="data"> <div className="up">Weekly Contest 313</div>
                                        <div className="down">Dec 23, 2022 8:00 PM GMT+5:30</div></div></td>
                                </Left>
                                <img src="/images/inside.png" alt="" />
                                <Right>
                                    <td className="td2">Virtual</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1"><img src="/images/aire.png" alt="" /><div className="data"> <div className="up">Weekly Contest 314</div>
                                        <div className="down">Jan 4, 2022 8:00 PM GMT+5:30</div></div></td>
                                </Left>
                                <Right>
                                    <td className="td2">Virtual</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                </Left>
                                <Right>
                                    <td>
                                        <button><img src="/images/left.svg" alt="" /></button>
                                        <button><p>1</p></button>
                                        <button><p>2</p></button>
                                        <button><p>3</p></button>
                                        <button><p>4</p></button>
                                        <button><p>5</p></button>
                                        <button><p>6</p></button>
                                        <button><p>...</p></button>
                                        <button><p>41</p></button>
                                        <button><img src="/images/right.svg" alt="" /></button>
                                    </td>
                                </Right>
                            </Full1>
                        </tr>
                    </tbody>
                </table>
            </Box1>
            <Footer />
        </Container>
    )
}

const Container = styled.main`
  position: absolute;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  width: 100%;
  /* padding: 0 calc(3.5vw + 5px); */
  &:after {
    background: rgb(243,244,246);
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
const Box1 = styled.div`
max-width:1000px;
/* margin-top: 10px; */
background-color: #FFFFFF;
/* border: 1px solid black; */
margin: 15px auto;
border-radius: 10px;
box-shadow: 1px 1px 10px #888888;
/* flex=1; */
width: 100%;
table{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
thead{
    /* min-width: 58%; */
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
    /* min-width:80%; */
  }
    @media (max-width: 300px) {
        font-size: 10px;
  }
}
th{
    display: flex;
    align-items: center;
    margin: 3px 15px;
    img{
        height:30px;
        width:30px;
        @media (max-width: 300px) {
        height: 20px;
        width: 20px;
  }
    }
}
th:hover{
    background-color: rgb(242,243,244);
    cursor: pointer;
    border-radius: 8px;
}
tbody{
    margin: 3px 15px;
    tr{
    width: 100%;
    display: flex;
    margin-bottom: 7px;
    margin: 20px 0px;
    }
    @media only screen and (max-width: 479px){
    font-size: 14px;
    line-height: 0.8;
}
}
`;
const Left = styled.div`
  /* width: 60%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  p{
    font-weight: bold;
    margin-bottom:0;
    margin-top:5px;
  }
  td{
    display: flex;
    align-items: center;
    justify-content: center;
        font-size: 18px;
        img{
            height: 60px;
            width: 114px;
            border-radius: 5px;
            @media (max-width: 768px) {
                display: none;
  }
        }
    }
    @media (max-width: 768px) {
   width:100%;
  }
  `;
const Right = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-size: 12px;
    color: grey;
    img{
        height:30px;
    }
    p{
        margin-left: 10px;
    }
    th:hover{
        color: rgb(71,76,86);
        /* background-color:white; */
    }
    td{
        display: flex;
        height: 20px;
    }
    p{
    margin-right: 6px;
    display: flex;
    align-items: center;
    font-size: 17px;
    justify-content: center;
    }
    button{
        /* background-color: rgb(242,243,244); */
    border-radius:5px;
    border: none;
    margin-right: 6px;
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 30px;
    width: 30px;
    justify-content: center;
    &:hover{
        background-color:#c8c6c5;
    }
    @media (max-width: 768px) {
        width:20px;
  }
    }
  `;
const Full = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
  `;
const Full1 = styled.div`
    width:100%;
    height: 45px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    &:hover{
        color: blue;
        cursor: pointer;
    }
  `;

export default Contest