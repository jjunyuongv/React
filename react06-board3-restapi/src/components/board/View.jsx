import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

function View() {
  const params = useParams();
  const navigate = useNavigate();

  const [boardData, setBoardData] = useState({});
  const requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  const parameter = `apikey=571ec2efb02807dbf7a55e854c462883&tname=nboard_news&idx=${params.idx}`;

  useEffect(() => {
    fetch(`${requestUrl}?${parameter}`)
      .then(result => result.json())
      .then(json => {
        console.log(json);
        setBoardData(json);
      });

    return () => {
      console.log('useEffect 실행 ==> 컴포넌트 언마운트');
    };
  }, []);

  const handleDelete = (e) => {
    e.preventDefault(); // 링크 클릭 시 페이지 이동 방지
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    fetch("http://nakja.co.kr/APIs/php7/boardDeleteJSON.php", {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams({
        apikey: '571ec2efb02807dbf7a55e854c462883',
        tname: 'nboard_news',
        idx: params.idx,
      }),
    })
    .then(result => result.json())
    .then(json => {
      console.log(json);
      if (json.result === 'success') {
        alert('삭제되었습니다');
        navigate("/list");
      } else {
        alert('삭제에 실패했습니다');
      }
    });
  };

  return (
    <>
      <header>
        <h2>게시판 - 읽기</h2>
      </header>
      <nav>
        <Link to="/list">목록</Link>&nbsp;
        <Link to={`/edit/${params.idx}`}>수정</Link>&nbsp;
        <a href="#" onClick={handleDelete}>삭제</a>
      </nav>
      <article>
        <table id="boardTable">
          <colgroup>
            <col width="20%" /><col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>{boardData.name}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>{boardData.subject}</td>
            </tr>
            <tr>
              <td>날짜</td>
              <td>{boardData.regdate}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td dangerouslySetInnerHTML={{ __html: boardData.content }}></td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default View;
