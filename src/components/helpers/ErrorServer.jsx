import servererror from '../../assets/img/servererror.png'
import './errorserver.css'
const ErrorServer = () => {
    return (
        <div className="serverError">
            <div className="serverError-container">
                <div className="">
                    <p className='serverError-info'>There was an error </p>
                    <p className='serverError-info'>with the server</p>
                </div>
                <img className='serverError-img' src={servererror} alt="error-servidor" />   
            </div>
        </div>
      
      );
}
 
export default ErrorServer;