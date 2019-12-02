import React, { Component } from 'react';
import "./Meme.styles.css"

export default class Meme extends Component {
 constructor(props) {
  super(props)
  this.state = {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
    allMemeImages: []
  }
 }

 componentDidMount(){
   fetch("https://api.imgflip.com/get_memes")
   .then(response => response.json())
   .then(response => {
    const {memes} = response.data;
    this.setState({allMemeImages: memes})
   }
   )
 }
 handleChange = event => {
  const {name, value} = event.target;
  this.setState({
   [name]: value
  })
 }
 
 handleSubmit = event => {
  event.preventDefault();
  const randomNum =  Math.floor(Math.random() * this.state.allMemeImages.length);
  const ranMeem = this.state.allMemeImages[randomNum].url;
  this.setState({randomImage: ranMeem})
 }


 render() {
  return (
   <div>
     <form className="meme-form" onSubmit={this.handleSubmit}>
       <input 
        type="text"
        value={this.state.topText}
        name="topText"
        placeholder="Top Text"
        onChange={this.handleChange}
        /> <br/>
         <input 
        type="text"
        value={this.state.bottomText}
        name="bottomText"
        placeholder="Bottom Text"
        onChange={this.handleChange}
        />
        <br/>
      <button>Gen</button>
     </form>
     <div className="meme">
       <img src={this.state.randomImage} alt=""/>
       <h2 className="top"> {this.state.topText}</h2>
       <h2 className="bottom">{this.state.bottomText}</h2>
     </div>
   </div>
  )
 }
}
