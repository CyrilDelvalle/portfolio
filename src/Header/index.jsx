import React from 'react'
import { Container, Nav, Logo, Links, Link, LinkAction, LinksContainer, Home, Resume, ResumeButton } from './style'
import { AiFillHome } from "react-icons/ai"

const links = [{
    name: "A propos",
    href: "/#"
},
{
    name: "Expériences",
    href: "/#"
},
{
    name: "Travaux",
    href: "/#"
},
{
    name: "Contact",
    href: "/#"
},]

const Header = () => {
    return (
        <Container>
            <Nav>
                <Logo><Home href='/' ><AiFillHome size={42} /></Home></Logo>
                <Links>
                    <LinksContainer>
                        {
                            links.map(({name, href}, index) => {
                                return (<Link key={`link-${index}`}><LinkAction href={href}>{name}</LinkAction></Link>)
                            })
                        }
                    </LinksContainer>
                    <Resume><ResumeButton>Mon Parcour</ResumeButton></Resume>
                </Links>
            </Nav>
        </Container>
    )
}

export default Header