

function CombineTwoObjects(props) {

    let oldLaptop = {
        brand: 'Lenovo',
        model: '1234Q',
        price: '$25'
    }

    let newLaptop = {
        brand: 'Asus Vivobook',
        pin: '910356V',
        password: '$20'
    }

    let myLaptops = {...oldLaptop, ...newLaptop}
    console.log(myLaptops);
}

export default CombineTwoObjects;


// when it comes to spreading or combining the objects which contains key-value pairs.
// using SpreadOperator,
// if the two objects containing the same key value pairs, if we use spread operator to combine BroadcastChannel,
// second object overwrites the frst object of the same key value pairs.

// similarly, if both the objects had different key value pairs, 
// we can automatically combine both the objects using {...} (spread operator)