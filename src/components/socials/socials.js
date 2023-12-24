import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHashnode } from '@fortawesome/free-brands-svg-icons'

import {
  socials,
  socialsItem,
  socialsItemWrapper,
  hashnode,
} from './socials.module.css'

const LINKEDIN_URL = 'https://linkedin.com/in/adiletbaimyrza'
const GITHUB_URL = 'https://github.com/adiletbaimyrza'
const MAILTO_URL = 'mailto:adilet.developer@gmail.com'
const HASHNODE_URL = 'https://adiletbaimyrza.hashnode.dev'

const SocialLink = ({ to, children, id }) => (
  <li className={socialsItemWrapper}>
    <GatsbyLink
      className={socialsItem}
      id={id}
      to={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </GatsbyLink>
  </li>
)

const Socials = () => {
  return (
    <ul className={socials}>
      <SocialLink to={LINKEDIN_URL}>
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
      <SocialLink to={GITHUB_URL}>
        <FontAwesomeIcon icon={faSquareGithub} />
      </SocialLink>
      <SocialLink to={MAILTO_URL}>
        <FontAwesomeIcon icon={faSquareEnvelope} />
      </SocialLink>
      <SocialLink id={hashnode} to={HASHNODE_URL}>
        <FontAwesomeIcon icon={faHashnode} />
      </SocialLink>
    </ul>
  )
}

export default Socials
