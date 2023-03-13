import { FC } from "react"

interface props {
    title : string
}

const Title:FC<props> = ({title}) => {
    return(
        <div className="head3 py-4">{title}</div>
    )
}

export default Title