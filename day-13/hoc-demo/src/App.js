import './App.css';
import ButtonComponent from './ButtonComponent';
import SliderComponent from './SliderButton';
import HighOrderComponent from "./HigherOrderComponent";
function App(props) {
  const UpdatedSlider = HighOrderComponent(SliderComponent) ;
  const UpdatedBUtton = HighOrderComponent(ButtonComponent); 
  return (
    <div>
         <UpdatedSlider/> <p></p>
         <UpdatedBUtton/>
    </div>
  )
}

export default App;
