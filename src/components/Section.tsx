import {ReactNode} from "react";


type SectionProps = {
    children: ReactNode;

}
export const Section = ({children}: SectionProps) => (<>
    <div className="w-full pt-12 pb-12 px-8 bg-white dark:bg-gray-900 my-12">
        {children}
    </div>
</>)