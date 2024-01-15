import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Socials from './socials'
import ToggleThemeButton from './toggleThemeButton'
import Drawer from './drawer'
import ResumeDialog from './resumeDialog'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const NavLink = ({ to, children, onClick }) => (
  <ListItem>
    <GatsbyLink onClick={onClick} to={to}>
      {children}
    </GatsbyLink>
  </ListItem>
)

const Navbar = () => {
  return (
    <Nav>
      <UpperNavbar>
        <Socials />

        <Settings>
          <SettingsItem>
            <ToggleThemeButton />
          </SettingsItem>
        </Settings>
      </UpperNavbar>

      <MainNavbar>
        <Credentials>
          <StaticImage
            css={avatarImage}
            alt="Adilet Baimyrza's avatar picture."
            src={'../images/avatar.jpg'}
          />
          <GatsbyLink to="/">
            <H4>Adilet Baimyrza</H4>
          </GatsbyLink>
        </Credentials>

        <Navigation>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/blog'}>Blog</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/projects'}>Projects</NavLink>
          <ResumeListItem>
            <ResumeDialog />
          </ResumeListItem>
          <NavLink to={'/bookshelf'}>Bookshelf</NavLink>
        </Navigation>

        <Drawer />
      </MainNavbar>
    </Nav>
  )
}

export default Navbar

const ListItem = styled.li`
  margin: 0.3rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;

  & > * {
    padding: 0.3rem 0.4rem;
  }

  &:hover {
    color: var(--text-on-hover);
    background-color: var(--card-bg-color);
  }
`
const ResumeListItem = styled(ListItem)`
  & > * {
    padding: 0;
  }
`

const Navigation = styled.ul`
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const H4 = styled.h4`
  padding: 0.2rem;
  margin: 0.3rem;

  &:hover {
    color: var(--text-on-hover);
  }
`

const Credentials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const avatarImage = css`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin: 0.3rem;
`

const MainNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`

const UpperNavbar = styled.div`
  display: flex;
  justify-content: space-between;
`

const Settings = styled.ul`
  display: flex;
`

const SettingsItem = styled.li`
  padding: 0.2rem;
  margin: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  max-width: 960px;
  margin: 0 auto;
`
