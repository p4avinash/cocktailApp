import React, { useEffect, useRef } from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef("")

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    searchValue.current.focus()
  })

  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktails</label>
          <input
            type='text'
            id='name'
            placeholder='search cocktails'
            ref={searchValue}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
