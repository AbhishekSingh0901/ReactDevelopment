import { Component } from "react"

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = { harError: false }
  }

  //whenever you add this method to a class based component it becomes an error boundary
  componentDidCatch(error) {
    this.setState({ harError: true })
  }

  render() {
    if (this.state.harError) return <p>ERROR OCCURED</p>
    return this.props.children
  }
}

export default ErrorBoundary
