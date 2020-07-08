import React from 'react';
import SettingsContext from './context/site.js';
import ThemeContext from './context/theme.js';
import ToDo from './components/todo/todo.js';
import Header from './components/header.js';

function App() {
  return (
    <>
      <ThemeContext>
        <SettingsContext>
          <Header />
          <ToDo />
        </SettingsContext>
      </ThemeContext>

    </>
  )
}
export default App;