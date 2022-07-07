

function SpreadOperator () {
    const oldChocolates = ['alpenlibe', 'lacto','sweet'];
    const newChocolates = ['lotte', 'candy','sweet'];
    const chocolates = [...oldChocolates, ...newChocolates]
    console.log(chocolates);
}

export default SpreadOperator;