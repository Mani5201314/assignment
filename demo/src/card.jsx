import "./card.css"

const Card = (props) => {
    return (  
        <div className="hi">
        <div id="card">
            <img src={props.src} alt="" />
            <div className="card">
                <h1 style={{color:"red"}}>{props.name}🩵</h1>
                <p style={{color:"blue"}}>Radha Loves Krishna💛 But Krishna Loves Devaki ❤️.......</p>
                <button>Submit</button>
            </div>
        </div>
        <div id="card">
            <img src={props.src1} alt="" />
            <div className="card">
                <h1 style={{color:"red"}}>{props.name}❤️</h1>
                <p style={{color:"blue"}}>Radha Loves Krishna💛 But Krishna Loves Devaki ❤️.......</p>
                <button style={{background:"blue"}}>Submit</button>
            </div>
        </div> <div id="card">
            <img src={props.src2} alt="" />
            <div className="card">
                <h1 style={{color:"red"}}>{props.name}</h1>
                <p style={{color:"blue"}}>Radha Loves Krishna💛 But Krishna Loves Devaki ❤️.......</p>
                <button style={{background:"red"}}>Submit</button>
            </div>
        </div>
        </div>
        
    );
}
 
export default Card;