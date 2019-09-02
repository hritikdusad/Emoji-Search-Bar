import React from 'react';
import './App.css';
import Header from "./components/header";
import Search from "./components/search";
import EmojiResult from "./components/emojiresult";
import filterEmoji from "./components/filterEmoji";

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("",8)
    };
  }

  handleSearchChange = event =>{
    this.setState({
      filteredEmoji:filterEmoji(event.target.value, 20)
    });
  }

    render(){
      return(
        <div>
          <Header />
          <Search textChange = {this.handleSearchChange} />
          <EmojiResult emojiData = {this.state.filteredEmoji} />
        </div>
      );
    }
}

