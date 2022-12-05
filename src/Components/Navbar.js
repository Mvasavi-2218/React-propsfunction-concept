import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/contact">Contact</Link><br/>
        </div>
    )
}
export default Navbar