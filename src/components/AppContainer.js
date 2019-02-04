import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import Details from './Details.js'
import Player from './Player.js'
import Progress from './Progress.js'
import Axios from 'axios'

export default class AppContainer extends Component {

    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.randomTrack();
    }

    randomTrack(){
        Axios.get()
        .then(function(response){

        }).catch(function(err){
            console.log(err)
        })

    }



  render() {
    return (
      <div>
        <SearchBar/>
        <Details title = {'Track Title'}/>
        <Player/>
        <Progress position = {'0.3'}
        elapsed = {'00:00'}
        total = {'0:40'}/>
      </div>
    )
  }
}
