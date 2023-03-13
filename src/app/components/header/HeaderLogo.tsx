import { Link } from "react-router-dom"
import { absolutePath } from "../../helpers/relativePath"
import { DASHBOARD } from "../../helpers/routes"
import ImageDisplay from "../commonComponent/ImageDisplay"

const HeaderLogo = () => {
    return(
        <Link to={absolutePath(DASHBOARD)} className="d-flex gap-2 align-items-center">
            <div className="w-55px">
                <ImageDisplay path="/media/auth/logo1.png" altText="companyLogo" className="img-fit-to-div" errorPath=""/>
            </div>
            <div className="fs-2 fw-bold">
                Company Name
            </div>
        </Link>
    )
}

export default HeaderLogo