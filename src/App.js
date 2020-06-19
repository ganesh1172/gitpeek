import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { useDarkMode } from './useDarkMode';
import history from './history';
import Home from './pages/home';
import { light as LightTheme, dark as DarkTheme, GlobalStyle } from './style';


const App = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(state => state.id === 'light' ? DarkTheme : LightTheme)
      }
    }}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
