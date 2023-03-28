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

class Capitals extends Component {
  state = {name: 'India', valueOf: 'NEW_DELHI'}

  onButton = event => {
    const newArr = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    const {country, id} = newArr[0]
    this.setState({name: country, valueOf: id})
  }

  render() {
    const {name} = this.state
    const {valueOf} = this.state
    return (
      <div className="cont">
        <div className="card">
          <h1 className="heading">Countries and Capitals</h1>
          <select
            id="selectOf"
            onChange={this.onButton}
            className="input"
            value={valueOf}
          >
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="selectOf" className="label">
            is capital of which country?
          </label>
          <p className="para">{name}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
