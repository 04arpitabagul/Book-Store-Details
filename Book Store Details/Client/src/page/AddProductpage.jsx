import React, { useState } from 'react';
import '../style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProductpage() {
  const Navigate=useNavigate();
  // State to store book data
  const [BookDataAdd, setBookDataAdd] = useState({
    Title: "",
    Author: "",
    Price: "",
    Description: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setBookDataAdd({ ...BookDataAdd, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/book/createbook", BookDataAdd)
      .then((res) => {
        console.log("Book Added Successfully:", res.data);
        alert("Book added successfully!");
        setBookDataAdd({ Title: "", Author: "", Price: "", Description: "" });
        Navigate("/Productpage")
      })
      .catch((err) => {
        console.error("Error adding book:", err);
        alert("Failed to add book!");
      });
  };

  return (
    <div>
      <div className="Form-Container">
        <h3>Add New Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Title">Title <span>*</span></label>
          <input
            type="text"
            name="Title"
            placeholder="Enter Title..."
            value={BookDataAdd.Title}
            onChange={handleChange}
            required
          />

          <label htmlFor="Author">Author <span>*</span></label>
          <input
            type="text"
            name="Author"
            placeholder="Enter Author Name..."
            value={BookDataAdd.Author}
            onChange={handleChange}
            required
          />

          <label htmlFor="Price">Price <span>*</span></label>
          <input
            type="number"
            name="Price"
            placeholder="Enter Price..."
            value={BookDataAdd.Price}
            onChange={handleChange}
            required
          />
          <label htmlFor="Description">Description <span>*</span></label>
          <input type="text" name="Description" placeholder="Description..." value={BookDataAdd.Description}
            onChange={handleChange} required />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddProductpage;
