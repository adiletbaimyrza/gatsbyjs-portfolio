import React from 'react'
import Layout from '../components/layout'
import laptop from './laptop.png?url'
import ipad from './ipad.png?url'
import laptop2 from './laptop2.png?url'

import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import {
  projects,
  project,
  projectsTitle,
  img,
  links,
  text,
  textWrapper,
  projectTitle,
} from './Projects.module.css'
import 'animate.css/animate.min.css'

const ProjectsPage = () => {
  return (
    <Layout>
      <div className={projects}>
        <h1 className={projectsTitle}>Projects</h1>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          {' '}
          <div className={project}>
            <a
              href="https://adiletbaimyrza.github.io/dijkstra-prim-visualization/"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex' }}
            >
              <img
                id={laptop}
                className={img}
                src={laptop}
                alt="Prim's and Dijkstra's algorithm project being displayed on the laptop"
              />
            </a>

            <div className={textWrapper}>
              <div className={text}>
                <h1 className={projectTitle}>
                  Dijkstra&apos;s & Prim&apos;s Algorithms Visualizer
                </h1>
                <p>
                  Dijkstra&apos;s & Prim&apos;s Algorithms Visualizer allows
                  users to learn and observe the intricacies of the
                  aforementioned algorithms. The project was supervised by{' '}
                  <span style={{ color: 'var(--text-on-hover)' }}>
                    Michal Godziszewski
                  </span>
                  , a former research scholar at UCLA and Oxford, and was
                  developed by me and two other engineers.
                </p>
                <p>
                  I was mainly responsible for system architecture and user
                  interface design.
                </p>
                <p>
                  It was built with{' '}
                  <span style={{ color: 'var(--accent-color)' }}>ReactJS</span>{' '}
                  and{' '}
                  <span style={{ color: 'var(--accent-color)' }}>
                    Material UI
                  </span>{' '}
                  and deployed to GitHub Pages.
                </p>
              </div>
              <div className={links}>
                <a
                  href="https://github.com/AdiletBaimyrza/dijkstra-prim-visualization"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://adiletbaimyrza.github.io/dijkstra-prim-visualization/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LanguageIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
          <div className={project}>
            <a
              href="https://earthqake-data-vis.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex' }}
            >
              <img
                id={ipad}
                className={img}
                src={ipad}
                alt="Earthquake Data Visualization project being displayed on the ipad"
              />
            </a>

            <div className={textWrapper}>
              <div className={text}>
                <h1 className={projectTitle}>Earthquake Data Visualization</h1>
                <p>
                  Earthquake Data Visualization Dashbooard with filtering and
                  brushing features was implemented using{' '}
                  <span style={{ color: 'var(--text-on-hover)' }}>ChartJS</span>{' '}
                  and{' '}
                  <span style={{ color: 'var(--text-on-hover)' }}>
                    PlotlyJS
                  </span>{' '}
                  .
                </p>
                <p>
                  Dashboard allows you to observe and analyze more than 8000
                  earthquakes from 1960 till 2023. It has filters to display
                  data for specific range of magnitudes and years. Interactive
                  map allows area selection for more detailed insight.
                </p>
                <p>
                  The data was obtained from{' '}
                  <span style={{ color: 'var(--accent-color)' }}>
                    United States Geological Survey
                  </span>
                  .
                </p>
              </div>
              <div className={links}>
                <a
                  href="https://github.com/AdiletBaimyrza/earthquake_data_vis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://earthqake-data-vis.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LanguageIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className={project}>
            <a
              href="https://front-end-clone.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex' }}
            >
              <img
                className={img}
                src={laptop2}
                alt="Amazon Clone website being displayed on the screen of the laptop"
              />
            </a>

            <div className={textWrapper}>
              <div className={text}>
                <h1 className={projectTitle}>Amazon.com Front-end Clone</h1>
                <p>
                  Someone told me, &apos;If you want to be a great front-end
                  developer, you must know how to build an e-commerce
                  website.&apos; So, I decided to recreate the homepage of the
                  most popular e-commerce & shopping website in the world{' '}
                  <span style={{ color: 'var(--text-on-hover)' }}>
                    {' '}
                    <a
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                      href="https://www.amazon.com/"
                    >
                      Amazon.com
                    </a>
                  </span>
                  .
                </p>
                <p>
                  The web application was intended to implement all styles and
                  most important funcionalities, such as filtering, addition to
                  & deletion from the cart.
                </p>
                <p>
                  It was built using{' '}
                  <span style={{ color: 'var(--accent-color)' }}>ReactJS</span>,{' '}
                  <span style={{ color: 'var(--accent-color)' }}>Redux</span>{' '}
                  for state management and{' '}
                  <span style={{ color: 'var(--accent-color)' }}>
                    Tailwind CSS
                  </span>{' '}
                  for styling.
                </p>
              </div>
              <div className={links}>
                <a
                  href="https://github.com/AdiletBaimyrza/amazon-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://front-end-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LanguageIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </Layout>
  )
}

export default ProjectsPage
