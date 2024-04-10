import { useParams, Link } from 'react-router-dom';
import './ColorDetail.css';

function ColorDetail() {

    const { color } = useParams();
    return (
        <div className='ColorDetail' style={{ backgroundColor: "#" + color }}>
            <h1>This is the Color #{color}</h1>
            <Link to="/color">Back to Color List</Link>
        </div>
    )
}

export default ColorDetail;