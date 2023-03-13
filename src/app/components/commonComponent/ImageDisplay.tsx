import { FC } from "react"

interface props {
    path: string
    altText: string
    className: string
    errorPath : string
}

const ImageDisplay: FC<props> = ({ path, altText, className, errorPath }) => {
    return (
        <img
            src={path}
            alt={altText}
            className={className}
            onError={(event: any) => {
                event.target.src = errorPath;
                event.onerror = null;
            }}
        />
    )
}

export default ImageDisplay