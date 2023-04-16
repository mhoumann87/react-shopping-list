import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item flex'>
      <input
        type='checkbox'
        checked={item.checked}
        name='checked'
        id='checked'
        className='checked'
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}>
        {item.item}
      </label>
      <FaTrashAlt
        className='icon'
        role='button'
        tabIndex='0'
        aria-label={`Delete ${item.item}`}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};
export default ListItem;
