import "../Pageseven/Pageseven.css"
import cancel from "../Pageseven/cancel.PNG"



function Popup(){

    return(
        <div className="flex4">
            <div className="img"><img src={cancel} /></div>
            <div className="flex5">
                <h2>Success</h2>
                <div className="line2">
                    <h3>Your room is has been booked</h3>
                    <h3>successfully.</h3>
                </div>
                <h4 className="line3">Your room details are as follows:</h4>
                <div className="line4">
                    <h5>Hostel No.<span>B4</span></h5>
                    <h5>Room No.<span>8</span></h5>
                    </div>
            </div>
        </div>
        
      

    )
}
export default Popup ;