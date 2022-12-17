import React from "react";
import {
  Container,
  Nav,
  Logo,
  Links,
  LinkLi,
  LinkAction,
  LinksContainer,
  Home,
  Resume,
  ResumeButton,
} from "./style";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo>
          <Home href="/">
            <AiFillHome size={42} />
          </Home>
        </Logo>
        <Links>
          <LinksContainer>
            <LinkLi>
              <LinkAction>
                <Link
                  activeClass="active"
                  to="welcome"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </LinkAction>
            </LinkLi>
            <LinkLi>
              <LinkAction>
                <Link activeClass="active" to="about" spy={true} smooth={true}>
                  A propos
                </Link>
              </LinkAction>
            </LinkLi>
            <LinkLi>
              <LinkAction>
                <Link
                  activeClass="active"
                  to="history"
                  spy={true}
                  smooth={true}
                >
                  Historique
                </Link>
              </LinkAction>
            </LinkLi>
            <LinkLi>
              <LinkAction>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </LinkAction>
            </LinkLi>
          </LinksContainer>
          <Resume>
            <ResumeButton>Mon Parcours</ResumeButton>
          </Resume>
        </Links>
      </Nav>
    </Container>
  );
};

export default Header;
