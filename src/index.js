import React from 'react'
import ReactDOM from 'react-dom/client'

// CSS IMPORT
import './index.css'

// // DECLARE VARIABLES
const books = [
  {
    author: 'Dav Pilkey',
    title: 'Dog Man',
    img: 'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

// const Booklist = () => (
//   <section className="booklist">
//     <Book author={author} title={title} img={img} />
//     <Book author={author} title={title} img={img} />
//   </section>
// )
const Booklist = () => (
  <section className="booklist">
    {books.map((book) => {
      const { img, title, author, id } = book
      return <Book img={img} author={author} title={title} key={id} /> // La KEY doit TOUJOURS être indiquée dans la valeur de retour de l'ARRAY.MAP
    })}
  </section>
)

const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
