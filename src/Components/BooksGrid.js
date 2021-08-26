import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
const BooksGrid = ({ book, setId }) => {
  return (
    <div className="row">
      <p className="explore">Explored Searches</p>
      {book.map((novel) => (
        <div className="col-sm-12 col-lg-4 col-md-6 col-grid" key={novel.id}>
          <Card className="card h-100">
            <Card.Img
              variant="top"
              src={
                novel.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${novel.volumeInfo.imageLinks.thumbnail}`
              }
              alt="images"
              className="card-image w-50 m-auto"
            />
            <Card.Body>
              <Card.Title className="card-title">
                {novel.volumeInfo.title}
              </Card.Title>
              <Card.Text>
                Author : {novel.volumeInfo.authors}
                <br />
                Publisher :{" "}
                {novel.volumeInfo.publisher === undefined
                  ? "Not available"
                  : `${novel.volumeInfo.publisher}`}
                <br />
                Published Date: {novel.volumeInfo.publishedDate}
              </Card.Text>
              <div className="button-group">
                <Link to="/desc">
                  {" "}
                  <Button onClick={() => setId(novel.id)} className="btn">
                    Read More
                  </Button>
                </Link>
                {novel.accessInfo.epub.acsTokenLink === undefined ? (
                  <p className="not-download">Epub Not available</p>
                ) : (
                  <a href={novel.accessInfo.epub.acsTokenLink}>
                    <Button className="btn">Download Epub</Button>
                  </a>
                )}
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default BooksGrid;
