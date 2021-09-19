import { Children, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="mx-auto md:px-0" style={{maxWidth: "1065px"}}>
            {children}
        </div>
    )
}

export default Layout