import React from 'react';
import CardContainer from './views/posts/CardContainer';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container  mt-[84px] mx-auto p-4">
        <CardContainer />
      </main>
    </>
  );
};

export default App;
