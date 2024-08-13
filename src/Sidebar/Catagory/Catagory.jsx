import React from 'react'
import "./catgory.css"
import Input from '../../components/Input'

const Catagory = ({handleChange}) => {
  return (
    <div>
      <h2>Catagory</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name="test" />
          <span className='checkmark' ></span> All
        </label>

        <Input 
        handleChange={handleChange}
        title="Flats"
        value="flats"
        name="test"
        />
        <Input 
        handleChange={handleChange}
        title="Sneakers"
        value="sneakers"
        name="test"
        />
        <Input 
        handleChange={handleChange}
        title="Heels"
        value="heels"
        name="test"
        />
        <Input 
        handleChange={handleChange}
        title="Sandals"
        value="sandals"
        name="test"
        />
        
      </div>
    </div>
  )
}

export default Catagory
