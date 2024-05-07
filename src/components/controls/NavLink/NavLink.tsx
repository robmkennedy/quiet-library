import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavLink.scss';

type NavLinkProps = {
    path: string;
    label: string;
};

/**
 * A wrapper for the nav-link provided by react-router.
 */
export default function NavLink(props: NavLinkProps) {
    const { path, label } = props;

    return (
        <RouterNavLink className={`rk-nav-link nav-link`} to={path}>{label}</RouterNavLink>
    );
};