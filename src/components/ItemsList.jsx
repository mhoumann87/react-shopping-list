import ListItem from './ListItem';

const ItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className='item-list'>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ItemsList;
