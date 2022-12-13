import React from 'react'
import { Container, Menu, MenuElement, Logo, Link, NavToggler, NavTogglerElement } from './style'
import { AiFillHome, AiFillMessage } from 'react-icons/ai'
import { FaUser, FaThList } from 'react-icons/fa'
import { GiPapers } from 'react-icons/gi'

const Aside = ({ page, setPage }) => {
    return (
        <Container>
            <div>
                {/* <Logo><span>A</span>tlas</Logo> */}
                <NavToggler>
                    <NavTogglerElement></NavTogglerElement>
                </NavToggler>
                <Menu>
                    <MenuElement onClick={() => setPage('home')}><Link isSelected={page === 'home'}><AiFillHome />Accueil</Link></MenuElement>
                    <MenuElement onClick={() => setPage('about')}><Link isSelected={page === 'about'}><FaUser />A propos</Link></MenuElement>
                    <MenuElement onClick={() => setPage('services')}><Link isSelected={page === 'services'}><FaThList />Services</Link></MenuElement>
                    <MenuElement><Link><GiPapers />Portfolio</Link></MenuElement>
                    <MenuElement><Link><AiFillMessage />Contact</Link></MenuElement>
                </Menu>
            </div>
        </Container>
    )
}

export default Aside