import Layout from 'components/app/Layout/Layout';

/**
 * This component is used by react-router to lazily load the Layout for the app.
 * The Layout component below is used by the BrowserRouter for the base url ('/').
 * Somewhere nested within the Layout component, there must be an Outlet component. The Outlet component is where the
 * appropriate page for that route is rendered.
 *
 * Note: When configuring this route in react-router v6, the lazy() function spreads the params of this component.
 * Therefore, the params exported from this component must match those required in the route configuration objects. This
 * is why the exported component below must be named "Component". For convenience, the displayName of this component is
 * set to make it more readable in react dev tools.
 */
export function Component() {
    return <Layout/>;
}

Component.displayName = "LayoutRoute";