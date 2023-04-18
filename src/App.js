import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import AddItem from './components/AddItem.jsx';
import SearchItem from './components/SearchItem.jsx';
import apiRequest from './apiRequest.js';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the data from the "data" base
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const addItem = async item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    //console.log(id, newItem);
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const newItem = listItems.filter(item => item.id === id);

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: newItem[0].checked }),
    };

    const requestUrl = `${API_URL}/${id}`;

    const result = await apiRequest(requestUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: 'DELETE' };

    const requestUrl = `${API_URL}/${id}`;

    const result = await apiRequest(requestUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);

    setNewItem('');
  };

  return (
    <>
      <Header title='Shopping List' />
      <main className='container'>
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem search={search} setSearch={setSearch} />
        {isLoading && <div className='loader'></div>}
        {fetchError && !isLoading && (
          <p className='err-msg'>{`${fetchError}`}</p>
        )}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter(item =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </>
  );
}

export default App;
