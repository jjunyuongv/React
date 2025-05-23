import React from "react";
import {useState} from 'react';

function ComEdit(props){
  const [writer, setWriter] = useState(props.writer);
  const [comment, setComment] = useState(props.comment);
  
  return (<>
    <form onSubmit={(event)=>{
      event.preventDefault();
      //폼값 가져오기
      if (event.target.writer.value === '') {
        alert('작성자를 입력하세요.');
        event.target.writer.focus();
        return;
      }
      if (event.target.writer.value === '') {
        alert('댓글 내용을 입력하세요.');
        event.target.comment.focus();
        return;
      }


      let writer = event.target.writer.value;
      let comment = event.target.comment.value;
      props.onEditComment(props.no, writer, comment);
      event.target.writer.value = '';
      event.target.comment.value = '';
      //수정 처리 하기
      props.setShowEdit(false);
      props.setEditNo(null);
    }}>
      <table id="boardTable">
        <tbody>
          <tr>
            <td id="writer">Writer : 
              <input type="text" name="writer" onChange={(event)=>{
              setWriter(event.target.value);
              }} value={writer} />
             <button onClick={(event)=> {
                event.preventDefault();
                props.setShowEdit(false);
                props.setEditNo(null);
             }}>수정취소</button>
            </td>
            <td rowSpan="2"><input type="submit" value="댓글수정" id="btn"/></td>
          </tr>
          <tr>
            <td><textarea name="comment" onChange={(event)=>{
              setComment(event.target.value);
            }} value={comment}></textarea></td>
          </tr>
        </tbody>
      </table>        
    </form>
  </>);
}

export default ComEdit;  
