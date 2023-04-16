import { FaPlus } from 'react-icons/fa';

const AddItem = () => {
  return (
    <form className='addForm'>
      <label htmlFor='add-item' className='sr-only'>
        Add Item
      </label>
      <input
        id='add-item'
        name='add-item'
        class='add-item'
        autoFocus
        type='text'
        placeholder='Add Item'
      />
      <button type='submit' aria-label='add item'>
        <FaPlus />
      </button>
    </form>
  );
};
export default AddItem;
