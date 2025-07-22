import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Descriptionpage() {
  const params = useParams();
  const [BookDescription, setBookDescription] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/book/description/${params._id}`)
      .then((res) => {
        setBookDescription(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params._id]);

  console.log(BookDescription);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // full viewport height
        backgroundColor: '#f0f2f5', // thoda soft bg
        padding: '20px',
      }}
    >
      <Card
        className="text-white shadow-lg border-0"
        style={{
          backgroundColor: '#6f42c1',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '500px',
          padding: '20px',
        }}
      >
        <Card.Body>
          <Card.Title className="fw-bold">{BookDescription.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-warning">
            Author: {BookDescription.Author}
          </Card.Subtitle>
          <Card.Text className="mb-2">
            <strong>Price:</strong> ₹{BookDescription.Price}
          </Card.Text>
          <Card.Text className="mb-2">
            <strong>ISBN:</strong> {BookDescription.ISBN}
          </Card.Text>
          <Card.Text className="mb-3">{BookDescription.Description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Descriptionpage;
