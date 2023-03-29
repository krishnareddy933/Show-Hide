// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isClick: false, isItClick: false}

  onChange = () => {
    this.setState(number => ({isClick: true}))
  }

  onUnChange = () => {
    this.setState(number => ({isItClick: true}))
  }

  render() {
    const {isClick, isItClick} = this.state
    let Change
    let Mchange

    if (isClick === true) {
      this.state.isClick = false
      Change = (
        <div className="cont_1">
          <p className="para_1">Joe</p>
        </div>
      )
    }
    if (isItClick === true) {
      this.state.isItClick = false
      Mchange = (
        <div className="cont_1">
          <p className="para_1">Jonas</p>
        </div>
      )
    }
    return (
      <div className="bg_cont">
        <h1 className="head">Show/Hide</h1>
        <div className="cont-2">
          <div className="btn_cont">
            <button className="Button" onClick={this.onChange}>
              Show/Hide Firstname
            </button>
            {Change}
          </div>
          <div className="btn_cont">
            <button className="Button" onClick={this.onUnChange}>
              Show/Hide Lastname
            </button>
            {Mchange}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
