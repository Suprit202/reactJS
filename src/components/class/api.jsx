import axios from "axios";
import React from "react";

export class Api extends React.Component{
  constructor(){
    super();

    this.state = {
      categories:[]
    }
  }

  LoadCategories(){
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then((res) => this.setState({categories:res.data}))
  }

  componentDidMount(){
    this.LoadCategories();
  }

  render(){
    return(
      <div className="container-fluid p-4">
        <ul>
          {
            this.state.categories.map((category =>(
              <li>{category}</li>
            )))
          }
        </ul>
      </div>
    )
  }
}