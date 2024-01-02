import {useState} from 'react';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')));

const saveChange = (listItems) => {
  setItems(listItems);
  localStorage.setItem('todoList', JSON.stringify(listItems));

}

const [newItem, setNewItem] = useState('');

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked: false, item}
  const listItems = [...items, myNewItem]
  saveChange(listItems)
}

const handleAddItem = (e) => {
  e.preventDefault();
  addItem(newItem);
  setNewItem('')
}

const [search, setSearch] = useState('');

const handleSearch = (e) => {
  e.preventDefault();
  setSearch('');
}

const handleClick = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item);
  saveChange(listItems)
};

const handleDelete = (id) => {
  const listItems = items.filter((item)=> item.id !== id);
  saveChange(listItems)
}

  return (
    <div className="App">
      <Header title={"To-do List"} />
      <div className='addItem-section'>
            <AddItem newItem={newItem} setNewItem={setNewItem} handleSumbit={handleAddItem} />
            <SearchItem search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      </div>
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))} handleClick={handleClick} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
