import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <p>Error in Component</p>
    }
    return this.props.children
  }
}

class Component extends React.Component {
  render() {
    const throwError = ()=> { throw new Error() }

    return <button style={{color:"blue"}} onClick={throwError} title="Throw Error!"></button>
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div style={{paddingTop: 90}}>
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      </div>
    )
  }
}
