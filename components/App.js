import React, { PropTypes } from 'react';
import Menu from './Menu';

const App = ({ children }) => (
  <main>
    <Menu />
    {children}
  </main>
);

export default App;
