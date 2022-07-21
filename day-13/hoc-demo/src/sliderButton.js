
export default function SliderComponent(props) {
    //extra logic
    return (
        <div>
            <input type='range' onClick={props.callClick} value={props.counter}></input>
            {props.counter}
        </div>
    );
}