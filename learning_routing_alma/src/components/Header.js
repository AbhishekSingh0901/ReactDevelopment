import { Component } from "react"

class Header extends Component {
  render() {
    return (
      <div class="p-5 mb-0 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold text-center">Demo Application</h1>
          <p class="fs-4 text-center">Demo Application created in React</p>
        </div>
      </div>
    )
  }
}

export default Header
