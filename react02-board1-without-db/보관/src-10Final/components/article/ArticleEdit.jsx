import React, { useState } from "react";

function ArticleEdit(props) {
  const [title, setTitle] = useState(props.selectRow.title);
  const [writer, setWriter] = useState(props.selectRow.writer);
  const [contents, setContents] = useState(props.selectRow.contents);

  return(
    <article>
      <form onSubmit={(event)=>{
      event.preventDefault();

      let title = event.target.title.value;
      let writer = event.target.writer.value;
      let contents = event.target.contents.value;
      // console.log('ArticleEdit컴포', title, writer, contents);
      props.editAction(title, writer, contents);
    }}>
      <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer"
                    value={writer}
                    onChange={(event)=>{
                        setWriter(event.target.value)
                    }} />
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title"
                    value={title}
                    onChange={(event)=>{
                        setTitle(event.target.value)
                    }} />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" rows="3" 
                    value={contents}
                    onChange={(event)=>{
                        setContents(event.target.value)
                    }}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="수정하기"/>
    </form>
    </article>
  )
}

export default ArticleEdit;