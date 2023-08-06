import {ReactNode} from "react";
import classnames from 'classnames';


export type ContainerProps = {
    children: ReactNode;
}

export const Container = ({children}: ContainerProps) => {
    return <main className={classnames("mx-auto container px-12 flex flex-col")}>
        {children}
    </main>
}