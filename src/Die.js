import React, { Component } from "react";
// const img1 = <i class = "fas fa-dice-one"></i>
// const img2 = <i class = "fas fa-dice-two"></i>
// const img3 = <i class = "fas fa-dice-three"></i>
// const img4 = <i class = "fas fa-dice-four"></i>
// const img5 = <i class = "fas fa-dice-five"></i>
// const img6 = <i class = "fas fa-dice-six"></i>

const two = 2
const three = 3
const four = 4
const five = 5
const six = 6

class Die extends Component {
  constructor(props) {
    super(props)
    this.state = {num:1}
    this.getNum = this.getNum.bind(this)
  }
  
  one = 1
  
  face = `<i class = fas fa-dice-${this.state.num}></i>`
  
  getNum (){
    let rand = Math.floor(Math.random() * 6) +1
    this.setState({num: rand})
  }
  render () {
    console.log(this.state.num)
    return (
      <div>
    <h1>Number is: {this.state.num} </h1>
    <span>{face}</span>
    <button onClick={this.getNum}>New Num</button>
    </div>
    )
  }
}

export default Die