import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  selectCapital = event => {
    const {country} = this.state
    this.setState({country: event.target.value})
    console.log(country)
  }

  render() {
    const {country} = this.state

    return (
      <div className="bg-container">
        <ul className="unordered-container">
          <h1>Countries And Capitals</h1>
          <div className="select-container">
            <select className="select" onChange={this.selectCapital}>
              {countryAndCapitalsList.map(each => (
                <option key={each.country} value={each.country}>
                  {each.capitalDisplayText}
                </option>
              ))}

              {/* <option selected>America</option> */}
            </select>
            <p>is capital of which country</p>
          </div>
          <h1>{country}</h1>
        </ul>
      </div>
    )
  }
}

export default Capitals
