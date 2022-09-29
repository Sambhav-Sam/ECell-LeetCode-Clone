// import { useEffect } from "react";
// import { useState } from "react";
// import { connect } from "react-redux";
import styled from "styled-components";
// import PostModal from "./PostModal";

const Main = () => {
    return (
        <Container>
            <Box>
                <ShareBox>
                    <h5>Solved Problems</h5>
                    <Line>
                        <div>
                            Easy
                        </div>
                        <div>
                            Easy
                        </div>
                        <div>
                            Easy
                        </div>
                    </Line>
                    <Line>
                        <div>
                            Easy
                        </div>
                        <div>
                            Easy
                        </div>
                        <div>
                            Easy
                        </div>
                    </Line>
                    <Line>
                        <div>
                            Easy
                        </div>
                        <div>
                            Easy
                        </div>
                        <div>
                            Easy
                        </div>
                    </Line>
                </ShareBox>
                <ShareBox>
                    <div>
                        <h5>Badges</h5>
                        <h4>0</h4>
                    </div>
                </ShareBox>
            </Box>
            <Vse>
                <ShareBox>
                <ContentMeta>
                    <Controls>
                        <h1>LeaderBoard</h1>
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Points</th>
                                    <th>Team</th>
                                    <th>Connect</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Sambhav</td>
                                    <td>90000</td>
                                    <td>dcode</td>
                                    <td>
                                        <button >
                                            <span></span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="active-row">
                                    <td>2</td>
                                    <td>Sam</td>
                                    <td>80000</td>
                                    <td>d1code</td>
                                    <td>
                                        <button >
                                            <span></span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Rohan</td>
                                    <td>70000</td>
                                    <td>d2code</td>
                                    <td>
                                        <button >
                                            <span><img src="/images/widget-icon.svg" alt="" /></span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Rohan</td>
                                    <td>70000</td>
                                    <td>d2code</td>
                                    <td>
                                        <button >
                                            <span><img src="/images/widget-icon.svg" alt="" /></span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Controls>
                </ContentMeta>
                </ShareBox>
            </Vse>
        </Container>
    )
};

const Vse = styled.div`
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  color: black;
  &:after {
    background: url("/images/bg.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 0.4;
    z-index: -1;
  }
`;

const ContentMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
  padding: 0px 26px;
  h1{
    padding-left: 10px;
    color: #fafafa;
    background-color: #009879;
    border-radius: 4px;
`;

const Player = styled.button`
  /* font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0); */
  @media (max-width: 768px) {
    height: 20px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 20px;
    }
  }
`;
const Container = styled.div`
  grid-area: main;
  margin-top: 20px;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-left: 10px;
`;

const Box = styled.div`
    display: flex;
`;
const Line = styled.div`
    /* align-items: baseline; */
    margin: 0 20px;
    display: flex;
    width: 60%;
    justify-content: space-between;
    &:before{
        content: "";
        border-bottom: 1px solid black;
    }
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  height: 100px;
  flex-direction: column;
  flex: 1;
  color: #958b7b;
  background: white;
  h5{
    display: flex;
    padding: 0px 8px;
    margin-top: 12px;
    margin-bottom: 1px;
  }
`;

export default Main;