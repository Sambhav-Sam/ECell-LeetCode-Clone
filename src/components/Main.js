// import { useEffect } from "react";
// import { useState } from "react";
// import { connect } from "react-redux";
import styled from "styled-components";
import "./Main.css";
import Footer from "./Footer.js"
// import PostModal from "./PostModal";

const Main = () => {
    return (
        <Container>
            <Box>
                <SmallBox>
                    <h4>Solved Problems</h4>
                    <Prob>
                        <Level>
                            <p style={{ color: "grey" }}>Easy</p>
                            <p style={{ color: "grey" }}><strong style={{ fontSize: "19px", color: "black" }}>21</strong>/592</p>
                            <p style={{ color: "grey" }}>Beats:51.8%</p>
                        </Level>

                        <Epro>
                            <Epro1>

                            </Epro1>
                        </Epro>
                    </Prob>
                    <Prob>
                        <Level>
                            <p style={{ color: "grey" }}>Medium</p>
                            <p style={{ color: "grey" }}><strong style={{ fontSize: "19px", color: "black" }}>89</strong>/1285</p>
                            <p style={{ color: "grey" }}>Beats:84.0%</p>
                        </Level>
                        <Mpro>
                            <Mpro1>

                            </Mpro1>
                        </Mpro>
                    </Prob>
                    <Prob>
                        <Level>
                            <p style={{ color: "grey" }}>Hard</p>
                            <p style={{ color: "grey" }}><strong style={{ fontSize: "19px", color: "black" }}>25</strong>/530</p>
                            <p style={{ color: "grey" }}>Beats:81.7%</p>
                        </Level>
                        <Hpro>
                            <Hpro1>

                            </Hpro1>
                        </Hpro>
                    </Prob>
                </SmallBox>
                <SmallBox1>
                    <Space>
                        <Top>
                            <h4>Badges</h4>
                            <h4 style={{ fontSize: "20px" }}>0</h4>
                        </Top>
                        <Bottom>
                            <p style={{ color: "grey" }}>Locked Badge</p>
                            <p style={{ fontWeight: "bold", width: "200%" }}>Sep LeetCoding Challenge</p>
                        </Bottom>
                    </Space>
                    <Image>
                        <img src="/images/badge.svg" alt="" />
                    </Image>
                </SmallBox1>
            </Box>
            <Box1>
                <table>
                    <Full>
                        <Left>
                            <thead>
                                <th>
                                    <img src="/images/checklist.svg" alt="" /><p> Recent AC</p></th>
                                <th>
                                    <img src="/images/check-box.svg" alt="" />Solution</th>
                                <th>
                                    <img src="/images/discuss.svg" alt="" />Discuss</th>
                            </thead>
                        </Left>
                        <Right>
                            <thead>
                                <tr>
                                    <th>View Submissions <img src="/images/right.svg" alt="" style={{ opacity: "0.5" }} /> </th>
                                </tr>
                            </thead>
                        </Right>
                    </Full>
                    <tbody>

                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                        <tr className="active-row">
                            <Full1>
                                <Left>
                                    <td className="td1">Best Time to Buy and Sell Stock IV</td>
                                </Left>
                                <Right>
                                    <td className="td2">2 days left</td>
                                </Right>
                            </Full1>
                        </tr>
                    </tbody>
                </table>
            </Box1>
        </Container>
    )
};

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;
const Image = styled.div`
    display: flex;
    width: 57%;
    align-items: center;
    justify-content: center;
img{
    height: 100px;
    opacity: 0.1;
}
`;

const Box = styled.div`
  display: flex;
  width: 103.7%;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 430px;
  }
  `;

const Epro = styled.div`
  /* border: 1px solid #8fdad0; */
  background-color: rgb(228,245,234);
  border-radius: 5px;
  width: 85% ;
  margin: 0 20px;
  `;
const Epro1 = styled.div`
  border-radius: 5px;
  height:4px;
  width:8%;
  animation:sambhav 2s ease-in;
  background-color: #8fdad0;
  @keyframes sambhav {
        from {
            width: 0%;
        }

        to {
            width: 8%;
        }
    }
  `;
const Mpro = styled.div`
  /* border: 1px solid yellow; */
  background-color:rgb(255,243,214);
  border-radius: 5px;
  width: 85% ;
  margin: 0 20px;
  `;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  td{
        font-size: 18px;
    }
    @media (max-width: 768px) {
   width:100%;
  }
  `;
const Right = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-size: 16px;
    color: grey;
    th:hover{
        color: #ffc54d;
        background-color:white;
    }
    @media (max-width: 768px) {
   display: none;
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
  `;
const Mpro1 = styled.div`
  border-radius: 5px;
  height:4px;
  width:25%;
  animation:sambhav1 2s ease-in;
  background-color: #ffc54d;
  @keyframes sambhav1 {
        from {
            width: 0%;
        }

        to {
            width: 25%;
        }
    }
  `;
const Hpro = styled.div`
  /* border: 1px solid red; */
  background-color: rgb(253,240,240);
  border-radius: 5px;
  width: 85% ;
  margin: 0 20px;
  `;
const Hpro1 = styled.div`
  border-radius: 5px;
  height:4px;
  width:17%;
  animation:sambhav3 2s ease-in;
  background-color: #f06864;
  @keyframes sambhav3 {
        from {
            width: 0%;
        }

        to {
            width: 17%;
        }
    }
  `;

const Box1 = styled.div`
margin-top: 10px;
background-color: #FFFFFF;
/* border: 1px solid black; */
margin: 10px 0px;
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
    min-width: 58%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
    min-width:80%;
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
}
tbody{
    margin: 3px 15px;
    tr{
    width: 100%;
    display: flex;
    }
    tr:nth-child(odd){
        background-color:rgb(247,247,248);
    }
    @media only screen and (max-width: 479px){
    font-size: 14px;
    line-height: 0.8;
}
`;



const SmallBox = styled.div`
display: flex;
flex-direction: column;
box-shadow: 1px 1px 10px #888888;
border-radius: 10px;
margin-left: 0 -10px;
background-color: #FFFFFF;
height:250px;
/* width: 50%; */
flex: 0.49;
h4{
    margin: 10px 15px;
    color: grey;
}
@media (max-width: 768px) {
    margin: 10px 0px;
    width: 95%;
    font-size: 14px;
    margin-top: -32px;
  }
`;
const SmallBox1 = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex: 0.49;
    box-shadow: 1px 1px 10px #888888;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #FFFFFF;
    /* width: 50%; */
    @media (max-width: 768px) {
    margin: 10px 0px;
    width: 95%;
    font-size: 14px;
  }
h4{
    margin: 7px 5px;
    margin-bottom: 0;
}
`;
const Prob = styled.div`

`;
const Level = styled.div`
    padding-left:20px;
    display: flex;
    width: 90%;
    height: 50px;
    justify-content: space-between;
    /* margin: -10px 5px; */
`;

const Top = styled.div`
h4{
    margin: 10px 15px;
    font-weight: bold;
    font-size: 26px;
    width: 200%;
    margin-left: 14px;
}
h4:first-child{
    margin: 10px 15px;
    color: grey;
    font-size: 18px;
}
h4:last-child{
    margin-top: 0;
}
`;
const Bottom = styled.div`
p{
    margin-top: 0;
    font-weight: bold;
    width: 200%;
    margin-left: 14px;
}
`;
const Space = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: -webkit-fill-available; */
`;

export default Main;