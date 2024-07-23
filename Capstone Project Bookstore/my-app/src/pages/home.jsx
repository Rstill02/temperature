import "./home.css";
import { demoData } from '../services/dataService';

function Home() {
    return (
        <div className="home">
            <h1>Get Lit!!</h1>

            <div className="list">
                {demoData.map(rec =>
                    <div className="book">
                        <h1>{rec.title}</h1>
                        <img src={rec.image} alt="" />
                        </div>
                )}
            <div className="add-to-cart">Intrigued?<span>Add</span></div>
            <div className="add-container">
                <div className="add">Add</div>
    
            </div>
            </div>
        </div>
    );
}

export default Home;