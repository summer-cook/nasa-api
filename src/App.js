import React, { Component } from 'react'
// import marsRover from './nasaData.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasa: null,
      pic: null
    }
  }

  //resets state after the first time
  //you can wrap your fetch request inside this to 
  componentDidMount(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then(resp => {
      return resp.json()
    })
    .then(payload => {
      console.log(payload)
      this.setState({ nasa: payload.photos, pic: payload.photos[0].img_src })
    })
    .catch(errors => {
      console.log(errors)
    })


  //gets a random picture from the data set and sets the state of pic to that a pic at a random index
  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({ pic: this.state.nasa[randomNum].img_src })
  }

  render() {
    console.log(this.state.nasa)
    return (
      <>
      <center>
      <h1>Mars Photos</h1>
      <button onClick = { this.getPic }>Click Me!</button>
      <br></br>
      <br></br>
     
      { this.state.pic && 
       <div>
      <img src= { this.state.pic } style= {{ height: '200px' }}
      alt='random Mars Curiosity image' />
      </div>
        }
      </center>
      </>
    )
  }
}

export default App