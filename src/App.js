import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import AddItem from './components/AddItem.jsx';
import SearchItem from './components/SearchItem.jsx';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist')) || []
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
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  // Using useeffect to get our items from storage
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items]);

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
    setItems(listItems);
  };

  const handleCheck = id => {
    //console.log(id);
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);

    setItems(listItems);
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
