import React from 'react';

class Operators extends React.Component {
    render () {
        return (
            <div>
                <button disabled={!this.props.enabled} onClick={() => this.props.handleOperator("add")} className="operator-button">+</button>
                <button disabled={!this.props.enabled} onClick={() => this.props.handleOperator("subtract")} className="operator-button">-</button>
                <button disabled={!this.props.enabled} onClick={() => this.props.handleOperator("multiply")} className="operator-button">×</button>
                <button disabled={!this.props.enabled} onClick={() => this.props.handleOperator("divide")} className="operator-button">÷</button>
                <p>
                    <button onClick={this.props.handleClear} className="clear-button">CLEAR</button>
                    <button onClick={this.props.calculate} className="enter-button">=</button>
                </p>
            </div>
        )
    }
  }

  export default Operators;