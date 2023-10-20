import { Link } from "react-router-dom/cjs/react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
            Sorry this page does not exist
            <div></div>
            <Link to='/'>Return to home page</Link>
        </div>
    );
}
 
export default ErrorPage;