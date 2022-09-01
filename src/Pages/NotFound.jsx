import { useNavigate } from "react-router-dom";
import NoLayout from "../Layout/NoLayout";
import imageNotFound from '../assets/images/1.1.gif'
function NotFound(){
const navigate=useNavigate()
    return (
        <NoLayout>
            <div className="container-flued text-center p-3 ">
            <h5>Page Not Found</h5>
            <img src={imageNotFound} className="w-75 rounded mt-3" alt="Page_Not_Found" />
            <br/>
            <button onClick={() => navigate(-1)} className="btn btn-secondary my-3">Go Back</button>
            </div>
        </NoLayout>
    );
}

export default NotFound;
