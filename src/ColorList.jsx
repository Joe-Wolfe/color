import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({ colorList }) {
    return (
        <div className='ColorList'>
            <div className='colorList-title'>
                <h1>Color Maker</h1>
                <Link to="/color/new">Add a color</Link>
            </div>

            {colorList.map((color, index) => (
                <div className="ColorLink" key={index} style={{ backgroundColor: color }}>
                    <Link to={`/color/${color.slice(1)}`}>{color}</Link>
                </div>
            ))}
        </div>
    )
}

export default ColorList;