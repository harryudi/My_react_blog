import {useState, useEffect} from 'react';
import BlogLists from './BlogLists';


const Home = () => {
    
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=> {
            fetch('http://localhost:8000/Blogs')
        .then( res => {
            console.log(res)
            if (!res.ok) {
                throw Error ("Could not fetch data");
            }
            return res.json(); 
        })
        .then(data => {
            setError(null);
            setBlogs(data);
            setIsPending(false);
        })
        .catch(err => {
            setIsPending(null);
            setError(err.message);
        })
        }, 1000);
    },[])
    return (
        <div className="home">
            {blogs && <BlogLists blogsP={blogs} titleP="All Blogs!" />}
            {isPending && <div className="loading">Loading...</div> }
            {error && <div>{ error }</div>}
        </div>
     );
}

export default Home;