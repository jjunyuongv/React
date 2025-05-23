import { Link, useNavigate } from "react-router-dom";

function Write(props) {
  console.log(props);
  //페이지 이동을 위한 훅
  const navigate = useNavigate();
  return(<>
    <header>
      <h2>게시판-작성</h2>
    </header> 
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
      
      <form onSubmit={
        (event) =>{
          event.preventDefault();

          ///target속성을 통해 입력한 폼값을 얻어옴
          let w = event.target.writer.value;
          let t = event.target.title.value;
          let c = event.target.contents.value;
          console.log(w, t, c);
          
          /** 
          글작성을 위해 Post전송방식을 사용한다. 
          fetch함수의 첫번째 인자는 '요청URL', 두번째 인자는 전송방식 및 헤더
          ,폼값을 추가한다. 
          */
          fetch('http://nakja.co.kr/APIs/php7/boardWriteJSON.php', {
            //전송방식
            method : 'POST',
            //enctype(전송시 인코딩 방식)과 케릭셋 지정 
            headers : {
              'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
            },
            /** 
            작성자가 입력한 폼값을 JSON형식으로 조립하여 전송한다. 
            URLSearchParams 객체는 JSON형식의 데이터를 쿼리스트링 형식으로 
            변경해주는 역할을 한다. 
            */
            body : new URLSearchParams({
              apikey: 'dd62565364be15c7b032ecda1cf21be3',
              tname : 'nboard_news',
              id: 'jsonAPI',
              name: w,
              subject: t,
              content: c,
            }),
          })
          .then((Response) => Response.json())
          .then((json) => console.log(json));

          //글쓰기가 완료되면 목록으로 이동한다.
          navigate("/list");
        }
      }>
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
        <input type="submit" value="전송" />
      </form>
    </article>
  </>);
}

export default Write;