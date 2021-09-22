import { Children, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="md:px-0 content py-10" style={{maxWidth: "1065px"}}>
            {children}
        </div>
    )
}

export default Layout