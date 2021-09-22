import { Children, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="md:px-0 content px-10">
            {children}
        </div>
    )
}

export default Layout