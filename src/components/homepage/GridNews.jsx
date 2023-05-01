import "../homepage/homepage.css"

const Cuadro = () => {
    return(
        <div className="col-12 col-sm-6 h-50 py-3">
                    <div className="box-little-image" >
                    <img className="w-100 image-square"
                    src="https://www.easa.europa.eu/sites/default/files/inline-images/Drones-strategy-2.0-FEATURED-image-LIGHT_0.png" 
                    alt="" />
                    </div>
                    <div className="w-100 p-1 d-flex flex-column align-items-center">
                        <div className="d-flex align-items-center justify-content-between w-100" >
                            <h5 className="text-danger fw-bold" >Titulo</h5>
                            <small className="fw-bold text-muted" >26/04/2023</small>
                        </div>
                        <div className="content-square" >
                            <strong className="h5 m-0 content-square-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
                        </div>
                    </div>
                    
                </div>
    )
}

const GridNews = () => {
    
    return ( 
        <div className="mx-2 my-2 p-2 text-dark d-flex row w-100 align-items-center justify-content-center" 
        style={{minHeight: '80vh'}} >

            <h2 className="px-5 m-0 my-1 fw-bold">Novedades</h2>

            <div className="col-12 p-4 col-lg-6 d-flex align-items-center justify-content-center" 
            style={{minHeight: '400px'}}
            >
                <div className="w-100 box-big-imagen" >
                    <img  className="image-big"
                    src="https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/01/drone-990x660.jpg" 
                    alt="" /> 
                <div className="content-big-imagen d-flex align-items-start flex-column gap-2 p-2" >
                    
                    <div className="d-flex align-items-center justify-content-between w-100 py-2" >
                        <h5 className="text-danger fw-bold" >Titulo</h5>
                        <small className="fw-bold text-muted px-2">26/04/2023</small>
                    </div>
                    <div className="content-square" >
                        <strong className="h2 m-0 content-square-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum.</strong>
                    </div>
                
                </div>

                </div>

            </div>

            <div className="col-12 col-lg-6 row d-flex
            align-items-center justify-content-center"  
            style={{minHeight: '400px'}} > 

                    <Cuadro/>  
                    <Cuadro/>  
                    <Cuadro/>  
                    <Cuadro/>  

            </div>

        </div>
     )
}
 
export default GridNews