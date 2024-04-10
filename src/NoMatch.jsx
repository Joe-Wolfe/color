import { Navigate } from 'react-router-dom';

function NoMatch() {
    return <Navigate to="/color" />
}

export default NoMatch;