import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import products from "./db/data"
import Card from './components/Card'
import "./App.css"


function App() {


  const [selectedCategory, setSelectedCatagory] = useState("")

  ///input filter sesion
  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredItems = products.filter((products) =>
    products.title.toLocaleLowerCase().indexOf(query) !== -1)


  //now Radio filter 

  const handleChange = (e) => {
    setSelectedCatagory(e.target.value);
  }

  // button filter

  const handleClick = e => {
    setSelectedCatagory(e.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      )
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);


  return (
    <>
      <div className="toggle-btn"  >
     
      </div>
      <Sidebar i handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>

  )
}

export default App