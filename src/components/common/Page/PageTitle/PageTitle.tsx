import './PageTitle.scss';

type PageTitleProps = {
    title: string
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export default function PageTitle(props: PageTitleProps) {
    const { title } = props;

    return (
        <h1 className="rk-page-title">{title}</h1>
    );
};