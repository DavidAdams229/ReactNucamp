import { useState } from 'react';



//HOOK EXAMPLE 
const App = () => {
    const [myCounter, setMyCounter] = useState(0);
//'use state' in the dom is = the numbers that are adding up,
//everytime you click, example click once it will give you one,
//click again it will next give you 2 which are the use state.  
    return (
        //this return is telling the dom to add one each time its clicked 
        <div onClick={() => setMyCounter(myCounter + 1)}>//plus one doesnt have to be here 
            Count: {myCounter}
        </div>
    );
};


//this will DOM log count:0 and each time you click on it 
// it'll add 1 so first click count:1, second count:2.