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

const operativesArray = [
    {
        id: "8",
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
                name: "Holographic Readout ",
                detail: "Once per battle, when a friendly PATHFINDER operative (excluding a DRONE operative) is activated within ■ of and is Visible to this operative, this operative can use this ability. If it does, until the end of the friendly PATHFINDER operative's activation, it can perform one mission action for one less AP (to a minimum of 0AP)."
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
        id: 1,
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
                SR: ",",
                Crit: ""
            },
            {
                weaponName: "Fusion Grenade",
                weaponIcon: rangedIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Pulse Carbine",
                weaponIcon: rangedIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ""
    },
    {
        id: 2,
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
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Bionic Arm",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: [""]
    },
    {
        id: 3,
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
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Can add 1APL to someone else"]
    },
    {
        id: 4,
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
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["During deployment - set up drone in killzone.", "Activate drone for free"]
    },

    {
        id: 6,
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
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Ram",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Free Recon option at start", "Can activate operative with rerolls"]
    },
    {
        id: 7,
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
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Shieldy boy"]
    },

    {
        id: 9,
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
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Targets aren't obscured", "Remove 1APL from enemy (engaged)"]
    },
    {
        id: 5,
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
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Marksman Rail Rifle Dart - Round",
                weaponIcon: rangedIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Better overwatch"]
    },
    {
        id: 10,
        image: WeaponsEx,
        operativeName: "WEAPONS EXPERT A",
        type: "Type 1",
        M: 3,
        APL: 2,
        GA: 1,
        DF: 3,
        SV: "5+",
        W: 7,
        Weapons: [
            {
                weaponId: 1,
                weaponName: "Rail Rifle",
                weaponIcon: rangedIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            },
            {
                weaponId: 2,
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
                SR: "",
                Crit: ""
            }
        ],
        Abilities: [
            {
                name: "ability name",
                detail: "ability detail"
            }
        ],
        UniqueActions: [
            {
                name: "Unique action ",
                detail: "action detail"
            },
            {
                name: "Unique action ",
                detail: "action detail"
            }
        ],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: [""]
    },
];



const Card = ({ name, image, wounds, M, APL, GA, DF, SV, Weapons, Notes, id }) => {
    const handleClick = () => {
        $('.operativeCard').addClass("invisible");
        setTimeout(() => $('.operativeCard').addClass("hidden"), 125);

        setTimeout(() => $("#" + id).removeClass("hidden"), 125);
        setTimeout(() => $("#" + id).removeClass("invisible"), 250);
    };

    return <div name={id} className="operativeCard" onClick={handleClick}>
        <div className="imageName">
            <div className="operativeImageHolder">
                <img className="operativeImage" src={image} alt="" />
            </div>
            <div className="nameNwounds">
                <h1>{name}</h1>
                <h2>{wounds}</h2>
            </div>
        </div>
        <div className="woundsBar">
        </div>
        <div className="stats">
            <div className="statName">M</div>
            <div className="statName">APL</div>
            <div className="statName">GA</div>
            <div className="statName">DF</div>
            <div className="statName">SV</div>
        </div>
        <div className="statValues">
            <div className="statValue movement">{M}<div className="circle"></div></div>
            <div className="statValue">{APL}</div>
            <div className="statValue">{GA}</div>
            <div className="statValue">{DF}</div>
            <div className="statValue">{SV}</div>
        </div>
        <div className="weaponsList">
            {Weapons.map(weapon => (
                <div className="weapons">
                    <div className="weaponName"><img className="attackIcon" src={weapon.weaponIcon} alt="" />{weapon.weaponName}</div>
                </div>
            ))}
        </div>
        <div className="notesArea">
            <p>{Notes[0]}<br /><br />{Notes[1]}</p>
        </div>
    </div>;
};

const CardLarge = ({ name, image, wounds, M, APL, GA, DF, SV, Weapons, Abilities, UniqueActions, id }) => {
    const handleClickLarge = () => {


        setTimeout(() => $('.operativeCard').removeClass("invisible"), 250);
        setTimeout(() => $('.operativeCard').removeClass("hidden"), 125);

        $('.operativeCardLarge').addClass("invisible");
        setTimeout(() => $('.operativeCardLarge').addClass("hidden"), 125);
    };

    const operativeActivated = () => {
        console.log(id);
        $("[name=" + "'" + id + "']").addClass("activated");
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