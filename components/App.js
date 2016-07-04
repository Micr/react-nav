import React, { PropTypes } from 'react';
import MenuContainer from '../containers/MenuContainer';

const App = ({ children }) => (
  <main>
    <MenuContainer />
    {children}
  </main>
);

export default App;
