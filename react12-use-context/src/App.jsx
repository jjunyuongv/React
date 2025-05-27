import { useState } from 'react'
import './App.css'
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { SimpleContext } from './context/SimpleContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // <SimpleContext.Provider Value={'Welcome 헝딜동'}>
  <ThemeContext.Provider value={{isDark, setIsDark}}>
    <div className="App">
        <Page></Page>
    </div>
  </ThemeContext.Provider>
    // </SimpleContext.Provider>
  );
}

export default App
