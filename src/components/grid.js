import "../Style/grid.css"
import operativeOne from '../images/TauGuy.jpeg';
import meleeIcon from '../images/weptypeM.png';
import rangedIcon from '../images/weptypeR.png';

const operativesArray = [
    {
        id: 8,
        image: operativeOne,
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
                A: 1,
                BS: 1,
                D: 1,
            },
            {
                weaponName: "Bonding Knife (Bal)",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            },
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Can give engaged operatives a free dash.", "Operatives within square and visible get free mission action."]
    },
    {
        id: 1,
        image: operativeOne,
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
                A: 1,
                BS: 1,
                D: 1,
            },
            {
                weaponName: "Fusion Grenade",
                weaponIcon: rangedIcon,
                A: 1,
                BS: 1,
                D: 1,
            },
            {
                weaponName: "Pulse Carbine",
                weaponIcon: rangedIcon,
                A: 1,
                BS: 1,
                D: 1,
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ""
    },
    {
        id: 2,
        image: operativeOne,
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
            },
            {
                weaponName: "Bionic Arm",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: [""]
    },
    {
        id: 3,
        image: operativeOne,
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
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Can add 1APL to someone else"]
    },
    {
        id: 4,
        image: operativeOne,
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
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["During deployment - set up drone in killzone.", "Activate drone for free"]
    },

    {
        id: 6,
        image: operativeOne,
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
            },
            {
                weaponName: "Ram",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Free Recon option at start", "Can activate operative with rerolls"]
    },
    {
        id: 7,
        image: operativeOne,
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
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Shieldy boy"]
    },

    {
        id: 9,
        image: operativeOne,
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
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Targets aren't obscured", "Remove 1APL from enemy (engaged)"]
    },
    {
        id: 5,
        image: operativeOne,
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
            },
            {
                weaponName: "Marksman Rail Rifle Dart - Round",
                weaponIcon: rangedIcon,
                A: 1,
                BS: 1,
                D: 1,
            },
            {
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: ["Better overwatch"]
    },
    {
        id: 10,
        image: operativeOne,
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
            },
            {
                weaponId: 2,
                weaponName: "Fists",
                weaponIcon: meleeIcon,
                A: 1,
                BS: 1,
                D: 1,
            }
        ],
        UniqueActions: ["Action 1", "Action 2"],
        KeyWords: ["Keyword 1", "Keyword 2"],
        Notes: [""]
    },
];

const Card = ({ name, image, wounds, M, APL, GA, DF, SV, Weapons, Notes }) => {
    return <div className="operativeCard">
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





function Grid() {
    return (
        <div id="operativesGrid">
            {operativesArray.map((card) => (
                <Card key={card.id} name={card.operativeName} type={card.type} image={card.image} wounds={card.W} M={card.M} APL={card.APL} GA={card.GA} DF={card.DF} SV={card.SV} Weapons={card.Weapons} Notes={card.Notes} />
            ))}
        </div>
    );
}

export default Grid;