import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Error Page</h1>
            <p>This is error page.</p>
            <p>{err.status} : {err.statusText}</p>
        </div>
    );
}

export default Error;