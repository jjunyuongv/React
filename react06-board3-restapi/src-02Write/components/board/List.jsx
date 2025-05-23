import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List(props) {
  console.log(props);
  let [boardData, setBoardData] = useState([]);

  useEffect(function () {
    fetch("http://nakja.co.kr/APIs/php7/boardListJSON.php?apikey=dd62565364be15c7b032ecda1cf21be3&tname=nboard_news")
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        setBoardData(json);
      });
    return () => {
      console.log('useEffect실행==> 컴포넌트 언마운트');
    }
  }, []);

  let lists = [];
  for (let row of boardData) {
    console.log(row);
    let date = row.regdate.substring(0,10);
    let subject = row.subject.substring(0,20);
    lists.push(
      <tr key={row.idx}>
        <td className="cen">{row.idx}</td>
        <td><Link to={"/view/"+row.idx}>{subject}</Link></td>
        <td className="cen">{row.name}</td>
        <td className="cen">{date}</td>
      </tr>
    );
  }

  return(<>
    <header>
      <h2>게시판 - 목록</h2>
    </header>
    <nav>
      <Link to="/write">글쓰기</Link>
    </nav>
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
          {/* map함수는 반복을 위한 배열과 동일한 크기의 새로운 배열을 
          생성하므로 여기서 목록을 출력할 수 있다.  */}
          {lists}
        </tbody>
      </table>
    </article>
  </>);
}

export default List;