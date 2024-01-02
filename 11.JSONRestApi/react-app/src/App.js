import {useEffect, useState} from 'react';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import req from './ApiRequest';

function App() {
  
  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([]); // dataState
  const [fetchError, setFetchError] = useState(null); //errorState
  const [isLoading, setIsLoading] = useState(true); //loadingState

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error('Did not receive expected data'); // Error Handle
        setFetchError(null) // setError
        const listItems = await res.json();
        setItems(listItems);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 1000);
    
    }, [])


  const [newItem, setNewItem] = useState('');

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]
    setItems(listItems);

    const postOpt = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await req(API_URL, postOpt);
    if (result) setFetchError(result);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('')
  }

  const [search, setSearch] = useState('');


  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item);
    setItems(listItems);

    const checkFilter = listItems.filter((item) => item.id === id);
    // console.log(checkFilter);
    const updateOpt = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: checkFilter[0].checked})
    }
    const result = await req(`${API_URL}/${id}`, updateOpt);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);

    const deleteOpt = {method: 'DELETE'};
    const result = await req(`${API_URL}/${id}`, deleteOpt);
    if (result) setFetchError(result);
    console.log(fetchError);
  }

  return (
    <div className="App">
      <Header title={"To-do List"} />
      <div className='addItem-section'>
            <AddItem newItem={newItem} setNewItem={setNewItem} handleSumbit={handleAddItem} />
            <SearchItem search={search} setSearch={setSearch}/>
      </div>
      <main>
        {isLoading && (
          <p>Loading Data...</p>
        )}
        {fetchError && (
          <p>{fetchError}</p>
        )}
        {!fetchError && !isLoading && (
          <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
