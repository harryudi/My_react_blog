import {useState} from 'react';


const Home = () => {
    
    // let name = "mario";
    const [name, setName] = useState('Mario');
    const [age, setAge] =useState('30');
    const handleClick = () => {
        setName ('Luiji');
        setAge (27)
        console.log(name + ' and age is '+ age );
    }
    return (
        <div className="home">
            <h2>Home Page looks cool !</h2>
            <p>My name is {name} and I am {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
     );
}
 
export default Home;