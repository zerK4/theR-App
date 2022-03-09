import "./Events.css";
import { useRef } from "react";

export default function Events() {

const eventRef = useRef()
const eventHandler = () => {
    eventRef.current.classList.toggle('eventShow')
}
const askRef = useRef()
const askHandler = () => {
    askRef.current.classList.toggle('askShow')
}

return (
<div className="events" id="eventsid">
    <h1 className="eventTitle">
    <div className="ev">Events</div>
    </h1>
    <div className="eventImg">
    <div className="eventsContainer">
        <div className="event">
        <h1>Wedding</h1>
        <button className="eventButton" onClick={eventHandler}>Check offer</button>
        </div>
        <div className="event">
        <h1>Corporate</h1>
        <button className="eventButton" onClick={eventHandler}>Check offer</button>
        </div>
        <div className="event">
        <h1>Private</h1>
        <button className="eventButton" onClick={askHandler}>Ask offer</button>
        </div>
    </div>
    <div className="askOffer" ref={askRef}>
        <i className="fa fa-close closeAsk" onClick={askHandler}></i>
        <h3 className="askTitle">Ask for a offer</h3>
            <form>
                <div className="formContainer">
                <label>Name</label>
                <input type="text" placeholder="Please enter name" />    
                </div>
                <div className="formContainer">
                <label>Email</label>
                <input type="text" placeholder="Please enter email" />    
                </div>
                <div className="formContainer">
                <label>Phone</label>
                <input type="text" placeholder="Please enter phone number" />    
                </div>
                <div className="formContainer">
                <textarea placeholder="Please enter your message"></textarea>    
                <button className="sendRequest">Send</button>
                </div>
            </form>
    </div>
    <div className="eventDet" ref={eventRef}>
        <i className="fa fa-close closeEvent" onClick={eventHandler}></i>
        <h3 className="offer">Our offer</h3>
        <p className="offerInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        fugit obcaecati laborum nemo numquam voluptatum accusantium, ipsam
        voluptate? Laborum voluptate molestiae debitis voluptates! Quasi quo
        veritatis fuga quisquam adipisci at!
        </p>
    </div>
    </div>
</div>
);
}
