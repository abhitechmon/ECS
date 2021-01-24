import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { handlerClicked } from "./actions/sagaActions";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


class App extends Component {
  constructor(props) {
    super(props);
    this.props.startFetchBySaga();
  }

  render() {
    const { books } = this.props;
    console.log(books);
    return (
      <div className="App">
        <Navbar />
        <Table book={books} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.booksReducer.data
});

const mapDispatchToProps = (dispatch) => ({
  startFetchBySaga: () => dispatch(handlerClicked())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));
