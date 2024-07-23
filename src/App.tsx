import React from 'react';
import CardContainer from './components/Card/CardContainer';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <CardContainer />
    </div>
  );
};

export default App;
