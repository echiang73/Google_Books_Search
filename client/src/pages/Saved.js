import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    search: "",
    results: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", authors: "", description: "", link: "", previewLink: "", thumbnail: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.authors) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.authors,
  //       synopsis: this.state.description
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Books on My List</h1>
            </Jumbotron>
            
          </Col>
          
          
          <Col size="md-12 sm-12">
          <Wrapper>
            {this.state.books.length ? (
              <List>
              {this.state.books.map(book => {
                return (
                  // <div style={{ borderTop: "1px solid black", borderLeft: "1px solid black", borderRight: "1px solid black",  }}>
                  <ListItem key={book.id}>
                    <a rel="noreferrer noopener" target="_blank" href={book.link}>
                      <strong style={{ fontSize: "24px" }}>
                        {book.title}
                      </strong>
                    </a>
                    <br />
                    by {book.authors}
                    {/* by {(book.authors).join(", ")} */}
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    <a rel="noreferrer noopener" target="_blank" href={book.previewLink}>
                      <ViewBtn /></a>
                    <hr />
                    <Row>
                      <Col size="xs-1 sm-1">
                        <Thumbnail src={book.thumbnail} />
                      </Col>
                      <Col size="xs-11 sm-11">
                        {book.description}
                      </Col>
                    </Row>
                  </ListItem>
                  // </div>
                );
              }
              )}
            </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          
          </Wrapper>
          </Col>
        
      </Container>
    );
  }
}

export default Books;
