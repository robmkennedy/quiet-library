// import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';

// import BoxError from 'components/common/BoxError/BoxError';
import PageTitle from 'components/common/Page/PageTitle/PageTitle';
// import BoxSpinner from 'components/common/BoxSpinner/BoxSpinner';
import PageHeader from 'components/common/Page/PageHeader/PageHeader';
// import { useGetAboutContentQuery } from 'state/slices/aboutApiSlice';
import './AuthorsPage.scss';
import Page from "../../../common/Page/Page";

/**
 * A page used to described details about how the application was built. 
 * It uses the react-markdown package to read the information from a markdown file.
 * This saves time having to hardcode the info into html tags.
 * The markdown is loaded async with RTK Query, therefore it will need to facilitate
 * Loader and Error tags. 
 */
export default function AuthorsPage() {
    const { t } = useTranslation();

    // const { data, error, isLoading } = useGetAboutContentQuery('');
    //
    // let content = <BoxSpinner message={t('features.about.loading')} />
    //
    // if (isLoading) {
    //     content = <BoxSpinner message={t('features.about.loading')} />
    // }
    // else if (error) {
    //     content = <BoxError message={t('features.about.error')} />
    // }
    // else if (data) {
    //     content = (
    //         <ReactMarkdown children={data} />
    //     );
    // }

    return (
        <Page id='authorsPage'>
            <PageHeader>
                <PageTitle title={t('features.authors.title')} />
            </PageHeader>
            <div className='rk-about-content'>
            </div>
        </Page>
    );
};