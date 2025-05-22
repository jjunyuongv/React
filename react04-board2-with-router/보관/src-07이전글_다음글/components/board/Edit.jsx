import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';

function Edit(props) {
  
  const boardData = props.boardData;
  const setBoardData = props.setBoardData;
  const navigate = props.navigate;
  const nowDate = props.nowDate;

  var params = useParams();
  // console.log("파라미터", params.no);
  let pno = Number(params.no)

  let vi = boardData.reduce((prev, curr)=> {
    if(curr.no === pno) {
      prev = curr;
    }
    return prev;
  }, {});

  const [title, setTitle] = useState(vi.title);
  const [writer, setWriter] = useState(vi.writer);
  const [contents, setcontents] = useState(vi.contents);
  return (<>
    <header>
      <h2>게시판 - 작성</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
    <form onSubmit={(event) => {
        event.preventDefault();

        let w = event.target.writer.value;
        let t = event.target.title.value;
        let c = event.target.contents.value;

        let editBoardData = {no:pno, writer:w, title:t, contents:c, date:nowDate()};

        let editBoardData =[...boardData];
        for (let i = 0; i<copyBoradData.)


    }}></form>

    </article>
  </>);
}

export default Edit;