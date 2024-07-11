import "./fanFaves.css";
import { demoData } from '../services/dataService';


function fanFaves() {
    return (
        <div className="fanFaves">
            <h1>Fan Series</h1>

            <div className="author">
                {demoData.map(rec =>
                <div className="book">
                <h1>{rec.author}</h1>
                <img src={rec.image} alt="" />
                </div>
                )}
            </div>
        </div>
    );
}

export default fanFaves;