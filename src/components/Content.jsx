import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className='container'>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className='empty-message'>Your List Is Empty</p>
      )}
    </main>
  );
};
export default Content;
