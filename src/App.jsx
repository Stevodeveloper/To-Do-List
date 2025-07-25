import { useEffect, useState } from 'react';
import { ProgressBar, Button, Form } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]); // each item is { text, checked }

  const handleSearch = (e) => setValue(e.target.value);


  const handleClick = () => {
    if (value.trim() !== '') {
      setItems([...items, { text: value, checked: false }]);
      setValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleClick();
  };

  const toggleCheck = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const deleteItem = (indexToDelete) => {
    const newItems = items.filter((_, index) => index !== indexToDelete);
    setItems(newItems);
  };

  const completedCount = items.filter(item => item.checked).length;
  const progress = items.length > 0 ? (completedCount / items.length) * 100 : 0;

  return (
    <div className="shadow-lg p-4 bg-white rounded">
      <h2>To Do List</h2>
      <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="my-3" />

      <div className="d-flex gap-4">
        <SearchBar onChange={handleSearch} value={value} onKeyDown={handleKeyPress} />
        <Button onClick={handleClick} variant="primary">Add</Button>
      </div>
      {items.length === 0 ? (
        <p>No Tasks Yet!!</p>
      ) : (
        <ul className="list-group mt-3 d-flex">
        {items.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <Form.Check
              type="checkbox"
              id={`item-${index}`}
              label={item.text}
              checked={item.checked}
              onChange={() => toggleCheck(index)}
            />
            <Button variant="danger" size="sm" onClick={() => deleteItem(index)}>Delete</Button>
          </li>
        ))}
      </ul>
      )}
      
    </div>
  );
}

export default App;
