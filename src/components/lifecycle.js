import React, {Component} from 'react'

class LifeCycle extends Component {


    componentDidCatch() {
        console.log("componentDidCatch called");
    }

    componentDidMount() {
        console.log("componentDidMount called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }

    render() {
        <>
            <div>
                <h1 style="{ background:'yellow' }">
                        This is for checking Lifecycle Methods
                    </h1>
            </div>
        
        </>
    }
}