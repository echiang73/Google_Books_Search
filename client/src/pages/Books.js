import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    search: "",
    results: [],
    books: [],
    id: "",
    title: "",
    authors: "",
    description: "",
    link: "",
    previewLink: "",
    thumbnail: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  saveBook = id => {
    console.log("Saving book");
    console.log(this.state.title);
    API.saveBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    console.log("Key clicked!");
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form submitted!");
    // if (this.state.search) {
    API.searchBooks(this.state.search)
      .then(res => {
        // console.log(res.data.items);
        this.setState({ results: res.data.items })
        // this.loadBooks()
        console.log(this.state.results);
        // console.log(this.state.results[0].id);
      })
      .catch(err => console.log(err))
    // })
    // }
  };

  // handleSave = id => {
  //   console.log("Saving book");
  //   console.log(this.state.title);
  //   // event.preventDefault();
  //     API.saveBook({
  //       id: this.state.id,
  //       title: this.state.volumeInfo.title,
  //       authors: this.state.volumeInfo.authors,
  //       description: this.state.volumeInfo.description,
  //       link: this.state.volumeInfo.infoLink,
  //       previewLink: this.state.volumeInfo.previewLink,
  //       thumbnail: this.state.volumeInfo.imageLinks.thumbnail
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>

        <Col size="md-12">
          <Jumbotron>
            <h1>(React.js) Google Books Search</h1>
            <div>Search for and Save Books of Interest</div>
          </Jumbotron>
          <Wrapper>
            <form>
              <h2>Book Search</h2>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="A Tale of Two Cities (required)"
              />
              <FormBtn
                disabled={!this.state.search}
                onClick={this.handleFormSubmit}
              >
                Search
                </FormBtn>
            </form>
          </Wrapper>
        </Col>

        <Col size="md-12 sm-12">
          <Wrapper>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(book => {
                  return (
                    <ListItem key={book.id}>
                      <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
                        <strong style={{ fontSize: "24px" }}>
                          {book.volumeInfo.title}
                        </strong>
                      </a>
                      <br />
                      by {(book.volumeInfo.authors).join(", ")}
                      <SaveBtn onClick={() => this.saveBook(book._id)} />
                      <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.previewLink}>
                      <ViewBtn /></a>
                      <hr />
                      <Row>
                        <Col size="xs-1 sm-1">
                          <Thumbnail src={book.volumeInfo.imageLinks.thumbnail} />
                        </Col>
                        <Col size="xs-11 sm-11">
                          {book.volumeInfo.description}
                        </Col>
                      </Row>
                    </ListItem>
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

