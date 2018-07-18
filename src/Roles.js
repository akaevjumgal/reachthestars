import React, {Component} from "react";
/* User roles */
import Admin from "./scenes/general/Admin";
import Head from "./scenes/head/HeadScene";
import HR from "./scenes/hr/HRScene";
import Interviewer from "./scenes/interviewer/Interviewer";
import PM from './scenes/pm/PM';

export default class UserRole extends Component {
    render() {
        const userRole = this.props.userRole;

        if (userRole === "admin") {
            return <Admin/>;
        } else if (userRole === "HoD") {
            return <Head/>;
        } else if (userRole === "HR") {
            return <HR/>;
        } else if (userRole === "Interviewer") {
            return <Interviewer/>;
        } else if (userRole === "PM") {
            return <PM/>;
        } else return null
    }
}