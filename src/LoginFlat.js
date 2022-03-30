import pic from "./loginPage.jpg"
// import { BrowserRouter, Route, Routes,Link } from "react-router-dom";



export default function LoginFlat()
{
return (

    <div style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%", overflow: "hidden"}}>
    <div className="container-fluid" >
        <div className="row  justify-content-center align-content-center" style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div className="col-4  p-3" style={{opacity: "77%", border: "1px solid gray", width: "400px"}}>
                <div className="text-center text-light" style={{textAlign: "center"}}>
                    <h2>Log In - Flat Owner</h2>
                </div>
                <form className="text-light" style={{padding: "2rem"}}>
                    <label style={{fontSize: "23px", fontWeight: "600"}} >Enter Your Key:</label><br></br>
                    <input className="form-control" style={{fontSize: "24px", marginBottom: "2rem"}} type="text" placeholder="Key"/><br></br>
                    <label style={{fontSize: "23px", fontWeight: "600"}}>Enter Your Password:</label><br></br>
                    <input className="form-control" style={{fontSize: "24px", marginBottom: "2rem"}} type="password" placeholder="Password"/><br></br>

                    <div className="text-center">
                    <input className="btn btn-dark" style={{fontSize: "20px"}} type="button" value="Log In"/>
                </div>
                <div style={{margin: "4px 0"}}><span style={{fontSize: "20px", fontWeight: "500"}}>Didn't Validated Account: <a to="/validate">Validate Now</a></span></div>
                <div style={{margin: "4px 0"}}><span style={{fontSize: "20px", fontWeight: "500"}}>Login as Construction Owner: <a to="/logincons">Login now</a></span></div>
                    
                </form>
            </div>
        </div>
    </div>
    </div>
);
}