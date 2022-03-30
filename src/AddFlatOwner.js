import LoginFlat from "./LoginFlat";
import pic from "./flatImage.jpg";
export default function Add_Flat() {
  return (
    <div>
      <div
        class="container-fluid"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundSize: " 100% 100%",
          overflow: "hidden"
        }}
      >
        <div
          class="row  justify-content-center align-content-center"
          style={{ height: "100vh" }}
        >
          <div>
            <div class=" text-center" style={{textAlign: "center"}}>
              <h2>Add New Flat Owner Details:</h2>
            </div>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "45px"}}>
                <div style={{width: "460px", display: "flex", alignItems: "center"}}>
                    <p style={{fontWeight: "600"}}></p>
                </div>

            <form
              className=" col-md-4 col-md-pull-7 p-4 p-4 rounded "
              style={{
                width: "460px",
                opactiy: "80%",
                border: "1px solid grey",
                float: "right",
                // textAlign: "center",
                marginRight: "8rem",
                padding: "0 0 0 4rem"
              }}
            >
              <label style={{fontSize: "24px", fontWeight: "600"}}>Enter Flat Owner Name</label>
              <br></br>
              <input class="form-control" style={{fontSize: "20px", marginTop: "6px", marginBottom: "10px"}} type="text" placeholder="Name" />
              <br></br>
              <label style={{fontSize: "24px", fontWeight: "600"}}>Enter Flat Owner Phone Number</label>
              <br></br>
              <input class="form-control" style={{fontSize: "20px", marginTop: "6px", marginBottom: "10px"}}  type="text" placeholder="Name" />
              <br></br>
              <label style={{fontSize: "24px", fontWeight: "600"}}>Enter Total Amount of Flat</label>
              <br></br>
              <input
                class="form-control"
                type="text"
                placeholder="Total Amount"
                style={{fontSize: "20px", marginTop: "6px", marginBottom: "10px"}} 
              />
              <br></br>

              <label style={{fontSize: "24px", fontWeight: "600"}}>Enter Total Paid Amount</label>
              <br></br>
              <input
                class="form-control"
                type="text"
                placeholder="Paid Amount"
                style={{fontSize: "20px", marginTop: "6px", marginBottom: "10px"}} 
              />
              <br></br>
              <label style={{fontSize: "24px", fontWeight: "600"}}>Enter Next Installment Amount:</label>
              <br></br>
              <input
                class="form-control"
                type="text"
                placeholder="next Installment"
                style={{fontSize: "20px", marginTop: "6px", marginBottom: "10px"}} 
              />
              <br></br>
              <label style={{fontSize: "24px", fontWeight: "600"}}>Select Possesion Date:</label>
              <br></br>
              <input class="form-control" type="date" style={{fontSize: "20px", marginTop: "6px", marginBottom: "10px"}} />
              <br></br>

              <div class="text-center">
                <input class="btn btn-dark" type="button" value="Add" style={{fontSize: "20px", marginTop: "6px", marginBottom: "10px"}} />
              </div>
            </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}