import React from 'react'

class Numbers extends React.Component {
    render () {
        return (
            <div>
                <p>
                    <button onClick={() => this.props.handleNum(7)} className='num-button'>7</button>
                    <button onClick={() => this.props.handleNum(8)} className='num-button'>8</button>
                    <button onClick={() => this.props.handleNum(9)} className='num-button'>9</button>
                </p>
  
                <p>
                    <button onClick={() => this.props.handleNum(4)} className='num-button'>4</button>
                    <button onClick={() => this.props.handleNum(5)} className='num-button'>5</button>
                    <button onClick={() => this.props.handleNum(6)} className='num-button'>6</button>
                </p>
  
                <p>
                    <button onClick={() => this.props.handleNum(1)} className='num-button'>1</button>
                    <button onClick={() => this.props.handleNum(2)} className='num-button'>2</button>
                    <button onClick={() => this.props.handleNum(3)} className='num-button'>3</button>
                </p>
  
                <p>
                    <button onClick={() => this.props.handleNum(0)} className='num-button'>0</button>
                </p>
            </div>
        )
    }
  }

  export default Numbers;