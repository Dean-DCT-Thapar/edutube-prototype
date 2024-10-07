'use client'
import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import PropTypes from 'prop-types'

const SearchBar = (props) => {

  const items = [
    {
      id: 0,
      name: 'Information and Communication Theory',
      teacher: 'Hemdutt Joshi',
      result: 'Information and Communication Theory : by Hemdat Joshi'
    },
    {
      id: 1,
      name: 'Numerical Linear Algebra',
      teacher: 'Harish Garg',
      result: 'Numerical Linear Algebra : by Harish Garg'
    },
    {
      id: 2,
      name: 'Optimisation Techniques',
      teacher: 'Harish Garg',
      result: 'Optimisation Techniques : by Harish Garg'
    },
    {
      id: 3,
      name: 'Data Structures and Algorithms',
      teacher: 'Kapil Tomar',
      result: 'Data Structures and Algorithms : by Kapil Tomar'
    },
    {
      id: 4,
      name: 'Operating Systems',
      teacher: 'Shashank Singh',
      result: 'Operating Systems : by Shashank Singh'
    },
    {
      id: 5,
      name: 'Numerical Linear Algebra',
      teacher: 'Meenu Rani',
      result: 'Numerical Linear Algebra : by Meenu Rani'
    },
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleClick= ()=>{
    window.open('https://edutube-lecture-window.vercel.app/introduction', '_blank');
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>by: {item.teacher}</span>
      </>
    )
  }


  return (
    <>
      <div className={`search-bar-container ${props.rootClassName} `}>
        <div style={{ width: 600 }}>
            <ReactSearchAutocomplete
              placeholder='Search for Courses or Teachers'
              items={items}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
              fuseOptions={{ keys: ["name", "teacher"] }}
              resultStringKeyName="result"
              />
        </div>
        <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' , cursor: 'pointer'}} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>
      <style jsx>
        {`
          .search-bar-container {
            width: 582px;
            height: 53px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .search-bar-textinput {
            width: 579px;
            height: 53px;
            border-radius: var(--dl-radius-radius-inputradius);
          }
          .search-barroot-class-name {
            left: 136px;
            bottom: 1px;
            position: absolute;
          }
          .search-barroot-class-name1 {
            top: 40px;
            left: 410px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

SearchBar.defaultProps = {
  rootClassName: '',
}

SearchBar.propTypes = {
  rootClassName: PropTypes.string,
}

export default SearchBar;

