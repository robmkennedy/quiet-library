import { Provider } from 'react-redux';
import {BrowserRouter, RouterProvider} from 'react-router-dom';
// import store from 'state/store';
import './App.scss';
import appRouter from 'components/routes/appRouter';


/**
 * The top-level app component. It consists of two sections - the header at the top
 * and the main panel taking up the rest of the body.
 * It is wrapped in a BrowserRouter context which provides routing by react-router.
 * It is also wrapped in a Provider used by react-redux for state handling.
 */
const App = () => {

    return (
        // <Provider store={store}>
                <div id="app">
                    <RouterProvider router={appRouter}/>
                </div>
        // </Provider>
    );
};

export default App;
