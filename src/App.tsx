import React from 'react';
import PostsContainer from './views/posts/PostsContainer';
import Header from './components/Header/Header';

const App: React.FC = () => {
   return (
      <>
         <Header />
         <main className="container  pt-[84px] px-[24px] flex items-center justify-center bg-gray-100 w-[100%] max-w-[100%]">
            <PostsContainer />
         </main>
      </>
   );
};

export default App;
