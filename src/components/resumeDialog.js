import React from 'react'
import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import resume from '../docs/resume.pdf'
import { Dialog } from '@mui/material'
import DialogContent from '@mui/material/DialogContent'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ResumeDialog = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    console.log('close')
  }

  return (
    <div>
      <ResumeButton onClick={handleClickOpen}>Resume</ResumeButton>

      <Dialog onClose={handleClose} open={open} maxWidth="lg">
        <Bar>
          <a href={resume} css={buttonStyles} target="_blank">
            Download
          </a>
          <button css={buttonStyles} onClick={handleClose}>
            Close
          </button>
        </Bar>

        <DialogContent>
          <StaticImage
            css={imageStyles}
            alt="Adilet Baimyrza's resume"
            src="../images/resume.jpg"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ResumeDialog

const imageStyles = css`
  min-width: 800px;
`

const buttonStyles = css`
  font-size: 1rem;
  padding: 0.3rem 0.4rem;
  border-radius: 0.2rem;
  transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    color: var(--dialog-btn-color);
    background-color: var(--dialog-btn-bg);
  }
`

const ResumeButton = styled.div`
  padding: 0.3rem 0.4rem;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`
const Bar = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 4rem;
`
