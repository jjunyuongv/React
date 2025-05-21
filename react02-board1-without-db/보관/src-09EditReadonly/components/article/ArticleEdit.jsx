import React from "react";

function ArticleEdit(props) {
  return(
    <article>
    <form onSubmit={(event)=>{
      event.preventDefault();

      let title = event.target.title.value;
      let writer = event.target.writer.value;
      let contents = event.target.contents.value;
      // console.log('ArticleEdit컴포', title, writer, contents);
      props.writeAction(title, writer, contents);
    }}>
      <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" value={props.selectRow.writer} /></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" value={props.selectRow.title} /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" cols='22' rows="3" value={props.selectRow.contents}></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="수정하기"/>
    </form>
    </article>
  )
}

export default ArticleEdit;