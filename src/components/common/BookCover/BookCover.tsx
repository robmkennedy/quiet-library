import BoxError from 'components/common/BoxError/BoxError';
import BoxSpinner from 'components/common/BoxSpinner/BoxSpinner';
import ImageLoader from 'components/common/ImageLoader/ImageLoader';
import { useTranslation } from 'react-i18next';
import './BookCover.scss';

type BookCoverProps = {
    url: string;
    alt: string;
};

/**
 * An element that will show a loader or error while fetching a book cover image.
 */
export default function BookCover(props: BookCoverProps) {
    const { url, alt } = props;
    const { t } = useTranslation();

    const errorComponent = <BoxError message={t('features.books.cover.error')} />;
    const loaderComponent = <BoxSpinner message={t('features.books.cover.loading')} />;

    return (
        <div className="rk-book-cover">
            <ImageLoader src={url} alt={alt} errorComponent={errorComponent} loaderComponent={loaderComponent} />
        </div>
    );
};