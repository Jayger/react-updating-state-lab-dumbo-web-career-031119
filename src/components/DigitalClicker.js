// Code DigitalClicker Component Here
import React from 'react'


class DigitalClicker extends React.Component {


    state = {
        timesClicked: 0
    }

    incTime = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }


    render(){
        return(
            <button onClick={this.incTime}>
                {this.state.timesClicked}
            </button>
        )
        
    }
}
export default DigitalClicker