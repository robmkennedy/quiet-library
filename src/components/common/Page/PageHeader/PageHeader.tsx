import { ReactNode } from 'react';
import './PageHeader.scss';

type PageHeaderProps = {
    children: ReactNode;
};

/**
 * All pages have a similar headers. This component provides
 * common functionality to allow all page headers to be the same.
 */
export default function PageHeader(props: PageHeaderProps) {
    const { children } = props;

    return (
        <section className="rk-page-header mb-4 mb-lg-5">
            {children}
        </section>
    );
};