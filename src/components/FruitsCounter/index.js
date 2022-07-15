import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrementMango = () => {
    this.setState(preState => {
      console.log(`this is awesome ${preState.count1 + 1}`)
      return {count1: preState.count1 + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(preState => {
      console.log(`this is awesome ${preState.count2 + 1}`)
      return {count2: preState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="cunt-1">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">{count1}</span> mangoes
            <span className="count">{count2}</span> bananas
          </h1>
          <div className="cunt-2">
            <section className="sec-1">
              <img
                className="mango-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />

              <button
                className="mango-btn"
                type="button"
                onClick={this.onIncrementMango}
              >
                Eat Mango
              </button>
            </section>

            <section className="sec-2">
              <img
                className="banana-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="banana-btn"
                type="button"
                onClick={this.onIncrementBanana}
              >
                Eat Banana
              </button>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
