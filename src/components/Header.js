import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Nav>
          <Logo>
            <img src="/images/leetcode.svg" alt="" style={{ height: "40px", width: "40px" }} />
          </Logo>
          <NavListWrap>
            <NavList className="active">
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
              <a>
                <span>Contest</span>
              </a>
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
        <Navright>
          <button>Premium</button>
          <img src="/images/notification.svg" alt="" style={{ height: "20px" }} />
          <img src="/images/fire.svg" alt="" style={{ height: "20px" }} />
          <p>2</p>
          <img src="/images/avatar.svg" alt="" style={{ height: "20px" }} />
        </Navright>

      </Content>
    </Container>
  )
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  left: 0;
  padding: 0 24px;
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

const NavList = styled.li`
  display: flex;
  align-items: center;
  a{
      align-items: center;
      cursor: pointer; ;
      background: transparent;
      display: flex;
      font-size: 12px;
      font-weight: bold;
      justify-content: center;
      line-height:1.5;
      min-height:42px;
      min-width: 80px;
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
        color: rgba(0, 0, 0, 0.9);
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
      font-size: 12px;
      font-weight: bold;
      justify-content: center;
      position: relative;
      text-decoration: none;
      &:hover{
        background-color:#E6E6E8;
      }
  }
  img{
    margin-left: 20px;
  }
`;




export default Header;