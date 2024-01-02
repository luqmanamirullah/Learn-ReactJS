import {useState} from 'react';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: 'Done the react video tutorials'
    },
    {
        id: 2,
        checked: false,
        item: 'Done the conary ui design'
    },
    {
        id: 3,
        checked: false,
        item: 'Done the NextJS video tutorials'
    },
]);

const handleClick = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item);
    setItems(listItems);
    localStorage.setItem('todoList', JSON.stringify(listItems));
};

const handleDelete = (id) => {
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);
    localStorage.setItem('todoList', JSON.stringify(listItems));
}
  return (
    <div className="App">
      <Header title={"To-do List"} />
      <Content items={items} handleClick={handleClick} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
