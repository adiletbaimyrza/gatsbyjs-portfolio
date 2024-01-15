import React from 'react'
import Layout from '../components/layout'
import { books } from './books'
import kindle from '../images/kindle.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from '@emotion/styled'
import 'animate.css/animate.min.css'

const books2022 = books.filter((book) => book.yearRead === '2022')
const books2023 = books.filter((book) => book.yearRead === '2023')

const BookshelfPage = () => {
  return (
    <Layout>
      <>
        <H1>Bookshelf</H1>
        <Info>
          <p>
            This page lists the books I have read since I bought an Amazon
            Reader on August 17, 2022. Some books will have links to my reviews.
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
        </Info>

        <H1>2023</H1>
        {books2023.map((book, index) => (
          <AnimationOnScroll
            key={index}
            animateOnce={true}
            animateIn={'animate__fadeIn'}
          >
            <Book key={index}>
              <h3>{book.name}</h3>
              <p>{book.author}</p>
            </Book>
          </AnimationOnScroll>
        ))}

        <H1>2022</H1>
        {books2022.map((book, index) => (
          <AnimationOnScroll
            key={index}
            animateOnce={true}
            animateIn={'animate__fadeIn'}
          >
            <Book key={index}>
              <h3>{book.name}</h3>
              <p>{book.author}</p>
            </Book>
          </AnimationOnScroll>
        ))}
      </>
    </Layout>
  )
}

export default BookshelfPage

const H1 = styled.h1`
  margin-bottom: 3rem;
`
const Info = styled.div`
  background-color: var(--card-bg-color);
  margin: 1rem 1rem;
  padding: 4rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Book = styled.div`
  background-color: var(--card-bg-color);
  margin: 1rem 1rem;
  padding: 1rem;
  border-radius: 0.6rem;
`
