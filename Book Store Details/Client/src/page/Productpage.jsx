import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Productpage() {
  const [data, setData] = useState([]);

  function fetchData() {
    axios
      .get('http://localhost:8080/api/book/getallbook')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

function handleDelete(_id){
  axios.delete(`http://localhost:8080/api/book/deletebook/${_id}`)
  .then((res)=>{
    alert("Data Delete");
  })
  .catch((err) => {
    console.log(err)
  })
}

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold">Product Page</h2>
      <p className="text-center text-muted">Browse our collection of books.</p>

      <Row className="w-100 g-4">
        {data.map((book, index) => (
          <Col key={index} sm={6} md={4} lg={4}>
            <Card
              className="text-white shadow-lg border-0"
              style={{
                backgroundColor: '#6f42c1',
                borderRadius: '10px',
                height: "300px"
              }}
            >
              <Card.Body>
                <Card.Title className="fw-bold">{book.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-warning">
                  Author: {book.Author}
                </Card.Subtitle>
                <Card.Text className="mb-2">
                  <strong>Price:</strong> ₹{book.Price}
                </Card.Text>
                <Card.Text className="mb-2">
                  <strong>ISBN:</strong> {book.ISBN}
                </Card.Text>
                <Card.Text className="mb-3">{book.Description}</Card.Text>
                <div className="d-flex">
                  <button className="btn btn-light"><Link to={`/Descriptionpage/${book._id}`}  className=" text-dark text-decoration-none">View Details</Link></button>
                  <button className="btn btn-light ms-3 "><Link to={"/Updatepage"} state={{_id:book._id,Title:book.Title,Author:book.Author,Price:book.Price,Description:book.Description}} className=" text-dark text-decoration-none">Update Details</Link></button>
                  <button className="btn btn-light ms-3" onClick={()=>{handleDelete(book._id)}}>Delete</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Productpage;
