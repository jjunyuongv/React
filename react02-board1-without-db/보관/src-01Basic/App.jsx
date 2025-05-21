import './App.css'

function Header(props) {
  return(
    <header>
      <h2>게시판 - 목록</h2>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <a href="/">글쓰기</a>
    </nav>
  )
}

function Article() {
  return(
    <article>
        <table id="boardTable">
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cen">1</td>
              <td>오늘은 React 공부하는 날</td>
              <td className="cen">홍길동</td>
              <td className="cen">2025-05-20</td>
            </tr>
          </tbody>
        </table>
      </article>
  )
}

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
      <h1>React 기본형</h1>
    </div>
  );
}

export default App