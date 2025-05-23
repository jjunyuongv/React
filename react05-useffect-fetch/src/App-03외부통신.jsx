import { useEffect, useState } from 'react'
import './App.css'

function MyCommunication(props) {
  var [myJSON, setmyJSON] = useState({results:[]});

  useEffect(function () {
    fetch("https://api.randomuser.me?results=10")
      .then((result)=>{
        // console.log(result);
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        setmyJSON(json);
      });
    return ()=>{
      console.log('#Life', 'useEffect실행==>컴포넌트 언마운트');
    }
  }, []);
  let trTag = [];
  for (let i = 0 ; i < myJSON.results.length ; i++) {
    let data = myJSON.results[i];
    console.log(data);
    trTag.push(
      <tr key={data.login.md5}>
        <td><img src={data.picture.thumbnail} alt='{data.login.username}' /></td>
        <td><a href='/' onClick={(e)=>{
          e.preventDefault();
          props.onProfile(data);
        }}>{data.login.username}</a>
        </td>
        <td>{data.name.title} {data.name.first} {data.name.last}</td>
        <td>{data.nat}</td>
        <td>{data.email}</td>
      </tr>
    );
  }
  return (
    <div>
      <table border='1'>
        <thead>
          <tr>
            <th>사진</th>
            <th>로그인</th>
            <th>이름</th>
            <th>국가</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{trTag}</tbody>
      </table>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <h1>React - 외부서버통신</h1>
      <MyCommunication onProfile={(sData)=>{
        console.log(sData);
        let info = '전화번호:${sData.cell} 성별:${sData.gender} username:${sData.login.username} password:${sData.login.password}';
          alert(info);
      }}></MyCommunication>
    </div>
  );
}

export default App
