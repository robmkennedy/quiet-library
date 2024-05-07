import SubjectsPage from 'components/features/subjects/SubjectsPage/SubjectsPage';
import AuthorsPage from '../../features/authors/AuthorsPage/AuthorsPage';
import HomePage from '../../features/home/HomePage/HomePage';

/**
 * A page used to described details about how the application was built. 
 * It uses the react-markdown package to read the information from a markdown file.
 * This saves time having to hardcode the info into html tags.
 * The markdown is loaded async with RTK Query, therefore it will need to facilitate
 * Loader and Error tags. 
 */
export function Component() {
    return <HomePage/>;
}

Component.displayName = "HomeRoute";