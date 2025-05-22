import React from "react";

function ComWrite(props){
  return (<>
    <form onSubmit={(event)=>{
      event.preventDefault();
      let writer = event.target.writer.value;
      let comment = event.target.comment.value;
      event.target.writer.value = '';
      event.target.comment.value = '';
      props.writerAction(writer, comment);
    }}>
      <table id="boardTable">
        <tr>
          <td id="writer">Writer : <input type="text" name="writer"/></td>
          <td rowSpan="2"><input type="submit" value="댓글작성" id="btn"/></td>
        </tr>
        <tr>
          <td><textarea name="comment"></textarea></td>
        </tr>
      </table>        
    </form>
  </>);
}

export default ComWrite;  
