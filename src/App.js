import logo from './logo.svg';
import './App.css';

//상태
import {useState} from 'react';


function Article(props){
  return <article>
    <h1>{props.title}</h1>
    {props.body}
  </article>
}

function Header(props){
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangedMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis=[  ]
  for(let i=0; i<props.topics.length; i++){
    let t=props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangedMode(Number(event.target.id));
    }}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {

  // const _mode=useState('WELCOME');
  // const mode=_mode[0];
  // const setMode = _mode[1];

//코드 간결하게 바꾸기 ,  mode는 원하는 변수 이름으로 가능
const [mode, setMode]= useState('WELCOME');
const [id, setId]= useState(null);

  const topics=[
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode ==='WELCOME') {
    content= <Article title="WELCOME" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){

    let title, body = null;
    for(let i=0; i<topics.length; i++){

      console.log(topics[i].id, id);
      if(topics[i].id===id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangedMode={()=>{
        setMode('WELCOME');

      }}></Header>
      <Nav topics={topics} onChangedMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>

  );

}

export default App;
