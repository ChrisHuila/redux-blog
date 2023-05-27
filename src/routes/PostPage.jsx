import Prueba from "../components/helpers/Prueba";
import SlideEntries from "../components/homepage/Slider";
import Sidebar from "../components/layout/Sidebar";
import Views from "../components/viewers/Views";
import { useParams } from "react-router-dom";

const PostPage = () => {

    const {id} = useParams();

    return (
        <>
            <div className="container-box layout-sidebar">
                <main style={{border: '1px solid #ccc'}}>
                    {/* <Views id={id}/> */}
                    <Prueba />
                </main>
                <Sidebar />
            </div>
            
            <SlideEntries titulo="esto es una prueba"/>
        </>

    );
}
 
export default PostPage;