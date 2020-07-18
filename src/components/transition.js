import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 300
const getTransitionStyles = {
  entering: {
    opacity: 0.5,
    transform: `translate3d(0, 25vh, 0)`,
  },
  entered: {
    transition: `transform ${timeout}ms ease, opacity ${timeout}ms ease`,
    opacity: 1,
    // transform: `translate3d(0, 0, 0)`,
  },
  exiting: {
    transition: `transform ${timeout}ms ease, opacity ${timeout}ms ease`,
    opacity: 0.5,
    transform: `translate3d(0, 25vh, 0)`,
  }
}

class PageTransition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: 0,
            exit: 0,
          }}>
          {status => (
            <main
            style={{
              ...getTransitionStyles[status],
            }}>
              {children}
            </main>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default PageTransition
