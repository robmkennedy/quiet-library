import { ReactNode } from 'react';
import './GridFlow.scss';

type GridFlowProps = {
    items: ReactNode[]
}

/**
 * A component that generates a list of grid items.
 * It uses responsive grid layout to lay out the items left-to-right, top-to-bottom.
 * This allows us to lay out any component in a grid, regardless of component type.
 */
export default function GridFlow(props: GridFlowProps) {
    const { items } = props;

    return (
        <div className="rk-grid-flow">
            {items}
        </div>
    );
};