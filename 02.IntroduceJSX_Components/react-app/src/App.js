import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Leight";
  const handleTheTech = () => {
    const theTech = ["ReactJS", "Javascript", "JSX"];
    const int = Math.floor(Math.random() * 3);
    return theTech[int];
  };
  const todo = {task: "Done the tutorials of ReactJS", eat: "i want to eat meat ball", drink: "i want to drink some americano"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleTheTech()}, i am {name}
        </p>
      </header>
      <p>this written using html syntax: 1, [1, 2, 3], name</p> 
    <p>{`and this written using jsx syntax: 1, ${[1, 2, 3]}, ${name}`}</p>
    <p><b>This can be error statment !!</b>. <br /> -JSX cannot render objects directly in html syntax <br /> -JSX cannot render a boolean status directly</p>
    {/* <p>{{a: "anjing", b: "babi"}}</p> */}
    {/* <p>{null > 0}</p>  */}
    {/* <p>{todo}</p> */}
    <p>{todo.task}</p>
    </div>
  );
}

export default App;
