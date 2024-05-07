import { ReactNode } from 'react';

type PageProps = {
    id: string,
    children: ReactNode;
};

/**
 * All pages have a similar layout. This component provides
 * common layout and functionality to allow all pages to be the same.
 */
export default function Page(props: PageProps) {
    const { id, children } = props;

    return (
        <article id={id} className="rk-page mt-lg-4 mb-5">
            {children}
        </article>
    );
};