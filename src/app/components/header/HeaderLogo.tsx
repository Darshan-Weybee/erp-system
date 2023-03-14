import { FC } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { absolutePath } from "../../helpers/relativePath"
import { DASHBOARD } from "../../helpers/routes"
import ImageDisplay from "../commonComponent/ImageDisplay"

interface props {
    profileDetails : any
}

const HeaderLogo :FC<props> = ({profileDetails}) => {
    return(
        <Link to={absolutePath(DASHBOARD)} className="d-flex gap-2 align-items-center">
            <div className="w-55px">
                <ImageDisplay path="/media/auth/logo1.png" altText="companyLogo" className="img-fit-to-div" errorPath=""/>
            </div>
            <div className="fs-2 fw-bold">
                {profileDetails?.profileData?.CompanyName || ""}
            </div>
        </Link>
    )
}
const mapStateToProps = (state : any) => {
    return{
        profileDetails : state.profile
    }
}

export default connect(mapStateToProps)(HeaderLogo)