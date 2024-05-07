import { useTranslation } from 'react-i18next';
import './BoxSpinner.scss';

type BoxSpinnerProps = {
    message?: string
};

/**
 * A component used to display a loading message to the user.
 * If no specific message prop is supplied, a default loading message is used.
 */
export default function BoxSpinner(props: BoxSpinnerProps) {
    const { message } = props;
    const { t } = useTranslation();

    const displayMessage = message || t('common.loading');

    return (
        <div className="rk-box-spinner">
            <div className="rk-spinner" />
            <h5>{displayMessage}</h5>
        </div>
    );
};