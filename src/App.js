import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import AddItem from './components/AddItem.jsx';
import SearchItem from './components/SearchItem.jsx';

function App() {
  const [items, setItems] = useState(
    /* [
    {
      id: 1,
      checked: false,
      item: 'milk',
    },
    {
      id: 2,
      checked: true,
      item: 'cheese',
    },
    {
      id: 3,
      checked: false,
      item: 'bread',
    },
  ] */
    JSON.parse(localStorage.getItem('shoppinglist'))
  );

  const setAndSaveItems = newItems => {
    //console.log(newItems);
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    //console.log(items);
  };

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('render');
    console.log('load time');
  }, []);

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    //console.log(id, newItem);
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    //console.log(myNewItem);
    const listItems = [...items, myNewItem];
    //console.log(listItems);
    setAndSaveItems(listItems);
  };

  const handleCheck = id => {
    //console.log(id);
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(listItems);
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);

    setAndSaveItems(listItems);
  };

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(newItem);
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
        <Content
          items={items.filter(item =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer length={items.length} />
    </>
  );
}

export default App;
