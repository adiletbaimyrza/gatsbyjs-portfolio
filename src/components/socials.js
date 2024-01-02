import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHashnode } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const LINKEDIN_URL = 'https://linkedin.com/in/adiletbaimyrza'
const GITHUB_URL = 'https://github.com/adiletbaimyrza'
const MAILTO_URL = 'mailto:adilet.developer@gmail.com'
const HASHNODE_URL = 'https://adiletbaimyrza.hashnode.dev'

const SocialLink = ({ to, children }) => (
  <ListItem>
    <Link href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  </ListItem>
)

const Socials = () => {
  return (
    <UnorderedList>
      <SocialLink to={LINKEDIN_URL}>
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
      <SocialLink to={GITHUB_URL}>
        <FontAwesomeIcon icon={faSquareGithub} />
      </SocialLink>
      <SocialLink to={MAILTO_URL}>
        <FontAwesomeIcon icon={faSquareEnvelope} />
      </SocialLink>
      <HashnodeLink to={HASHNODE_URL}>
        <FontAwesomeIcon icon={faHashnode} />
      </HashnodeLink>
    </UnorderedList>
  )
}

export default Socials

const Link = styled.a`
  margin: 0.2rem;
  font-size: 1.3rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  & > * {
    color: inherit;
  }

  &:hover {
    color: var(--text-on-hover);
    background-color: var(--card-bg-color);
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const HashnodeLink = styled(SocialLink)`
  font-size: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`
const UnorderedList = styled.ul`
  display: flex;
`
