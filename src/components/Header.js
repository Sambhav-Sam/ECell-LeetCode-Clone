import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Header.css"
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Content>
          <Nav>
            <div className="wrap">
              <div className="logo">
                <Link>
                  <Log className="ham" id="hamIcon" open={open} onClick={() => setOpen(!open)}>
                    <img src="/images/hamburger.svg" alt="" style={{ height: "40px", width: "40px" }} />
                  </Log>
                </Link>
              </div>
              <div className="logo">
                <Link to='/'>
                  <Logo>
                    <img src="/images/leetcode.svg" alt="" style={{ height: "40px", width: "40px" }} />
                  </Logo>
                </Link>
              </div>
            </div>
            <NavListWrap className="hide">
              <NavList className="activ">
                <a>
                  <span>Explore</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <span>Problems</span>
                </a>
              </NavList>
              <NavList>
                <Link to='/contest'>
                  <span>Contest</span>
                </Link>
              </NavList>
              <NavList>
                <a>
                  <span>Discuss</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <span>Interview</span>
                  <img src="/images/dropdown.svg" alt="" style={{ height: "20px", width: "20px" }} />
                </a>
              </NavList>
              <NavList>
                <a>
                  <span style={{ color: "orange" }}>Store</span>
                  <img src="/images/dropdown.svg" alt="" style={{ height: "20px", width: "20px" }} />
                </a>
              </NavList>
            </NavListWrap>
          </Nav>
          <Navright className="hideright">
            <button>Premium</button>
            <img src="/images/notification.svg" alt="" style={{ height: "20px" }} />
            <img src="/images/fire.svg" alt="" style={{ height: "20px" }} />
            <p>2</p>
            <a href="https://www.linkedin.com/in/sambhav-sharma-624278226/" target="_blank">
              <img src="/images/avatar.svg" alt="" style={{ height: "20px" }} />
            </a>
          </Navright>

        </Content>
      </Container>





      <div className="middle">
        <NavListWrap1 className="hambur" open={open}>
          <NavList className="activ">
            <a>
              <span>Explore</span>
            </a>
          </NavList>
          <NavList>
            <a>
              <span>Problems</span>
            </a>
          </NavList>
          <NavList>
            <Link to='/contest'>
              <span>Contest</span>
            </Link>
          </NavList>
          <NavList>
            <a>
              <span>Discuss</span>
            </a>
          </NavList>
          <NavList>
            <a>
              <span>Interview</span>
              <img src="/images/dropdown.svg" alt="" style={{ height: "20px", width: "20px" }} />
            </a>
          </NavList>
          <NavList>
            <a>
              <span style={{ color: "orange" }}>Store</span>
              <img src="/images/dropdown.svg" alt="" style={{ height: "20px", width: "20px" }} />
            </a>
          </NavList>
        </NavListWrap1>
      </div>
    </>
  )
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  left: 0;
  padding: 0 24px;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1400px;
  `;

const Logo = styled.span`
  margin-right: -20px;
  `;
const Log = styled.span`
  margin-right: -20px;
  img{
    background-color:${({ open }) => open ? 'grey' : '#fff'};
  }
  `;

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  `;
const NavListWrap1 = styled.ul`
  display: none;
  flex-wrap: nowrap;
  list-style-type: none;
  @media (max-width:768px){
  display:${({ open }) => open ? 'block' : 'none'}
  /* transitoin : all 0.3s ease-in-out; */
  }
  `;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a{
      align-items: center;
      cursor: pointer; ;
      background: transparent;
      display: flex;
      font-size: 16px;
      font-weight: bold;
      justify-content: center;
      line-height:1.5;
      min-height:42px;
      min-width: 72px;
      position: relative;
      text-decoration: none;

      span{
          color: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
      }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

const Navright = styled.li`
  display: flex;
  align-items: center;
  button{
      align-items: center;
      color: orange;
      border: none;
      cursor: pointer;
      background-color: #F2F3F4;
      border-radius: 5px;
      display: flex;
      font-size: 16px;
      font-weight: bold;
      justify-content: center;
      position: relative;
      text-decoration: none;
      &:hover{
        background-color:#E6E6E8;
      }
  }
  a{
    display: flex;
  }
  img{
    margin-left: 20px;
    cursor: pointer;
  }
`;




export default Header;