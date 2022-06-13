import logo from './logo.svg';
import './App.css';

function Nav(props){
  const lis=[  ]
  for(let i=0; i<props.topics.length; i++){
    let t=props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h1>{props.title}</h1>
    {props.body}
  </article>
}

function Header(props){
  console.log('props',props,props.title);
  return <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangedMode();
    }}>{props.title}</a></h1>
  </header>
}

function App() {
  const topics=[
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title="REACT" onChangedMode={function(){
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="WELCOME" body="Hello, WEB"></Article>
    </div>

  );
}

export default App;
