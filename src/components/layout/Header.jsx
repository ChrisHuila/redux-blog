import { Link, NavLink } from "react-router-dom"
import "../layout/layout.css"
import  {useFixed} from "../../hooks/useFixed"
import logoblog from "../../assets/img/logo_blog.png"

const Header = () => {

    const { isFixed, positionStyles } = useFixed()

    return ( 
        <div  className="w-100 header-box" style={isFixed ? positionStyles : {}} > 
           
           <div className="logo-box" >
           <Link className="text-dark fw-bold h2 m-0 text-decoration-none" to={'/'}>
            LOGO
           </Link>
           </div>
        
            <div className="d-flex gap-2 navigation-box" >

            <NavLink 
            className={({isActive}) => isActive 
            ? 'navigation-active h4' : 'navigation-text h4'} 
            to={'/trending'}>
            Tendencias
            </NavLink>

            <NavLink 
            className={({isActive}) => isActive 
            ? 'navigation-active h4' : 'navigation-text h4'} 
            to={'/entry'}>
            Noticias
            </NavLink>
           
            </div>

            <div className="networks-box">
                <i className="bi bi-twitch h4 m-0 social-network"></i>
                <i className="bi bi-twitter h4 m-0 social-network"></i>
                <i className="bi bi-youtube h4 m-0 social-network"></i>
            </div>
            <Link to={"/search"} className="btn btn-primary">
                <i className="bi bi-search" ></i>
            </Link>
        
        </div>
     
     )
}
 
export default Header