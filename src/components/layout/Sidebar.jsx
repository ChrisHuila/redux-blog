
const Sidebar = () => {
  const image = "https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=600"
    return (
        <aside style={{border: '1px solid #ccc'}}>
          <div className="sidebar-content">
            <h2 className="sidebar-tittle">Recommended</h2>
            <ul className="sidebar-recommended">
              <li className="recommended-post">
                <div className="">
                  <img src={image} alt="" />
                </div> 
                <div className="">
                  <div className="">
                    <p className="no-margin">Lucasfilm</p>
                    {/* <p className="no-margin">May / 22 / 23</p> */}
                  </div>
                  <p className="no-margin">¿Natalie Portman podría regresar a Star Wars?</p>
                </div>
              </li>
              <li> post1</li>
            </ul>
          </div>
      
        </aside>
      );
}
 
export default Sidebar;