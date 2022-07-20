import {render, screen, fireEvent} from '@testing-library/react'
import Child1 from './child1';
import Parent1 from './parent1'

test ("test1", () => {
    render(<Parent1/>)
    const Parent = screen.getByTestId('test1');
    // console.log(Parent);
    const childbtn = screen.getByTestId('child-btn')

    const msg = screen.getByTestId('message');
    fireEvent.click(childbtn);
    expect(msg).toHaveTextContent("No");
})


test ("test1", () => {
    render(<Child1/>)
    const Child = screen.getByTestId('test2');
    // const childBtn = screen.getByTestId('child-btn')
    // fireEvent.click(childBtn);

})