import styled from "styled-components";
import "./Main.css";

const Footer = () => {

    return (
        <Container>
            <footer>
                <div class="footer">
                    <div class="footer-data">
                        <div class="f1">
                            <p>Copyright © 2022 Leetcode</p>
                        </div>
                        <div class="f2">
                            <a href="#">Help Center</a>
                            <a href="#">Jobs</a>
                            <a href="#">Bug Bounty</a>
                            <a href="#">Assesment</a>
                            <a href="#">Students</a>
                            <a href="#">Terms</a>
                            <a href="#">Policy</a>
                        </div>
                        <div class="f3">
                            <div class="f31">
                                <img class="usa" src="images/usa.svg" />
                            </div>
                            <div class="f32">
                                <p>United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    )
};

const Container = styled.div`
  /* display: flex; */
  `;

export default Footer;