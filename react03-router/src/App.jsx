import './App.css'
import { NavLink } from 'react-router-dom'

const TopNavi = ()=> {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>&nbsp;
      <NavLink to="/intro">인트로</NavLink>&nbsp;
      <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
      <NavLink to="/xyz">잘못된URL</NavLink>&nbsp;
    </nav>
  );
}

const CommonLayout = () => {
  return (

  );
};

function App() {

  return (
    <div className='App'>
      <TopNavi></TopNavi>
    </div>
  )
}

export default App