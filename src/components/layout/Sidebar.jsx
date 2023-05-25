import RecommenedPost from "../recommendedpost/RecommenedPost";
import "./sidebar.css";

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
          </div>
      
        </aside>
      );
}
 
export default Sidebar;