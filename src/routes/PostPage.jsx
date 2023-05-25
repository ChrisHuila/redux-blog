import Prueba from "../components/helpers/Prueba";
import SlideEntries from "../components/homepage/Slider";
import Sidebar from "../components/layout/Sidebar";
import Views from "../components/viewers/Views";
import { useParams } from "react-router-dom";

const PostPage = () => {

    const {id} = useParams();

    return (
        <div className="">
            <div className="container-box layout-sidebar pt-4">
                <main style={{border: '1px solid #ccc'}}>
                    <p>Post</p>
                    {/* <Views 
                    id={id}
                    /> */}
                    <Prueba />
                </main>
                <Sidebar />
            </div>
                <SlideEntries titulo="hola"/>
           
        </div>
            
    );
}
 
export default PostPage;