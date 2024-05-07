import './ImageLoader.scss';
// import { useFetch } from '../../../hooks/useFetch';
import { ReactNode, useState } from 'react';
import Fade from 'react-bootstrap/Fade';

type ImageLoaderProps = {
    src: string,
    alt: string
    errorComponent?: ReactNode
    loaderComponent?: ReactNode
};

/**
 * An element that will show a loader or error while fetching an image.
 */
export default function ImageLoader(props: ImageLoaderProps) {
    const { src, alt, errorComponent,  loaderComponent } = props;

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleError = () => {
        setIsError(true);
    };

    const handleLoaded = () => {
        setIsLoading(false);
    };

    const errorNode = isError && errorComponent;
    const loaderNode = isLoading && loaderComponent;
    const imageNode = (!isError && !isLoading) && loaderComponent;

    return (
        <div className="rk-image">
            <Fade in={true} >
                <div className='rk-image-error'>{errorComponent}</div>
            </Fade>
            {/*<Fade in={true} >*/}
            {/*    <img src={src} alt={alt} onLoad={handleLoaded} onError={handleError}/>*/}
            {/*</Fade>*/}
            {/*<Fade in={isLoading}>*/}
            {/*    <div className='rk-image-loading'>{loaderComponent}</div>*/}
            {/*</Fade>*/}
        </div>
    );
};