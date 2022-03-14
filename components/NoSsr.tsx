import React, { ReactChild, useEffect, useState } from 'react';

/**
 * The NoSsr component is a wrapper component that prevents the server side rendering of the children
 * component. 
 * 
 * It's a good idea to use this component when you want to prevent the server side rendering of the
 * children component.
 * @param {any}  - children: The content of the component.
 * @returns The `NoSsr` component is a wrapper component that is used to conditionally render its
 * children.
 */
const NoSsr = ({ children }: any): JSX.Element => {
    const [isMounted, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    return <>{isMounted ? children : null}</>;
};

export default NoSsr;