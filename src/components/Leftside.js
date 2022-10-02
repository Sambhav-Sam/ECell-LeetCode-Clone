import styled from "styled-components";
import Footer from "./Footer";

const Leftside = () => {
    return <Container>
        <ArtCard>
            <UserInfo>
                <CardBackground>
                    <a>
                        <img src="/images/avatar2.svg" alt="" />
                    </a>
                    <List>
                        <h4>Test User</h4>
                        <p>test@2345</p>
                        <h5>Rank 323,456</h5>
                    </List>
                </CardBackground>
                <a>
                    <AddPhotoText>Edit Profile</AddPhotoText>
                </a>
            </UserInfo>
            <Widget>
                <a>
                    <Info>
                        <img src="/images/location.svg" alt="" style={{ height: "15px", width: "15px" }} />
                        <p>India</p>
                    </Info>
                    <Info>
                        <img src="/images/graduate.svg" alt="" style={{ height: "15px", width: "15px" }} />
                        <p>MNNIT Allahabad</p>
                    </Info>
                    <Info>
                        <img src="/images/github.svg" alt="" style={{ height: "15px", width: "15px" }} />
                        <p>TestUser</p>
                    </Info>
                    <Info>
                        <img src="/images/linkedin.svg" alt="" style={{ height: "15px", width: "15px" }} />
                        <p>test-user</p>
                    </Info>
                </a>
            </Widget>
            <Item>
                <span>
                    <h3>Community Stats</h3>
                </span>
                <Info>
                    <img src="/images/view.svg" alt="" style={{ height: "15px", width: "15px" }} />
                    <Row>
                        <p style={{ fontSize: "14px" }}>Views 0</p>
                        <p style={{ marginTop: "1px", fontSize: "12px" }}>Last week 0</p>
                    </Row>
                </Info>
                <Info>
                    <img src="/images/solution.svg" alt="" style={{ height: "15px", width: "15px", top: "30px" }} />
                    <Row>
                        <p style={{ fontSize: "14px" }}>Solution 0</p>
                        <p style={{ marginTop: "1px", fontSize: "12px" }}>Last week 0</p>
                    </Row>
                </Info>
                <Info>
                    <img src="/images/chat.svg" alt="" style={{ height: "15px", width: "15px" }} />
                    <Row>
                        <p style={{ fontSize: "14px" }}>Discussion 0</p>
                        <p style={{ marginTop: "1px", fontSize: "12px" }}>Last week 0</p>
                    </Row>
                </Info>
                <Info>
                    <img src="/images/star.svg" alt="" style={{ height: "15px", width: "15px" }} />
                    <Row>
                        <p style={{ fontSize: "14px" }}>Reputation 0</p>
                        <p style={{ marginTop: "1px", fontSize: "12px" }}>Last week 0</p>
                    </Row>
                </Info>
            </Item>
            <Item>
                <span>
                    <h3>Languages</h3>
                </span>
                <Column>
                    <button>C++</button>
                    <p>138 problems solved</p>
                </Column>
            </Item>
            <Item>
                <span>
                    <h3>Skills</h3>
                </span>
                <ul>
                    <li><p style={{ color: "black", fontWeight: "bold" }}>Intermediate</p></li>
                </ul>
                <Full>
                    <Double>
                        <button>Hash Table</button>
                        <p style={{ color: "grey", fontWeight: "bold", fontSize: "11px" }}>X 19</p>
                    </Double>
                    <Double>
                        <button>Binary Search</button>
                        <p style={{ color: "grey", fontWeight: "bold", fontSize: "11px" }}>X 18</p>
                    </Double>
                    <Double>
                        <button>Hash Table</button>
                        <p style={{ color: "grey", fontWeight: "bold", fontSize: "11px" }}>X 18</p>
                    </Double>
                </Full>
                <p style={{ color: "grey", fontWeight: "bold", alignItems: "center", display: "flex", justifyContent: "center" }}>Show More</p>
            </Item>
            <Item>
                <ul>
                    <li style={{ color: "green" }}><p style={{ color: "black", fontWeight: "bold" }}>Fundamental</p></li>
                </ul>
                <Full>
                    <Double>
                        <button>Array</button>
                        <p style={{ color: "grey", fontWeight: "bold", fontSize: "11px" }}>X 79</p>
                    </Double>
                    <Double>
                        <button>String</button>
                        <p style={{ color: "grey", fontWeight: "bold", fontSize: "11px" }}>X 27</p>
                    </Double>
                    <Double>
                        <button>Two Pointers</button>
                        <p style={{ color: "grey", fontWeight: "bold", fontSize: "11px" }}>X 22</p>
                    </Double>
                </Full>
                <p style={{ color: "grey", fontWeight: "bold", alignItems: "center", display: "flex", justifyContent: "center" }}>Show More</p>
            </Item>
        </ArtCard>
    </Container>;
};

const Container = styled.div`
  grid-area: leftside;
  margin-top:20px;
`;

const ArtCard = styled.div`
  /* text-align: center; */
  overflow: hidden;
  box-shadow: 1px 1px 10px #888888;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  /* box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); */
`;

const UserInfo = styled.div`
  /* border-bottom: 1px solid rgb(0,0,0,0.15); */
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
    display: flex;
    a{
    display: flex;
    height: 60px;
    margin-right: 10px;
    background: rgb(160,195,255);
    border-radius: 5px; 
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    h4{
        margin: 0;
    }
    p{
        margin: -8px 0;
        color : grey;
        font-size: 12px;
    }
    h5{
        color : grey;
        margin-bottom: 0;
        margin-top: 12px;
    }
`;

const AddPhotoText = styled.div`
    background-color: rgb(242,243,244);
    color: #0a66c2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    margin-top: 4px;
    font-size: 12px;
    height: 25px;
    /* line-height: 1.33; */
    font-weight: 400;
    &:hover{
        background-color: #E6E6E8;
        cursor: pointer;
    }
`;

const Widget = styled.div`
  margin-top: -25px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  /* padding-top: 12px; */
  /* padding-bottom: 12px; */
  display: flex;
  & > a {
    text-decoration: none;      
    display: flex;
    flex-direction: column;
    align-items: self-start;
    padding: 4px 12px;

    &:hover {
      /* background-color: rgba(0, 0, 0, 0.08); */
      cursor: pointer;
    }

    div {
      display: flex;
      /* flex-direction: column; */
      align-items: baseline;
      justify-content: center;
      /* text-align: left; */
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: grey;
  }
`;

const Info = styled.div`
    display: flex;
    width: fit-content;
    margin-top: 0px;
    flex-direction: row;
    align-items: baseline;
    /* justify-content: center; */
  img{
    width: 50px;
  }
  p{
    margin-bottom: 0px;
    color:grey;
    margin-left: 6px;
  }
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
`;
const Column = styled.div`
    display: flex;
    justify-content: space-between;
    color: grey;
    button{
        margin-top: 6px;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius:40%;
    }
`;

const Full = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Double = styled.div`
    display: flex;
    align-items: baseline;
    margin-left: 10px;
    button{
        margin-top: 6px;
        font-size: 12px;
        color: black;
        border: 1px solid rgba(0,0,0,0.15);
        border-radius:40%;
        padding: 5px;
    }
    p{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Item = styled.a`
  border-top: 1px solid rgba(0,0,0,0.15);
  border-color: rgba(0, 0, 0, 0.2);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  ul{
    padding: 0px;
    margin: 12px;
  }
  li {
    color: yellow;
  }
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    h3{
        margin: 0;
    }
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default Leftside;