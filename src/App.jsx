// import logo from './logo.svg';
import './App.css';
import Header from './Features/Header/header'
import Home from './Features/Home/home'
import Subreddits from './Features/SubReddits/subReddits'


function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
      </main>
      <aside>
        <Subreddits/>
      </aside>
    </>
  );
}

export default App;
