import './App.css'

function MyBody() {
  return (
     <ol>
          <li>프론트앤드</li>
          <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>jQuery</li>
          </ul>
          <li>백앤드</li>
          <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
          </ul>
      </ol>
  );
}

function App() {
  return(
    <div className="App">
      <h2>React - 기본</h2>
      <MyBody></MyBody>
    </div>
  );
}

export default App
