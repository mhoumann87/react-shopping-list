import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';

function App() {
  const [items, setItems] = useState([
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
  ]);

  const handleCheck = id => {
    console.log(id);
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);

    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  return (
    <>
      <Header title='Shopping List' />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
