import "../Style/grid.css"
import Blooded from '../images/Blooded.jpg';
import Comms from '../images/Comms.jpg';
import DroneGuy from '../images/DroneGuy.jpg';
import Grenadier from '../images/Grenadier.jpg';
import Marksman from '../images/Marksman.jpg';
import ReconDrone from '../images/ReconDrone.jpg';
import Shas from '../images/Shas.jpg';
import ShieldDrone from '../images/ShieldDrone.jpg';
import TIP from '../images/TIP.jpg';
import WeaponsEx from '../images/WeaponsEx.jpg';
import meleeIcon from '../images/weptypeM.png';
import rangedIcon from '../images/weptypeR.png';
import $ from 'jquery';
import { useState } from 'react';

const operativesArray = [
    {
        id: "operative1",
        image: Shas,
        operativeName: "SHAS'UI",
        type: "Marksman, Scout",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 8,
        Weapons: [
            {
                weaponName: "Pulse Carbine",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "4/5",
                SR: "-",
                Crit: "-"
            },
            {
                weaponName: "Bonding Knife (Bal)",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "3+",
                D: "3/4",
                SR: "Balanced",
                Crit: "-"
            },
        ],
        Abilities: [
            {
                name: "Art of War ",
                detail: "Once per battle, when it is your turn to use a Strategic Ploy, if this operative is in the killzone, it can use this ability. If it does, select one Art of War to be in effect until the end of the Turning Point."
            },
            {
                name: "",
                detail: <div className="ability"><b>Holographic Readout </b>Once per battle, when a friendly PATHFINDER operative (excluding a DRONE operative) is activated within<div className="square"></div>of and is Visible to this operative, this operative can use this ability. If it does, until the end of the friendly PATHFINDER operative's activation, it can perform one mission action for one less AP (to a minimum of 0AP).</div>
            },
            {
                name: "Balanced ",
                detail: "Each time a friendly operative fights in combat or makes a shooting attack with this weapon, in the Roll Attack Dice stop of that combat or shooting attack, you can re-roll one of your attack dice."
            }
        ],
        UniqueActions: [
            {
                name: "Markerlight (1AP) ",
                detail: "Select one enemy operative Visible to this operative. That enemy operative gains 1 Markerlight token. An operative cannot perform this action if it is within Engagement Range of an enemy operative. If an operative would perform this action and a Shoot action in the same activation, only the target of that Shoot action's shooting attack can be selected for this action."
            },
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Can give engaged operatives a free dash.", "Operatives within square and visible get free mission action."]
    },
    {
        id: "operative2",
        image: Grenadier,
        operativeName: "ASSAULT GRENADIER",
        type: "Staunch, Scout",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 7,
        Weapons: [
            {
                weaponName: "EMP Grenade",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "2/3",
                SR: <div className="headerSR oswald">Rng<div className="SRpentagon"></div>, Blast<div className="SRCircle"></div>, Indirect, EMP*, Limited</div>,
                Crit: "-"
            },
            {
                weaponName: "Fusion Grenade",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "4/3",
                SR: <div className="headerSR oswald">Rng<div className="SRpentagon"></div>, Indirect, AP2, Limited</div>,
                Crit: "MW3"
            },
            {
                weaponName: "Pulse Carbine",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "4+",
                D: "4/5",
                SR: "-",
                Crit: "-"
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "2/3",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [
            {
                name: "Grenadier ",
                detail: "This operative is equipped with EMP, fusion and photon grenades and they do not cost any equipment points."
            },
            {
                name: "Nanocrystalline Headgear ",
                detail: "You can ignore any or all modifiers to this operative's APL and to the Weapon Skill and Ballistic Skill characteristics of its melee and ranged weapons respectively."
            }
        ],
        UniqueActions: [
            {
                name: "Markerlight (1AP) ",
                detail: ""
            },
            {
                name: "",
                detail: <div className="ability"><b>Photon Grenade (1AP) </b>Select one enemy operative Visible to this operative. Roll one D6, subtracting 1 from the result as follows: - If that enemy operative is not in this operative's Line of Sight. - If that enemy operative is more than<div className="pentagon"></div>from this operative. On a 2+, that enemy operative gains a Photon token. While an operative has any Photon tokens, subtract<div className="abilityCircle"></div>from its Movement characteristic and it cannot perform Dash actions. At the end of an operative's activation, remove all Photon tokens it has. This operative can only perform this action once, and cannot perform this action if it is within Engagement Range of an enemy operative.</div>
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ""
    },
    {
        id: "operative3",
        image: Blooded,
        operativeName: "BLOODED",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "4+",
        W: 7,
        Weapons: [
            {
                weaponName: "Suppressed Pulse Carbine (silent)",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "4/5",
                SR: "Silent",
                Crit: "-"
            },
            {
                weaponName: "Bionic Arm",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "4+",
                D: "3/4",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [
            {
                name: "",
                detail: ""
            }
        ],
        UniqueActions: [
            {
                name: "Markerlight (1AP)",
                detail: ""
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: [""]
    },
    {
        id: "operative4",
        image: Comms,
        operativeName: "COMMS SPECIALIST",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 7,
        Weapons: [
            {
                weaponName: "Pulse Carbine",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "4+",
                D: "4/5",
                SR: "-",
                Crit: "-"
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "2/3",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [

        ],
        UniqueActions: [
            {
                name: "Markerlight (1AP)",
                detail: ""
            },
            {
                name: "",
                detail: <div className="ability"><b>Signal (1AP) </b>Select one friendly PATHFINDER operative within<div className="pentagon"></div>of and Visible to this operative. Add 1 to its APL. This operative cannot perform this action if it is within Engagement Range of an enemy operative.</div>
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Can add 1APL to someone else"]
    },
    {
        id: "operative5",
        image: DroneGuy,
        operativeName: "DRONE CONTROLLER",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 7,
        Weapons: [
            {
                weaponName: "Pulse Carbine",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "4+",
                D: "4/5",
                SR: "-",
                Crit: "-"
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "2/3",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [
            {
                name: "",
                detail: <div className="ability"><b>Drone Scout </b>During deployment, if this operative was selected for deployment, you can set up one friendly PATHFINDER DRONE operative with a Conceal order anywhere in the killzone that is wholly within<div className="pentagon"></div>of your dropzone, more than<div className="pentagon"></div>from enemy operatives and more than<div className="square"></div>from the enemy dropzone.</div>
            }
        ],
        UniqueActions: [
            {
                name: "Markerlight (1AP) ",
                detail: ""
            },
            {
                name: "Control Drone (1AP) ",
                detail: "Select one friendly PATHFINDER DRONE operative, then select one of the following: - If that DRONE operative is Ready, after this activation ends, you can activate that DRONE operative and until the end of the Turning Point, it is not considered to have the first three bullet points of its Artificial Intelligence ability. - If that DRONE operative has been activated during this Turning Point, perform a free Dash or Shoot action with it. If you perform a Shoot action, for that action's shooting attack, worsen the Ballistic Skill characteristic of its ranged weapons by 1. This operative cannot perform this action if it is within Engagement Range of an enemy operative."
            },
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["During deployment - set up drone in killzone.", "Activate drone for free"]
    },

    {
        id: "operative6",
        image: ReconDrone,
        operativeName: "RECON DRONE",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "4+",
        W: 12,
        Weapons: [
            {
                weaponName: "Burst Cannon",
                weaponIcon: rangedIcon,
                A: 6,
                BS: "4+",
                D: "3/4",
                SR: "Heavy, Ceaseless, Fusillade",
                Crit: "-"
            },
            {
                weaponName: "Ram",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "3/4",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [
            {
                name: "Recon Suite ",
                detail: "During the mission sequence, if this friendly operative was selected for deployment, after resolving your selected option in the Scouting step, you can select and resolve a Recon option in addition to any other options. Initiative is still determined by your original selection."
            }
        ],
        UniqueActions: [
            {
                name: "Analyse ",
                detail: "Select one enemy operative Visible to this operative, then select one other ready friendly PATHFINDER operative that is not within Engagement Range of an enemy operative. After this operative's activation ends, you can activate that other friendly operative, and during its activation, each time it makes a shooting attack against that enemy operative, in the Roll Attack Dice step of that shooting attack, you can re-roll any or all of your attack dice. This operative cannot perform this action if it is within Engagement Range of enemy operatives."
            },
            {
                name: "",
                detail: <div className="abilitySmall"><b>Artificial Intelligence: </b>This operative cannot perform missions actions or the Pick Up action. For the purposes of determining control of objective markers, treat this operative's APL as 1 lower. Each time a shooting attack is made against this operative, in the Roll Defence Dice step of that shooting attack, if it has an Engage order, defence dice cannot be automatically retained as a result of Cover. Unless otherwise specifed, this operative cannot be equipped with equipment.</div>
            },
            {
                name: "",
                detail: <div className="abilitySmall"><b>Saviour Protocols: </b>When a PATHFINDER is selected as target for a shooting attack, if DRONE operative is Visible and within<div className="abilityCircle"></div>is not in Engagement Range of an enemy and not protecting any other operatives, it can protect PATHFINDER until the end of the Turning Point (or not in<div className="smallAbilityCircle"></div>). Shooting attacks target DRONE instead. Cannot retain dice from cover. Cannot be protected from BLAST etc.</div>
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Free Recon option at start", "Can activate operative with rerolls"]
    },
    {
        id: "operative7",
        image: ShieldDrone,
        operativeName: "SHIELD DRONE",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "4+",
        W: 7,
        Weapons: [
            {
                weaponName: "Ram",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "2/3",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [
            {
                name: "Shield Generator ",
                detail: "This operative has a 4+ invulnerable save. Each time this operative would lose a wound that is not as a result of a mortal wound, roll one D6: on a 5+, that wound is not lost."
            }
        ],
        UniqueActions: [
            {
                name: "",
                detail: <div className="abilitySmall"><b>Artificial Intelligence: </b>This operative cannot perform missions actions or the Pick Up action. For the purposes of determining control of objective markers, treat this operative's APL as 1 lower. Each time a shooting attack is made against this operative, in the Roll Defence Dice step of that shooting attack, if it has an Engage order, defence dice cannot be automatically retained as a result of Cover. Unless otherwise specifed, this operative cannot be equipped with equipment.</div>
            },
            {
                name: "",
                detail: <div className="abilitySmall"><b>Saviour Protocols: </b>When a PATHFINDER is selected as target for a shooting attack, if DRONE operative is Visible and within<div className="abilityCircle"></div>is not in Engagement Range of an enemy and not protecting any other operatives, it can protect PATHFINDER until the end of the Turning Point (or not in<div className="smallAbilityCircle"></div>). Shooting attacks target DRONE instead. Cannot retain dice from cover. Cannot be protected from BLAST etc.</div>
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Shieldy boy"]
    },

    {
        id: "operative8",
        image: TIP,
        operativeName: "TIP",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 7,
        Weapons: [
            {
                weaponName: "Pulse Carbine",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "4+",
                D: "4/5",
                SR: "-",
                Crit: "-"
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "2/3",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [
            {
                name: "Multi-spectral Sensor ",
                detail: "Each time this operative makes a shooting attack, when selecting a valid target for that shooting attack, enemy operatives are not Obscured."
            }
        ],
        UniqueActions: [
            {
                name: "Markerlight (1AP) ",
                detail: ""
            },
            {
                name: "System Jam (1AP) ",
                detail: "Select one enemy operative Visible to this operative. Subtract 1 from its APL. This operative cannot perform this action if it has a Conceal order or if it is within Engagement Range of an enemy operative."
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Targets aren't obscured", "Remove 1APL from enemy (engaged)"]
    },
    {
        id: "operative9",
        image: Marksman,
        operativeName: "MARKSMAN",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 7,
        Weapons: [
            {
                weaponName: "Marksman Rail Rifle - standard",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "4/4",
                SR: "AP1, Lethal 5+",
                Crit: "MW2"
            },
            {
                weaponName: "Marksman Rail Rifle Dart - Round",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "3+",
                D: "3/3",
                SR: "AP1, Silent",
                Crit: "MW2"
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "2/3",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [
            {
                name: "Inertial Dampener ",
                detail: "Each time this operative performs an Overwatch action, for that action's shooting attack, do not worsen the Ballistic Skill characteristic of its marksman rail rifle as a result of performing an Overwatch action."
            }
        ],
        UniqueActions: [

        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Better overwatch"]
    },
    {
        id: "operative10",
        image: WeaponsEx,
        operativeName: "WEAPONS EXPERT",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 7,
        Weapons: [
            {
                weaponName: "Rail Rifle",
                weaponIcon: rangedIcon,
                A: 4,
                BS: "4+",
                D: "4/4",
                SR: "AP1, Lethal 5+",
                Crit: "MW2"
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 3,
                BS: "5+",
                D: "2/3",
                SR: "-",
                Crit: "-"
            }
        ],
        Abilities: [

        ],
        UniqueActions: [

        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: [""]
    },
];

const Card = ({ name, image, wounds, M, APL, GA, DF, SV, Weapons, Notes, id }) => {




    const [selectedValue, setSelectedValue] = useState(<div className="equipmentTriangle"></div>);
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleValueSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };







    const handleClick = () => {
        $('.operativeCard').addClass("invisible");
        setTimeout(() => $('.operativeCard').addClass("hidden"), 125);
        setTimeout(() => $("#" + id).removeClass("hidden"), 125);
        setTimeout(() => $("#" + id).removeClass("invisible"), 250);
        $('.dashboard').addClass("hidden")
    };

    const [currentMove, setMove] = useState(M);

    const [currentWound, setWound] = useState(wounds);
    const handleDecreaseWound = () => {
        setWound((prevWound) => prevWound - 1);
        if (currentWound - 1 < (wounds / 2)) {
            console.log('slowed');
            $(`[name='${id}']`).addClass("slowed");
            setMove((prevmov) => 1);
            $(`[name='${id}']`).children().eq(2).addClass("grayscale");
            $(`[name='${id}']`).children().eq(0).children().eq(0).addClass("grayscale grayborder");
            $(`[name='${id}']`).children().eq(6).addClass("grayscale");
            $(`[name='${id}']`).children().eq(6).children().eq(0).addClass("grayscale");
        }
        if (currentWound - 1 === 0) {
            $(`[name='${id}']`).addClass("dead");
        }
    };

    const handleIncreaseWound = () => {
        setWound((prevWound) => wounds);
        $(`[name='${id}']`).removeClass("dead");
        $(`[name='${id}']`).removeClass("slowed");
        setMove((prevmov) => M);
        $(`[name='${id}']`).children().eq(2).removeClass("grayscale");
        $(`[name='${id}']`).children().eq(0).children().eq(0).removeClass("grayscale grayborder");
        $(`[name='${id}']`).children().eq(6).removeClass("grayscale");
        $(`[name='${id}']`).children().eq(6).children().eq(0).removeClass("grayscale");
    };

    return <div name={id} className="operativeCard">
        <div className="imageName">
            <div className="operativeImageHolder">
                <img className="operativeImage" src={image} alt="" onClick={handleIncreaseWound} />
            </div>
            <div className="nameNwounds">
                <h1>{name}</h1>
                <h2 onClick={handleDecreaseWound}>{currentWound}</h2>
            </div>
        </div>
        <div className="woundsBar">
        </div>
        <div className="stats" onClick={handleClick}>
            <div className="statName">M</div>
            <div className="statName">APL</div>
            <div className="statName">GA</div>
            <div className="statName">DF</div>
            <div className="statName">SV</div>
        </div>
        <div className="statValues" onClick={handleClick}>
            <div className="statValue movement">{currentMove}<div className="circle"></div></div>
            <div className="statValue">{APL}</div>
            <div className="statValue">{GA}</div>
            <div className="statValue">{DF}</div>
            <div className="statValue">{SV}</div>
        </div>
        <div className="weaponsList" onClick={handleClick}>
            {Weapons.map(weapon => (
                <div className="weapons">
                    <div className="weaponName"><img className="attackIcon" src={weapon.weaponIcon} alt="" />{weapon.weaponName}</div>
                </div>
            ))}
        </div>
        <div className="notesArea" onClick={handleClick}>
            <p>{Notes[0]}<br /><br />{Notes[1]}</p>
        </div>
        <div className="dropdown equipmentLine">
            <div className="dropdown-btn" onClick={handleDropdownToggle}>
                {selectedValue}
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdownOption" onClick={() => handleValueSelect(<div className="equipmentTriangle"></div>)}><div className="equipmentTriangleDown"></div></div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('HIGH-INTENSITY MARKERLIGHT')}>
                        HIGH-INTENSITY MARKERLIGHT (2EP)
                    </div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('CLIMBING EQUIPMENT')}>
                        CLIMBING EQUIPMENT (1EP)
                    </div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('FUSION GRENADE')}>
                        FUSION GRENADE (4EP)
                    </div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('PHOTON GRENADE')}>
                        PHOTON GRENADE (2EP)
                    </div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('DRONE REPAIR KIT')}>
                        DRONE REPAIR KIT (2EP)
                    </div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('TARGET ANALYSIS OPTIC')}>
                        TARGET ANALYSIS OPTIC (2EP)
                    </div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('EMP GRENADE')}>
                        EMP GRENADE (2EP)
                    </div>
                    <div className="dropdownOption" onClick={() => handleValueSelect('ORBITAL SURVEY UPLINK')}>
                        ORBITAL SURVEY UPLINK (3EP)
                    </div>
                </div>
            )}
        </div>





    </div>;
};

const CardLarge = ({ name, image, wounds, M, APL, GA, DF, SV, Weapons, Abilities, UniqueActions, id }) => {
    const handleClickLarge = () => {
        setTimeout(() => $('.operativeCard').removeClass("invisible"), 250);
        setTimeout(() => $('.operativeCard').removeClass("hidden"), 125);
        $('.operativeCardLarge').addClass("invisible");
        setTimeout(() => $('.operativeCardLarge').addClass("hidden"), 125);
        setTimeout(() => $('.dashboard').removeClass("hidden"), 250);
    };

    const operativeActivated = () => {
        console.log(id);
        $(`[name='${id}']`).addClass("activated");
    }

    return <div id={id} className="operativeCardLarge hidden invisible" onClick={handleClickLarge}>
        <div className="largeCardSections">
            <div className="nameSection">{name}</div>
            <div className="imageSection"><img className="operativeImageLarge" src={image} alt="" /></div>
            <div className="statsSection">
                <div className="statsLarge orange">
                    <div className="statNameLarge">M</div>
                    <div className="statNameLarge">APL</div>
                    <div className="statNameLarge">GA</div>
                </div>
                <div className="statsLarge">
                    <div className="statNameLarge movement">{M}<div className="circle"></div></div>
                    <div className="statNameLarge">{APL}</div>
                    <div className="statNameLarge">{GA}</div>
                </div>
                <div className="statsLarge orange">
                    <div className="statNameLarge">DF</div>
                    <div className="statNameLarge">SV</div>
                    <div className="statNameLarge">W</div>
                </div>
                <div className="statsLarge">
                    <div className="statNameLarge">{DF}</div>
                    <div className="statNameLarge">{SV}</div>
                    <div className="statNameLarge">{wounds}</div>
                </div>
            </div>
        </div>
        <div className="headerBar">
            <div className="headerWeapon">Weapon</div>
            <div className="headerSkill">A</div>
            <div className="headerSkill">BS/WS</div>
            <div className="headerD">D</div>
            <div className="headerSR">SR</div>
            <div className="headerCrit">!</div>
        </div>

        <div className="weaponsList">
            {Weapons.map(weapon => (
                <div className="weaponsLarge">
                    <div className="weaponNameLarge headerWeapon"><img className="attackIconLarge" src={weapon.weaponIcon} alt="" />{weapon.weaponName}</div>
                    <div className="headerSkill oswald">{weapon.A}</div>
                    <div className="headerSkill oswald">{weapon.BS}</div>
                    <div className="headerD oswald">{weapon.D}</div>
                    <div className="headerSR oswald">{weapon.SR}</div>
                    <div className="headerCrit oswald">{weapon.Crit}</div>
                </div>
            ))}
        </div>

        <div className="abilitiesUniqueActions">
            <div className="abilities">
                <div className="AUTitle">ABILITIES</div>
                {Abilities.map(ability => (
                    <div className="ability"><b>{ability.name}</b>{ability.detail}</div>
                ))}
            </div>
            <div className="abilities">
                <div className="AUTitle">UNIQUE ACTIONS</div>
                {UniqueActions.map(UniqueActions => (
                    <div className="ability"><b>{UniqueActions.name}</b>{UniqueActions.detail}</div>
                ))}
            </div>
        </div>
        <div className="activateButton" onClick={operativeActivated}>ACTIVATE</div>
    </div>;
};

function Grid() {

    return (
        <div>
            <div id="operativesGrid">
                {operativesArray.map((card) => (
                    <Card id={card.id} name={card.operativeName} type={card.type} image={card.image} wounds={card.W} M={card.M} APL={card.APL} GA={card.GA} DF={card.DF} SV={card.SV} Weapons={card.Weapons} Notes={card.Notes} />
                ))}
                {operativesArray.map((cardLarge) => (
                    <CardLarge id={cardLarge.id} name={cardLarge.operativeName} type={cardLarge.type} image={cardLarge.image} wounds={cardLarge.W} M={cardLarge.M} APL={cardLarge.APL} GA={cardLarge.GA} DF={cardLarge.DF} SV={cardLarge.SV} Weapons={cardLarge.Weapons} Notes={cardLarge.Notes} Abilities={cardLarge.Abilities} UniqueActions={cardLarge.UniqueActions} />
                ))}
            </div>

        </div>
    );
}

export default Grid;