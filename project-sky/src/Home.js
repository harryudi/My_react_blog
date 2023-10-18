import {useState, useEffect} from 'react';
import BlogLists from './BlogLists';


const Home = () => {
    
    
    const [blogs, setBlogs] = useState(null)               

    const handleDelete = (id) => {
        const newBlogs = blogs.filter (blogs => blogs.id !== id);
        setBlogs(newBlogs);
    }
    const [name,setName] = useState(blogs.author);
    

    useEffect(()=>{
        fetch('http://localhost:8000/Blogs')
        .then( res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data)
        })
    },[])
    return (
        <div className="home">
            {blogs && <BlogLists blogsP={blogs} titleP="All Blogs!" handleDelete={handleDelete}/>}
            <BlogLists blogsP={blogs.filter((blog)=>blog.author==='Maro') } titleP="Maro's Blogs!" />
            <button onClick={()=>{setName('Luigi')}}>CHANGE</button>
            <h4>{name} is my name</h4>
        </div>
     );
}

export default Home;