import "../Style/dashboard.css"
import $ from 'jquery';



const dashOpen = () => {
    $('.dashboard').addClass("open");
    $('.dashOpen').addClass("hidden");
};

const dashClose = () => {
    $('.dashboard').removeClass("open");
    $('.dashOpen').removeClass("hidden");
};

function dashboard() {

    return (
        <div className="dashboard">
            <div className="dashOpen" onClick={dashOpen}><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
            <div className="dashClose" onClick={dashClose}></div>
        </div>
    );
}

export default dashboard;