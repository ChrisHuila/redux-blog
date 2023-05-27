
const RecommenedPost = () => {
    const image = "https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=600"
    return (
        <li className="recommended-post">
            <div className="recommended-box-img">
                <img src={image} alt="img-recomended" />
            </div> 

            <div>
                <div className="sidebar-div-data">
                    <p className="sidebar-main">Lucasfilms</p>
                    <p className="sidebar-date">May / 22 / 23</p>
                </div>

                <p className="sidebar-headline">¿Natalie Portman podría regresar a Star Wars?</p>
            </div>
        </li>
      );
}
 
export default RecommenedPost;