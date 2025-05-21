import { useState } from 'react';
import './App.css'

function WriteForm(props) {
  return (
    <form onSubmit={(e) =>{
      console.log("이벤트객체",e)
      e.preventDefault();
      let writer = e.target.writer.value;
      let title = e.target.title.value;
      let contents = e.target.contents.value;
      props.writeAction(title, writer, contents);
    }}>
      <table>
        <tbody>
          <tr>
            <th>작성자</th>
            <td><input type="text" name='writer' /></td>
          </tr>

          <tr>
            <th>제목</th>
            <td><input type="text" name='title' /></td>
          </tr>

          <tr>
            <th>내용</th>
            <td><textarea name="contents" cols='22' rows='3'></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="전송" />
    </form>
  );
}

function App() {
  const [message, setMessage ] = useState('폼값 검증 진행중');
  return (
    <div className='App'>
      <h2>React Form값처리</h2>
      <WriteForm writeAction={(wr, ti, con)=> {
        if(wr!=='' && ti!=='' && con!=='') {
          setMessage('폼값 검증 완료');
        }
      }}></WriteForm>
      <p>{message}</p>
    </div>
  );
}

export default App