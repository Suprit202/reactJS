import React from "react";
export class Bind extends React.Component{
  constructor(){
    super();
    this.state = {
        title:'Class Component',
        msg:""
    },

    this.handleInsertClick = this.handleInsertClick.bind(this); //you need to bind here other wise the function return null and not work as expected
    // this.handelDeleteClick = this.handelDeleteClick.bind(this);
  }

  componentDidMount(){
    this.setState({title:'Select Category'})
  }

  handleInsertClick(e){                             //Binded
    this.setState({msg:`${e.target.value} Clicked`})
  }

  handelDeleteClick(e){                            //Not Bind
    this.setState({msg:`${e.target.value} Clicked`})
  }

  handelUpdateClick(e){                           //here we pass a defult parameter so it's work
    this.setState({msg:`${e.target.value} Clicked`})
  }

  render(){
    return(
      <div className="container-fluid p-4">
        <h2>{this.state.title}</h2>
        <button onClick={this.handleInsertClick} value='insert'>Insert</button> 
        <button className="mx-2" onClick={this.handelDeleteClick} value='Delete'>Delete</button>
        <button onClick={(e) => this.handelUpdateClick(e)} value='Update'>Update</button>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}
