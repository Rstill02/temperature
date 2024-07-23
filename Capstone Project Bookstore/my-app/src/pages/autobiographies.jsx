import "./autobiographies.css";

function Autobiographies() {
    return (
        <ul className="auto">
            <h1>Musical</h1>
            <li>Curtis Jackson</li>
            <li>Bobby Brown</li>
            <li>Timbaland</li>
            <li>L.A. Reid</li>

            <ul className="arts">
                <h1>Actors</h1>
                <li>Richard Pryor</li>
                <li>Kevin Hart</li>
                <li>Viola Davis</li>

                <ul className="entertainment">
                    <li>Trevor Noah</li>

                    <ul className="pop culture">
                        <h1>Pop Culture</h1>
                        <li>Steve Jobs</li>
                        <li>Phil Knight</li>
                        <li>George Bush</li>
                </ul>
            </ul>
        </ul>
        </ul>
    );
}

export default Autobiographies;