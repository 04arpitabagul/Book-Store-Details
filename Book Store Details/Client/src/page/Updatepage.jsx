import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../style.css'
import axios from 'axios';

function Updatepage() {
  let Location = useLocation();
  let Navigate = useNavigate();

  let { _id, Title, Author, Price, Description } = Location.state;
  let [UpdateTitle, setUpdateTitle] = useState(Title);
  let [UpdateAuthor, setUpdateAuthor] = useState(Author);
  let [UpdatePrice, setUpdatePrice] = useState(Price);
  let [UpdateDescription, setUpdateDescription] = useState(Description);


  function handleUpdate(e) {
    e.preventDefault();
    axios.patch(`http://localhost:8080/api/book/updatebook/${_id}`, {
      Title: UpdateTitle,
      Author: UpdateAuthor,
      Price: UpdatePrice,
      Description: UpdateDescription
    }).then((res) => {
      alert("Updated Successfully");
      Navigate('/Productpage');
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <div>
      <div className="Form-Container">
        <h3>Update Book</h3><br></br>
        <form onSubmit={handleUpdate}>
          <label htmlFor="Title">Title <span>*</span></label>
          <input
            type="text"
            name="Title"
            placeholder="Enter Title..."
            value={UpdateTitle}
            onChange={(e) => { setUpdateTitle(e.target.value) }}
            required
          />

          <label htmlFor="Author">Author <span>*</span></label>
          <input
            type="text"
            name="Author"
            placeholder="Enter Author Name..."
            value={UpdateAuthor}
            onChange={(e) => { setUpdateAuthor(e.target.value) }}
            required
          />

          <label htmlFor="Price">Price <span>*</span></label>
          <input
            type="number"
            name="Price"
            placeholder="Enter Price..."
            value={UpdatePrice}
            onChange={(e) => { setUpdatePrice(e.target.value) }}
            required
          />
          <label htmlFor="Description">Description <span>*</span></label>
          <input type="text" name="Description" placeholder="Description..." value={UpdateDescription} onChange={(e) => { setUpdateDescription(e.target.value) }}
            required />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Updatepage
