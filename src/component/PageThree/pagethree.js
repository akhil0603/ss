import  "../PageThree/pagethree.css";
import Girl from "../PageThree/girl.PNG"
import Boy from "../PageThree/boy.PNG"

function Pagethree() {

    return(

        <div className="flex">
                 <h1 className="heading">Choose your Hostel</h1>
                <div className="hosteldetails">
                 <div className="girlhostels"><img className="girlimg" src={Girl} />
                 <h3>Girls Hostels</h3></div>

                 <div className="boyhostels"><img className="boyimg" src={Boy} />
                 <h3>Boys Hostels</h3></div>
                 </div>
        </div>


    )
     
}

export default Pagethree ;