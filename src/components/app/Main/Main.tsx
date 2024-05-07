import {Outlet} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Main.scss';

/**
 * This is the main area of the application displayed beneath the header.
 * Every time the route changes, a corresponding Page is loaded into this panel.
 * The available routes and their Component pages are listed in the routes utility.
 * The final route will be used to replace any invalid url paths that the user may enter.
 * It defaults to the first route in the array (in this case - the titles page).
 */
export default function Main() {

    return (
        <main>
            <Container>
                <Outlet/>
            </Container>
        </main>
    );
};
