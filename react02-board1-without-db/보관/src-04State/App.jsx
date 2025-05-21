import { useState } from 'react';
import './App.css'

function ReadyComp() {
  return(
    <div>
      <h3>컴포넌트 준비중입니다^^*</h3>
      <a href='/'>Home바로가기</a>
    </div>
  );
}

function Header(props) {
  console.log('props', props.title);
  return(
    <header>
      <h2>{props.title}</h2>
    </header>
  );
}

function NavList(props) {
  return(
    <nav>
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}>글쓰기</a>
    </nav>
  )
}

function NavView(props) {
  return (
    <nav>
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode('list');
      }}>목록</a>&nbsp;
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode('edit');
      }}>수정</a>{" "}
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode('delete');
      }}>삭제</a>
    </nav>
  )
}

function NavWrite(props) {
  return(
    <nav>
      <a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}>목록</a>
    </nav>
  )
}

function ArticleList(props) {
  const lists = [];
  for (let i = 0; i < props.boardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        <td><a href={'/read/'+ row.no} onClick={(event)=> {
          event.preventDefault();
          props.onChangeMode(row.no);
        }}>{row.title}</a></td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }

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
            {lists}
          </tbody>
        </table>
      </article>
  )
}

function ArticleView(props) {
  return(
    <article>
      <table id="boardTable">
          <colgroup>
            <col width="20%" /><col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>성유겸</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>오늘은 React 공부하는 날</td>
            </tr>
            <tr>
              <td>날짜</td>
              <td>2025-05-20</td>
            </tr>
            <tr>
              <td>내용</td>
              <td>열심히 해봅시당<br/>열공 합시다.</td>
            </tr>
          </tbody>
        </table>
    </article>
  );
}

function ArticleWrite(props) {
  return(
    <article>
    <form >
      <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" /></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" rows="3"></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송"/>
    </form>
    </article>
  )
}

function App() {
  const boardData = [
    {no:1, title:'오늘은 React공부하는날', writer:'홍길동', date:'2025-01-01', contents:'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript공부해씸', writer:'유겸이', date:'2025-05-20', contents:'Javascript는 할게 많아요.'},
    {no:3, title:'내일은 Project해야징', writer:'개똥이', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?.'},
    {no:4, title:'추가 내일은 Project해야징', writer:'손오공', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?.'},
  ];

  const [mode, setMode] = useState('list');

  let articleComp, navComp, titleVar ;
  if(mode==='list') {
    titleVar = '게시판-목록(props)';
    navComp = <NavList onChangeMode={()=>{
      setMode('write');
    }}></NavList>
    articleComp = <ArticleList boardData={boardData}
      onChangeMode={(no)=>{
        console.log('선택한 게시물 번호:'+ no);
        setMode('view');
      }}></ArticleList>
  }
  else if (mode==='view') {
    titleVar = '게시판-읽기(props)';
    navComp = <NavView onChangeMode={(pmode)=>{
      setMode(pmode);
    }}></NavView>
    articleComp = <ArticleView></ArticleView>
  }
  else if (mode==='write') {
    titleVar = '게시판-쓰기(props)';
    navComp = <NavView onChangeMode={()=>{
      setMode('list');
    }}></NavView>
    articleComp = <ArticleView></ArticleView>
  }
  else {
    navComp = <ReadyComp></ReadyComp>;
    articleComp = '';
  }

  return (
    <div className='App'>
      <Header title={titleVar}></Header>
      {navComp}
      {articleComp}
    </div>
  );
}

export default App