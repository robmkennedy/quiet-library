import {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { NavbarBrand, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
// import { sidePanelClosed, sidePanelToggled } from 'state/slices/layoutSlice';
import NavLink from 'components/controls/NavLink/NavLink';
// import { useLayoutSelector } from 'hooks/selectorHooks';
// import { useAppDispatch } from 'hooks/stateHooks';
import { RouteID } from 'utils/utilTypes';
import routes from 'utils/routes';
import './Header.scss';
import {RoutePath} from '../../routes/appRouter';

/**
 * The header of the entire application. It utilizes the Navbar that is provided
 * by react-bootstrap. This handles responsiveness and collapsing the nav menu in mobile view.
 * Each link in the header is a NavLink, which uses react-router NavLinks
 * to route to the correct page.
 */
const Header = () => {
    const { t } = useTranslation();
    const [ sidePanelOpen, setSidePanelOpen ] = useState(false);


    // const location = useLocation();
    // const dispatch = useAppDispatch();
    // const { sidePanelOpen } = useLayoutSelector();

    // Close sidebar if the location changes
    // useEffect(() => {
    //     dispatch(sidePanelClosed());
    // }, [dispatch, location]);

    // Open / close the sidebar
    const handleToggle = () => {
        // dispatch(sidePanelToggled());
        setSidePanelOpen(!sidePanelOpen);
    };

    return (
        <header>
            <Navbar expand='lg' onToggle={handleToggle}>
                <Container>
                    <NavbarBrand>
                        <img src='/logo.svg' alt={t('app.brand')} />
                        {t('app.title')}
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls='navbarNav' />
                    <Navbar.Offcanvas id='navbarNav' show={sidePanelOpen}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{t('app.title')}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='me-auto'>
                                <NavLink path={RoutePath.BASE} label={t('header.link.home')} />
                                <NavLink path={RoutePath.TITLES} label={t('header.link.titles')} />
                                <NavLink path={RoutePath.SUBJECTS} label={t('header.link.subjects')} />
                                <NavLink path={RoutePath.AUTHORS} label={t('header.link.authors')} />
                                <NavLink path={RoutePath.CONTENT} label={t('header.link.content')} />
                                <NavLink path={RoutePath.ABOUT} label={t('header.link.about')} />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
