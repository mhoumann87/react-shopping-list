import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='add-item' className='sr-only'>
        Add Item
      </label>
      <input
        id='add-item'
        name='add-item'
        className='add-item'
        autoFocus
        ref={inputRef}
        type='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='add item'
        onClick={() => inputRef.current.focus()}>
        <FaPlus className='add-icon' />
      </button>
    </form>
  );
};
export default AddItem;
