import React from 'react'
import ReactDOM from 'react-dom/client'

// CSS IMPORT
import './index.css'

const Booklist = () => (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
  </section>
)
const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
)

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg"
    alt="Dog Man: Twenty Thousand Fleas Under the Sea"
  />
)
const Title = () => <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>
const Author = () => <h4>Dav Pilkey</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
