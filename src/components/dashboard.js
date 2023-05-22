import "../Style/dashboard.css"
import $ from 'jquery';
import { useState } from 'react';


const dashOpen = () => {
    $('.dashboard').addClass("open");
    $('.dashOpen').addClass("hidden");
    $('.dashboard').addClass("shadow");
    $('.screen').removeClass("hidden");
};

const dashClose = () => {
    $('.dashboard').removeClass("open");
    $('.dashOpen').removeClass("hidden");
    $('.tacPloysArea').addClass('hidden');
    $('.stratPloysArea').addClass('hidden');
    $('.turningPointArea').removeClass('hidden');
    $('.stratPloys').removeClass('headerSelected');
    $('.tacPloys').removeClass('headerSelected');
    $('.turningPointHeader').addClass('headerSelected');
    $('.dashboard').removeClass("shadow");
    $('.screen').addClass("hidden");
};

function Dashboard() {
    const [currentMyCP, setMyCP] = useState(0);
    const handleDecreaseMyCP = () => {
        setMyCP((prevMyCP) => prevMyCP - 1);
    }
    const handleIncreaseMyCP = () => {
        setMyCP((prevMyCP) => prevMyCP + 1);
    }

    const [currentMyVP, setMyVP] = useState(0);
    const handleDecreaseMyVP = () => {
        setMyVP((prevMyVP) => prevMyVP - 1);
    }
    const handleIncreaseMyVP = () => {
        setMyVP((prevMyVP) => prevMyVP + 1);
    }

    const [currentOPCP, setOPCP] = useState(0);
    const handleDecreaseOPCP = () => {
        setOPCP((prevOPCP) => prevOPCP - 1);
    }
    const handleIncreaseOPCP = () => {
        setOPCP((prevOPCP) => prevOPCP + 1);
    }

    const [currentOPVP, setOPVP] = useState(0);
    const handleDecreaseOPVP = () => {
        setOPVP((prevOPVP) => prevOPVP - 1);
    }
    const handleIncreaseOPVP = () => {
        setOPVP((prevOPVP) => prevOPVP + 1);
    }

    const [currentTP, setTP] = useState(1);
    const handleIncreaseTP = () => {
        setTP((prevTP) => prevTP + 1);
        $('.operativeCard').removeClass("activated");
    }



    const stratPloysClick = () => {
        $('.tacPloysArea').addClass('hidden');
        $('.stratPloysArea').removeClass('hidden');
        $('.turningPointArea').addClass('hidden');
        $('.turningPointHeader').removeClass('headerSelected');
        $('.tacPloys').removeClass('headerSelected');
        $('.stratPloys').addClass('headerSelected');
    }

    const tacPloysClick = () => {
        $('.tacPloysArea').removeClass('hidden');
        $('.stratPloysArea').addClass('hidden');
        $('.turningPointArea').addClass('hidden');
        $('.stratPloys').removeClass('headerSelected');
        $('.turningPointHeader').removeClass('headerSelected');
        $('.tacPloys').addClass('headerSelected');
    }

    const turningPointHeaderClick = () => {
        $('.tacPloysArea').addClass('hidden');
        $('.stratPloysArea').addClass('hidden');
        $('.turningPointArea').removeClass('hidden');
        $('.stratPloys').removeClass('headerSelected');
        $('.tacPloys').removeClass('headerSelected');
        $('.turningPointHeader').addClass('headerSelected');
    }

    return (
        <div className="dashboard">
            <div className="dashOpen" onClick={dashOpen}><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
            <div className="dashClose" onClick={dashClose}><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
            <div className="dashArea">
                <div className="dashLeft dashOutside">
                    <div className="cpTitle scoreTitle">CP</div>
                    <div className="cpContent scoreContent"><div className="addMinus" onClick={handleDecreaseMyCP}>-</div>{currentMyCP}<div className="addMinus" onClick={handleIncreaseMyCP}>+</div></div>
                    <div className="vpTitle scoreTitle">VP</div>
                    <div className="vpContent scoreContent"><div className="addMinus" onClick={handleDecreaseMyVP}>-</div>{currentMyVP}<div className="addMinus" onClick={handleIncreaseMyVP}>+</div></div>
                </div>


                <div className="dashMiddle">

                    <div className="dashHeaders">
                        <div className="stratTacPloys">
                            <div className="stratPloys ploysArea" onClick={stratPloysClick}>STRATEGIC PLOYS</div>
                            <div className="turningPointHeader ploysArea headerSelected" onClick={turningPointHeaderClick}>TURNING POINT</div>
                            <div className="tacPloys ploysArea" onClick={tacPloysClick}>TACTICAL PLOYS</div>
                        </div>
                        <div className="turningPointArea">
                            <div className="turningPointTitle">TURNING POINT<div className="turningPoint">{currentTP}</div></div>
                            <div className="increaseTurningPoint" onClick={handleIncreaseTP}>NEXT TURNING POINT</div>
                        </div>
                    </div>

                    <div className="scrollable">
                        <div className="stratPloysArea hidden">

                            <div className="stratHeader">
                                <div className="stratName">BONDED</div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point, each time a friendly PATHFINDER operative makes a shooting attack, in the Roll Attack Dice step of that shooting attack, if it is within <div className="squarePloy"></div> of another friendly PATHFINDER operative (excluding a DRONE operative), you can re-roll one of your attack dice.</div>

                            <div className="stratHeader">
                                <div className="stratName">DETERMINED TACTICIAN</div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">If a friendly SHAS’UI PATHFINDER operative is in the killzone and it used its Art of War ability in the previous Turning Point, you can use this Strategic Ploy. Until the end of the Turning Point, while a friendly PATHFINDER operative is within <div className="pentagonPloy"></div> of and Visible to a friendly SHAS’UI operative, it treats the same Art of War that was in effect for your kill team in the previous Turning Point as being in effect for this Turning Point. Note that means for Mont’ka, it can only perform that free Dash action if it is within <div className="pentagonPloy"></div> of and Visible to a friendly SHAS’UI operative when that action is declared. You can only use this Strategic Ploy once.</div>

                            <div className="stratHeader">
                                <div className="stratName">RECON SWEEP</div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Friendly PATHFINDER operatives that are wholly within <div className="pentagonPloy"></div> of any killzone edge can immediately perform a free Dash action, but only if they can finish that move wholly within <div className="pentagonPloy"></div> of a killzone edge that is not your own killzone edge.</div>

                            <div className="stratHeader">
                                <div className="stratName">TAKE COVER</div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point, each time a shooting attack is made against a friendly PATHFINDER operative (excluding a DRONE operative), if it is in Cover, improve its Save characteristic by 1 for that shooting attack.

                            </div>
                        </div>


                        <div className="tacPloysArea hidden">

                            <div className="stratHeader">
                                <div className="stratName">A WORTHY CAUSE</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy at the start of the Firefight phase. Select one ready friendly PATHFINDER operative (excluding a DRONE operative) that is within <div className="squarePloy"></div> of any enemy operatives or within <div className="circlePloy"></div> of the centre of an objective marker and activate it. Once that operative has completed its activation, the player who has the Initiative activates an operative as normal. This ploy can only be used once per battle, and only if you do not have the initiative.</div>

                            <div className="stratHeader">
                                <div className="stratName">REPOSITION</div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy in the Firefight phase, when a friendly PATHFINDER operative is activated. Until the end of its activation, that operative can perform Dash actions if it is within Engagement Range of an enemy operative and when performing that action, it can move within Engagement Range of enemy operatives, but cannot finish that move within Engagement Range of enemy operatives (if that is not possible, it cannot perform the action).</div>

                            <div className="stratHeader">
                                <div className="stratName">SUPPORTING FIRE</div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy in the Firefight phase, when a Shoot action is declared for a friendly PATHFINDER operative. In the Select Valid Target step of that shooting attack, you must select an enemy operative that is within Engagement Range of a friendly operative and within <div className="pentagonPloy"></div> of the active operative, and that enemy operative cannot be in Cover as a result of friendly operatives’ bases. Note, however, that in the Roll Defence Dice step of that shooting attack, the enemy operative can be in Cover as a result of friendly operatives’ bases.</div>
                        </div>
                    </div>
                </div>






                <div className="dashRight dashOutside">
                    <div className="cpTitle scoreTitle">CP</div>
                    <div className="cpContent scoreContent"><div className="addMinus" onClick={handleDecreaseOPCP}>-</div>{currentOPCP}<div className="addMinus" onClick={handleIncreaseOPCP}>+</div></div>
                    <div className="vpTitle scoreTitle">VP</div>
                    <div className="vpContent scoreContent"><div className="addMinus" onClick={handleDecreaseOPVP}>-</div>{currentOPVP}<div className="addMinus" onClick={handleIncreaseOPVP}>+</div></div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;