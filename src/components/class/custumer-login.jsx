import React from "react";

export class CustomerLogin extends React.Component{
  constructor(){
    super();
    this.state = {
      title:"Class Component",
      category:['All',"Mobile","Watches"]
    }
  }

  componentDidMount(){
    this.setState({title:"Select Category"})
  }

  render(){
    return(
      <div className="container-fluid p-4">
        <h2>{this.state.title}</h2>
        <select>
          {
            this.state.category.map(iteam => (
              <option value={iteam}>{iteam}</option>
            ))
          }
        </select>
      </div>
    )
  }
}