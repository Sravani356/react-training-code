import './App.css';

import OrderForm from './orderform';
import SpreadOperator from './spreadoperator';
import CombineTwoObjects from './combiningtwoobjectsusingspread';

function App() { //constructor function
  return (
   
   <div className="App">
      <OrderForm name="Sravani"></OrderForm>
      <SpreadOperator/>
      <CombineTwoObjects/>

    </div>
  );
}

export default App;
