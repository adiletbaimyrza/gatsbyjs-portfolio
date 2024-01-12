import React from 'react'
import Layout from '../components/layout'
import { books } from './books'
import kindle from './kindle.jpg?url'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import 'animate.css/animate.min.css'
import { bookshelf, year, info } from './Bookshelf.module.css'

const books2022 = books.filter((book) => book.yearRead === '2022')
const books2023 = books.filter((book) => book.yearRead === '2023')

const BookshelfPage = () => {
  return (
    <Layout>
      <div className={bookshelf}>
        <h1 className={year}>Bookshelf</h1>
        <div className={info}>
          <p>
            This page lists the books I have read since I bought an Amazon
            Reader on August 17, 2022. Some of the books will have links to
            posts containing my retrospective thoughts on them.
          </p>

          <img
            src={kindle}
            alt="Kindle Paperwhite on the sofa"
            style={{
              padding: '1rem',
              borderRadius: '1.5rem',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <h1 className={year}>2023</h1>
        {books2023.map((book, index) => (
          <AnimationOnScroll
            key={index}
            animateOnce={true}
            animateIn={'animate__fadeIn'}
          >
            <div className={book} key={index}>
              <h3>{book.name}</h3>
              <p>{book.author}</p>
            </div>
          </AnimationOnScroll>
        ))}
        <h1 className={year}>2022</h1>
        {books2022.map((book, index) => (
          <AnimationOnScroll
            key={index}
            animateOnce={true}
            animateIn={'animate__fadeIn'}
          >
            <div className={book} key={index}>
              <h3>{book.name}</h3>
              <p>{book.author}</p>
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </Layout>
  )
}

export default BookshelfPage
