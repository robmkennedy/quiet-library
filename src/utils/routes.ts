import { RouteID, RouteConfig } from 'utils/utilTypes';

// import MoviePage from 'components/features/movie/MoviePage/MoviePage';
// import AboutPage from 'components/features/about/AboutPage/AboutPage';
// import TitlesPage from 'components/features/titles/TitlesPage/TitlesPage';
import {lazy} from 'react';
// import HistoryPage from 'components/features/history/HistoryPage/HistoryPage';
// import RecommendationPage from 'components/features/recommendation/RecommendationPage/RecommendationPage';

const TitlesPage = lazy(() => import('components/features/titles/TitlesPage/TitlesPage'));
const SubjectsPage = lazy(() => import('components/features/subjects/SubjectsPage/SubjectsPage'));


/**
 * Maintain a map of routes used throughout the app. Each route is referenced by the RouteID enum.
 */
const routes = new Map<RouteID, RouteConfig>();

routes.set(RouteID.TITLES, { path: '/titles', component: 'components/features/titles/TitlesPage/TitlesPage' });
routes.set(RouteID.SUBJECTS, { path: '/subjects', component: 'components/features/subjects/SubjectsPage/SubjectsPage' });
routes.set(RouteID.AUTHORS, { path: '/authors', component: 'components/features/subjects/SubjectsPage/SubjectsPage' });
routes.set(RouteID.CONTENT, { path: '/content', component: 'components/features/subjects/SubjectsPage/SubjectsPage' });

export default routes;