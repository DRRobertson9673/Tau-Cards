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
                            <div className="ploysArea stratPloys" onClick={stratPloysClick}>PLOYS</div>
                            <div className="ploysArea turningPointHeader headerSelected" onClick={turningPointHeaderClick}>TURNING POINT</div>
                            <div className="ploysArea tacPloys" onClick={tacPloysClick}>TAC OPS</div>
                        </div>
                        <div className="turningPointArea">
                            <div className="turningPointTitle">TURNING POINT<div className="turningPoint">{currentTP}</div></div>
                            <div className="increaseTurningPoint" onClick={handleIncreaseTP}>NEXT TURNING POINT</div>
                        </div>
                    </div>

                    <div className="scrollable">
                        <div className="stratPloysArea hidden">

                            <div className="stratHeader">
                                <div className="stratName">BONDED <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point, each time a friendly PATHFINDER operative makes a shooting attack, in the Roll Attack Dice step of that shooting attack, if it is within <div className="squarePloy"></div> of another friendly PATHFINDER operative (excluding a DRONE operative), you can re-roll one of your attack dice.</div>

                            <div className="stratHeader">
                                <div className="stratName">DETERMINED TACTICIAN <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">If a friendly SHAS’UI PATHFINDER operative is in the killzone and it used its Art of War ability in the previous Turning Point, you can use this Strategic Ploy. Until the end of the Turning Point, while a friendly PATHFINDER operative is within <div className="pentagonPloy"></div> of and Visible to a friendly SHAS’UI operative, it treats the same Art of War that was in effect for your kill team in the previous Turning Point as being in effect for this Turning Point. Note that means for Mont’ka, it can only perform that free Dash action if it is within <div className="pentagonPloy"></div> of and Visible to a friendly SHAS’UI operative when that action is declared. You can only use this Strategic Ploy once.</div>

                            <div className="stratHeader">
                                <div className="stratName">RECON SWEEP <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Friendly PATHFINDER operatives that are wholly within <div className="pentagonPloy"></div> of any killzone edge can immediately perform a free Dash action, but only if they can finish that move wholly within <div className="pentagonPloy"></div> of a killzone edge that is not your own killzone edge.</div>

                            <div className="stratHeader">
                                <div className="stratName">TAKE COVER <small>(STRAT PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Until the end of the Turning Point, each time a shooting attack is made against a friendly PATHFINDER operative (excluding a DRONE operative), if it is in Cover, improve its Save characteristic by 1 for that shooting attack.
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">A WORTHY CAUSE <small>(TAC PLOY)</small></div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy at the start of the Firefight phase. Select one ready friendly PATHFINDER operative (excluding a DRONE operative) that is within <div className="squarePloy"></div> of any enemy operatives or within <div className="circlePloy"></div> of the centre of an objective marker and activate it. Once that operative has completed its activation, the player who has the Initiative activates an operative as normal. This ploy can only be used once per battle, and only if you do not have the initiative.</div>

                            <div className="stratHeader">
                                <div className="stratName">REPOSITION <small>(TAC PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy in the Firefight phase, when a friendly PATHFINDER operative is activated. Until the end of its activation, that operative can perform Dash actions if it is within Engagement Range of an enemy operative and when performing that action, it can move within Engagement Range of enemy operatives, but cannot finish that move within Engagement Range of enemy operatives (if that is not possible, it cannot perform the action).</div>

                            <div className="stratHeader">
                                <div className="stratName">SUPPORTING FIRE <small>(TAC PLOY)</small></div><div className="stratCost">1CP</div>
                            </div>
                            <div className="stratContent">Use this Tactical Ploy in the Firefight phase, when a Shoot action is declared for a friendly PATHFINDER operative. In the Select Valid Target step of that shooting attack, you must select an enemy operative that is within Engagement Range of a friendly operative and within <div className="pentagonPloy"></div> of the active operative, and that enemy operative cannot be in Cover as a result of friendly operatives’ bases. Note, however, that in the Roll Defence Dice step of that shooting attack, the enemy operative can be in Cover as a result of friendly operatives’ bases.</div>
                        </div>


                        <div className="tacPloysArea hidden">

                            <div className="stratHeader">
                                <div className="stratName">MARK ENEMY MOVEMENTS</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if at least half of the enemy operatives in the killzone (rounding down and a minimum of 3 enemy operatives) have one or more markerlight tokens, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">PATIENT HUNTER</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if you scored more victory points than your opponent for the mission objective during that Turning Point, and more than half of your operatives (rounding down) have a Conceal order, you score 1 VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">KILLING BLOW</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if the total Wounds characteristic of enemy operatives that were incapacitated during that Turning Point is greater than the total Wounds characteristic of friendly operatives that were incapacitated during that Turning Point, and more than half of your operatives (rounding down) have an Engage order, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">OUTFLANK</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if friendly operatives control both neutral killzone edges, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                                Friendly operatives control a neutral killzone edge if the total APL of friendly operatives within <div className="squarePloy"></div> of it is greater than that of enemy operatives. Operatives within <div className="pentagonPloy"></div> of their own drop zone cannot contribute their APL when determining this total.
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">COURIER</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if that operative is within pentagon of your opponent's drop zone, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">PLANT TRANSPONDER</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>If a friendly operative performs the Plant Transponder mission action, you score 1 VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                                Friendly operatives can perform the following mission action: <b>Plant Transponder (1 AP)</b><br />
                                An operative can perform this action while wholly within your opponent's territory and more than <div className="circlePloy"></div> from terrain features (barricades are terrain features; ignore terrain features that have the Insignificant trait). If it does so, place one of your Transponder tokens underneath the operative as close as possible to the centre of its base. An operative cannot perform this action while within Engagement Range of an enemy operative or <div className="pentagonPloy"></div> of your other Transponder tokens.
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">SECURE VANTAGE</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent"><i>Not usable in Close Quarters</i><br />You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if you control a Vantage Point that is more than <div className="squarePloy"></div> from your drop zone, you score 1VP.</li>
                                    <li>If you achieve the first condition with a different vantage point at the end of any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                                Friendly operatives control a Vantage Point if the total APL of friendly operatives on it is greater than that of enemy operatives.
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">RECOVER ITEM</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You must reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if a friendly operative controls your Item token, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">SURGE FORWARD</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent">You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if the total APL of friendly operatives within pentagon of your opponent's drop zone is 4 or more, you score 1VP.</li>
                                    <li>If you achieve the first condition in any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>

                            <div className="stratHeader">
                                <div className="stratName">SECURE UNEXPLORED ROOMS</div><div className="stratCost">2CP</div>
                            </div>
                            <div className="stratContent"><i>Close Quarters only</i><br />You can reveal this Tac Op in the Target Reveal step of any Turning Point.
                                <ul>
                                    <li>At the end of any Turning Point, if the total APL of friendly operatives within an Unexplored Room (see below) is greater than that of enemy operatives, you score 1VP.</li>
                                    <li>If you achieve the first condition with a different Unexplored Room (i.e. separated by access points) at the end of any subsequent Turning Points, you score 1VP.</li>
                                </ul>
                            </div>


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