import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
const BookDescription = ({ id, user }) => {
  const [item, setItem] = useState([]);
  // const onDownload = () => {};
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        const books = res.data;
        console.log(books, "hii");
        setItem(books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="description">
      {item.volumeInfo ? (
        <Card className="card">
          <div className="upper-section">
            <Card.Img
              variant="top"
              src={
                item.volumeInfo.imageLinks.thumbnail === undefined
                  ? ""
                  : `${item.volumeInfo.imageLinks.thumbnail}`
              }
              className="card-image w-100 m-auto pt-50"
            />
            <Card.Title className="card-title">
              {item.volumeInfo.title}
            </Card.Title>
            <Card.Text className="card-text">
              by {item.volumeInfo.authors}
            </Card.Text>

            {item.volumeInfo.averageRating && (
              <Rating
                name="read-only"
                value={item.volumeInfo.averageRating}
                readOnly
              />
            )}
          </div>
          <Card.Body>
            <Card.Text className="about">
              <span className="desc-heading">Description:</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.volumeInfo.description
                }}
              />
            </Card.Text>
            <Link to="/">
              <Button>Go Back</Button>
            </Link>
           
          </Card.Body>
        </Card>
      ) : (
        "Loading!!!"
      )}
      
    </div>
  );
};
export default BookDescription;
