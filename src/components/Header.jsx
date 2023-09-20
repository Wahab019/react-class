import { Link } from "react-router-dom"

// import Link from 
const Header = () => {

    return (
      
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                <Link to={'/about'}>
                        About
                    </Link>
                </li>
                <li>
                <Link to={'/contact'}>
                        Conatct
                    </Link>
                </li>
            </ul>
        </nav>
     
    )

}


export default Header