import {createBrowserRouter} from 'react-router-dom';
import AppBoundary from 'components/common/AppBoundary/AppBoundary';
import PageBoundary from 'components/common/PageBoundary/PageBoundary';

/**
 * A string enum used to reference particular route paths.
 * Using this helps to prevent hard-coding route paths throughout the app.
 */
export enum RoutePath {
    BASE = '/',
    ABOUT = '/about',
    TITLES = '/titles',
    AUTHORS = '/authors',
    CONTENT = '/content',
    SUBJECTS = '/subjects',
    BOOK_DETAIL = '/book/detail',
    AUTHOR_DETAIL = '/author/detail'
}

export default createBrowserRouter([
    {

        path: RoutePath.BASE,
        errorElement: <AppBoundary/>,
        lazy: () => import(/* webpackChunkName: 'base-layout' */'./LayoutRoute/LayoutRoute'),
        children: [
            {
                index: true,
                errorElement: <PageBoundary/>,
                lazy: () => import(/* webpackChunkName: 'home-page' */'./HomeRoute/HomeRoute')
            },
            {
                path: RoutePath.ABOUT,
                errorElement: <PageBoundary/>,
                lazy: () => import(/* webpackChunkName: 'about-page' */'./AboutRoute/AboutRoute')
            },
            {
                path: RoutePath.TITLES,
                errorElement: <PageBoundary/>,
                lazy: () => import(/* webpackChunkName: 'titles-page' */'./TitlesRoute/TitlesRoute')
            },
            {
                path: RoutePath.AUTHORS,
                errorElement: <PageBoundary/>,
                lazy: () => import(/* webpackChunkName: 'authors-page' */'./AuthorsRoute/AuthorsRoute')
            },
            {
                path: RoutePath.CONTENT,
                errorElement: <PageBoundary/>,
                lazy: () => import(/* webpackChunkName: 'content-page' */'./ContentRoute/ContentRoute')
            },
            {
                path: RoutePath.SUBJECTS,
                errorElement: <PageBoundary/>,
                lazy: () => import(/* webpackChunkName: 'subjects-page' */'./SubjectsRoute/SubjectsRoute')
            },
            // {
            //     path: RoutePath.BOOK_DETAIL,
            //     errorElement: <PageBoundary/>,
            //     lazy: () => import(/* webpackChunkName: 'book-detail-page' */'./SubjectsRoute')
            // },
            // {
            //     path: RoutePath.AUTHOR_DETAIL,
            //     errorElement: <PageBoundary/>,
            //     lazy: () => import(/* webpackChunkName: 'author-detail-page' */'./SubjectsRoute')
            // },
            {
                path: '*',
                errorElement: <PageBoundary/>,
                lazy: () => import(/* webpackChunkName: 'invalid-page' */'./InvalidRoute/InvalidRoute')
            }
        ]
    }
]);