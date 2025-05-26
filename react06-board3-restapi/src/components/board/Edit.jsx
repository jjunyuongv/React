import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit(props) {
  console.log(props);
    //페이지 이동
  const navigate = useNavigate();
  //파라미터 읽어오기
  let  params = useParams();
  console.log("수정idx", params.idx);

  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "apikey=dd62565364be15c7b032ecda1cf21be3&tname=nboard_news&tname=nboard_news&idx="+params.idx;

  //수정을 위한 State
  /* React에서는 <input>에 value속성으로 값을 설정하는 경우 내용 수정이
  불가능하다. 따라서 State를 통해 값을 수정할 수 있도록 해야한다. 
  API를 통해 읽어온 값을 State에 저장하고 onChange 이벤트 리스너를 통해
  설정된 값을 수정한다.  */ 
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  useEffect(function () {
    fetch(requestUrl + "?"+ parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        // setBoardData(json);
        setWriter(json.name);
        setTitle(json.subject);
        setContents(json.content);
      });
      return ()=>{
        console.log('useEffect실행==> 컴포넌트 언마운트');
      }
  }, []);

  return(<>
    <header>
      <h2>게시판-수정</h2>
    </header> 
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
      
      <form onSubmit={
        (event) =>{
          event.preventDefault();

          let i = event.target.idx.value;
          let w = event.target.writer.value;
          let t = event.target.title.value;
          let c = event.target.contents.value;
          console.log(w, t, c);

          fetch('http://nakja.co.kr/APIs/php7/boardWriteJSON.php', {
            method : 'POST',
            headers : {
              'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body : new URLSearchParams({
              apikey: 'dd62565364be15c7b032ecda1cf21be3',
              tname : 'nboard_news',
              id: 'jsonAPI',
              name: w,
              subject: t,
              content: c,
              idx: i,
            }),
          })
          .then((Response) => Response.json())
          .then((json) => console.log(json));

          navigate("/list");
        }
      }>
        <input type='hidden' name='idx' value={params.idx} />
        <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" value={writer} onChange={(event)=>{
                setWriter(event.target.value);
              }}/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" value={title} onChange={(event)=>{
                setTitle(event.target.value);
              }}/></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" rows="3" value={contents}
                onChange={(event)=>{
                  setContents(event.target.value);
                }}></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
  </>);
}

export default Edit;