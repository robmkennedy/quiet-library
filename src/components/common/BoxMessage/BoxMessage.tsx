import './BoxMessage.scss';

type BoxMessageProps = {
    message: string
};

/**
 * A common component used to display a message to the user.
 */
export default function BoxMessage(props: BoxMessageProps) {
    const { message } = props;

    return (
        <div className='rk-box-message'>
            <h5>{message}</h5>
        </div>
    );
};