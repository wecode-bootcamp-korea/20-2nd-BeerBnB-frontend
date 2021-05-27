import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import Main from './Pages/Main/Main';
import List from './Pages/List/List';
import GlobalStyle from './Styles/globalStyles';

class Routes extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/list" component={List} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default Routes;
