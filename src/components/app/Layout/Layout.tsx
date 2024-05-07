import {Fragment} from 'react';
import Main from 'components/app/Main/Main';
import Header from 'components/app/Header/Header';

/**
 * This is the component that react-router will display if navigating to the base '/' url.
 * It is responsible for laying out the structure of the Header and the Main sections.
 * The Main component contains the Outlet component - the Outlet is where react-router will
 * render the relevant pages based on the route. This allows us to keep the routed pages within the main
 * component. Therefore, as the route changes, the Header will always remain.
 */
export default function Layout() {

    return (
        <Fragment>
            <Header/>
            <Main/>
        </Fragment>
    );
};