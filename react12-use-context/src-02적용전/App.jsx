import { useState } from 'react';
import './App.css'

const Page = ({ isDark, setIsDark }) => {
  return (
    <div className="page">
      <Header isDark={isDark}></Header>
      <Content isDark={isDark}></Content>
      <Footer isDark={isDark} setIsDark={setIsDark}></Footer>
    </div>
  );
}

const Header = ({isDark}) => {
  return (
    <header className="header"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
    >
      <h1>Welcome 헝딜동...!!</h1>
    </header>
  );
}

const Content = ({isDark}) => {
  return (
    <div className="content"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
    >
      <h1>형딜동 반가워..ㅋㅋㅋ</h1>
    </div>
  );
}

const Footer = ({ isDark, setIsDark}) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <div className="footer"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray'
      }}
    >
      <input type="button" value="Dark Mode" className="button"
        onClick={toggleTheme} />
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
        <Page isDark={isDark} setIsDark={setIsDark}></Page>
    </div>
  );
}

export default App
