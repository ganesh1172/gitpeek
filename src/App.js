import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { useDarkMode } from './useDarkMode';
import history from './history';
import Home from './pages/home';
import UserProfile from './pages/UserProfile';
import { light as LightTheme, dark as DarkTheme, GlobalStyle } from './style';


const App = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(state => state.id === 'dark' ? LightTheme : DarkTheme)
      }
    }}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/:id" component={UserProfile} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
