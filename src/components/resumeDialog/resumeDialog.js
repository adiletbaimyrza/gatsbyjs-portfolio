import React from 'react'
import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import resume from '../../docs/resume.pdf'
import { Dialog } from '@mui/material'
import DialogContent from '@mui/material/DialogContent'

import {
  upperBar,
  button,
  resumeButton,
  image,
} from './resumeDialog.module.css'

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
      <div className={resumeButton} onClick={handleClickOpen}>
        Resume
      </div>

      <Dialog onClose={handleClose} open={open} maxWidth="lg">
        <div className={upperBar}>
          <a href={resume} className={button} target="_blank">
            Download
          </a>
          <button className={button} onClick={handleClose}>
            Close
          </button>
        </div>

        <DialogContent>
          <StaticImage
            className={image}
            alt="Adilet Baimyrza's resume"
            src="../../images/resume.jpg"
          ></StaticImage>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ResumeDialog
