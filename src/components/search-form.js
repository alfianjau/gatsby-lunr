/* src/components/search-form.js */
import React, { useState } from "react"
import { navigate } from "@reach/router"
const SearchForm = ({ initialQuery = "" }) => {
  // Create a piece of state, and initialize it to initialQuery
  // query will hold the current value of the state,
  // and setQuery will let us change it
  const [query, setQuery] = useState(initialQuery)

  // On input change use the current value of the input field (e.target.value)
  // to update the state's query value
  const handleChange = e => {
    setQuery(e.target.value)
  }

  // When the form is submitted navigate to /search
  // with a query q paramenter equal to the state's query value
  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/search?q=${query}`)
  }
  return (
    <form role="search" onSubmit={handleSubmit}>
      <label htmlFor="search-input" style={{ display: "block" }}>
        Search for:
      </label>
      <input
        id="search-input"
        type="search"
        value={query}
        placeholder="e.g. duck"
        onChange={handleChange}
      />
      <button type="submit">Go</button>
    </form>
  )
}
export default SearchForm
