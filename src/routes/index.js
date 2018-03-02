import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import App from '@containers/App'
import LandingPage from '@routes/LandingPage'
import NotFoundPage from '@routes/NotFoundPage'

export default class Routes extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  render() {
    const {
      history,
    } = this.props
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}
