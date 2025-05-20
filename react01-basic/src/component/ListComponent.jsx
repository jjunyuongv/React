import React from "react";

function ListComponent(props) {
    return (
    <>
      <header>
        <h2>게시판-목록</h2>
      </header>
      <nav>
        <a href="/" onClick={(event) =>{
          event.preventDefault();
          props.changeMode('write');
        }}>글쓰기</a>
      </nav>
      <article>
        <table id="boardTable">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Write</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <a href="/" onClick={(event) => {
                  event.preventDefault();
                  props.changeMode('view');
                }}>오늘은 React공부하는날</a>
              </td>
              <td>낙짜쌤</td>
              <td>2030-05-05</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>  
    );
}

export default ListComponent;