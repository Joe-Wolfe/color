import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './ColorForm.css';

function ColorForm({ addColor }) {
    const [color, setColor] = useState('#000000');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addColor(color);
        setIsSubmitted(true);

    }

    return (
        <div className="ColorForm" style={{ backgroundColor: color }}>
            <h1>Create a color</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color: </label>
                <input type="color" id="color" name="color" value={color} onChange={handleColorChange} />
                <button>Submit</button>
            </form>
            {isSubmitted && <Navigate to="/color" />}
        </div>
    );
}

export default ColorForm;