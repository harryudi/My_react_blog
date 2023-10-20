import BlogLists from './BlogLists';
import useFetch from './useFetch';


const Home = () => {
    
    const {data:blogs, isPending, error } = useFetch("http://localhost:8000/Blogs");

    
    return (
        <div className="home">
            {blogs && <BlogLists blogsP={blogs} titleP="All Blogs!" />}
            {isPending && <div className="loading">Loading...</div> }
            {error && <div>{ error }</div>}
        </div>
     );
}

export default Home;