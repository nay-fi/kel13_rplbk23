import { useState } from 'react'
import './App.css'
import ReactJSX from './components/ReactJSX'
import CompAndProps from './components/CompAndProps'
import Profile from './components/Card'
import Button from './elements/Button'
import TextInput from './elements/TextInput'

function App() {
  const [food, setFood] = useState('');
  const [submittedFood, setSubmittedFood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Makanan Kesukaan Kamu adalah ', food);
    setSubmittedFood(food);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <Profile />
        <form action="" onSubmit={handleSubmit}>
          <TextInput border="#61dafb" placeholder="Makanan Favorit" value={food} onChange={handleFoodChange} />
          <Button background="black" type='submit'>Kirim</Button>
        </form>
        {submittedFood && (
          <div>
            <h4>Makanan kesukaan kamu adalah {submittedFood}</h4>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;