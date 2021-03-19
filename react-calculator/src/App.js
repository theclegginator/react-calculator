import React from 'react';
import Operators from './components/Operators'
import Numbers from './components/Numbers'

class App extends React.Component {
  constructor(props) {
      super(props);
      // bind the methods 
      this.handleOperator = this.handleOperator.bind(this);
      this.handleNum = this.handleNum.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.calculate = this.calculate.bind(this);
      
      // set initial state
      this.state = {
          display: 0,
          num1: undefined,
          num2: undefined,
          operator: ""
      }
  }
  handleOperator(operator) {
      switch (operator) {
          case "add":
              // this.add();
              this.checkNum1();
              this.setState(() => {
                  return {operator: "+"}
              })
              break;
          case "subtract":
              this.checkNum1();
              this.setState(() => {
                  return {operator: "-"}
              })
              break;
          case "multiply":
              this.checkNum1();
              this.setState(() => {
                  return {operator: "x"}
              })
              break;
          case "divide":
              this.checkNum1();
              this.setState(() => {
                  return {operator: "/"}
              })
              break;
          default:
              break;
      }
  }
  calculate() {
      let num1 = this.state.num1;
      let num2 = this.state.num2;
      let operator = this.state.operator;
      if (num1 && num2 && operator) {
          switch (operator) {
              case "+":
                  this.add();
                  break;
              case "-":
                  this.subtract();
                  break;
              case "x":
                  this.multiply();
                  break;
              case "/":
                  this.divide();
                  break;
              default:
                  break;
          }
      this.setState(() => {
          return {
              num1: undefined,
              num2: undefined,
              operator: ""
          }
      })
      } else {
          alert('define 2 numbers and an operator')
      }
  }
  checkNum1() {
      // if a num1 was not selected, we are performing the operation on the current calculator value
      if (!this.state.num1) {
          this.setState((prevState) => {
              return {
                  num1: prevState.display
              };
          });
      }
  }
  handleNum(num) {
      // if no operator is defined yet, concat the inputs to a new num
      if (!this.state.operator) {
          this.setState((prevState) => {
            if (typeof(this.state.num1) !== 'undefined') {
              return {
                  num1: parseInt(prevState.num1.toString() + num.toString())
              }
            } else {
              return {
                num1: num
              } 
            }
          })
      } else {
        this.setState((prevState) => {
          if (typeof(this.state.num2) !== 'undefined') {
            return {
                num2: parseInt(prevState.num2.toString() + num.toString())
            }
          } else {
            return {
              num2: num
            } 
          }
        })
      }
  }
  handleClear() {
      this.setState(() => {
          return {
              display: 0,
              num1: undefined,
              num2: undefined,
              operator: undefined
          }
      })
  }
  add() {
      this.setState((prevState) => {
          return {
              display: prevState.num1 + prevState.num2,
          };
      });
  }
  subtract() {
      this.setState((prevState) => {
          return {
              display: prevState.num1 - prevState.num2,
          };
      });
  }
  multiply() {
      this.setState((prevState) => {
          return {
              display: prevState.num1 * prevState.num2,
          };
      });
  }
  divide() {
      this.setState((prevState) => {
          return {
              display: prevState.num1 / prevState.num2,
          };
      });
  }
  render() {
      return (
          <div className="container">
              <h3 className="screen">
                {/* if num1 is defined, don't show display value; this indicates a calculation is in progress and new display val needed*/}
                {!this.state.num1 && <span>{this.state.display}</span>}
                {this.state.num1} {this.state.operator} {this.state.num2} 
              </h3>
              <Numbers handleNum={this.handleNum} />
              <Operators 
                  handleOperator={this.handleOperator} 
                  handleClear={this.handleClear}
                  calculate={this.calculate}
                  enabled={typeof(this.state.num1) !== 'undefined'}
              />

          </div>
      )
  }
}

export default App;