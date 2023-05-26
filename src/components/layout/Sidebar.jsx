import RecommenedPost from "../recommendedpost/RecommenedPost";
import "./sidebar.css";
import imgAdvertising from "../../assets/img/advertising.jpg"

const Sidebar = () => {

    return (
        <aside >
          <div className="sidebar-content">
            <h2 className="sidebar-tittle">Recommended</h2>
            <ul className="sidebar-recommended">
              <RecommenedPost />
              <RecommenedPost />
              <RecommenedPost />
            </ul>
            
            <div className="recommended-box-advertising">
                <img src={imgAdvertising} alt="img-advertising" />
            </div>
          </div>
      
        </aside>
      );
}
 
export default Sidebar;