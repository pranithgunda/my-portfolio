// Error component to handle undefined routes
// Import useRouteError method to handle errors
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>🤓 Sorry, you have reached wrong route. An unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};