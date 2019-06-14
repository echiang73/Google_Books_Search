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
    books: [],
    title: "",
    author: "",
    synopsis: "",
    search: "",
    results: []
  };

  componentDidMount() {
    // this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
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

  handleInputChange = event => {
    console.log("Clicked key!");
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Clicked!");
    // if (this.state.search) {
    API.searchBooks(this.state.search)
      .then(res => {
        // console.log(res.data.items);
        this.setState({ results: res.data.items })
        // this.loadBooks()
        console.log(this.state.results);
        console.log(this.state.results[0].id);
      })
      .catch(err => console.log(err))
    // })
    // }
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
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
                    // <div style={{ borderTop: "1px solid black", borderLeft: "1px solid black", borderRight: "1px solid black",  }}>
                    <ListItem key={book.id}>
                      <a rel="noreferrer noopener" target="_blank" href="#">
                        <strong style={{ fontSize: "24px" }}>
                          {book.volumeInfo.title}
                        </strong>
                      </a>
                      <br />
                      by {book.volumeInfo.authors}
                      <SaveBtn onClick={() => this.saveBook(book._id)} />
                      <ViewBtn onClick={() => this.viewBook(book._id)} />
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


//  <a rel="noreferrer noopener" target="_blank" href={href}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     </a>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                     <SaveBtn onClick={() => this.saveBook(book._id)} />
//                   </ListItem>


// <List>
//                 {this.state.books.map(book => {
//                   return (
//                   <ListItem 
//                     key={book._id}
//                     title={book.title}
//                     // href={book.href}
//                     synopsis={book.synopsis}
//                     // thumbnail={book.thumbnail}
//                     />
//                 );}
//                 )}
//               </List>