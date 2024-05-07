import { useTranslation } from 'react-i18next';
import './BoxError.scss';

type BoxErrorProps = {
    message?: string
};

/**
 * A component used throughout the app to display an error to the user.
 * If an error message is not supplied, default error text is used.
 */
export default function BoxError(props: BoxErrorProps) {
    const { message } = props;
    const { t } = useTranslation();

    const displayMessage = message || t('common.error');

    return (
        <div className="rk-box-error">
            <h5>{displayMessage}</h5>
        </div>
    );
};