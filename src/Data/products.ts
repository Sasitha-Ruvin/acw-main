import facewash from '../Images/facewash.jpg'
import nightcream from '../Images/Night cream.webp'
import daycream from '../Images/Day cream (2).jpg'
import antiAcne from '../Images/anti acne.jpg'
import tumeric from '../Images/turmeric_cream.png'
import roseT from '../Images/Rose T and Aloevera.jpg'
import shampoo from '../Images/hair elixir.jpg'
import conditioner from '../Images/conditioner.jpg'
import charcoal from '../Images/charcoal-face-pack.png'
import nightLotion from '../Images/night time body lotion.jpg'
import dayLotion from '../Images/Daytime bodylotion.jpg'
import coffee from '../Images/cof-wal-facial-scrub.png'
import suncream from '../Images/sun shielding cream.jpg'
import antiBlemish from '../Images/trending3.png'

export interface Product{
    id:number;
    name:string;
    price:number;
    image:string
}

export const products:Product[]=[
    {
        id:1,
        name:"Rose T and Aloevera Body Lotion",
        price:690,
        image:roseT
    },
    {
        id:2,
        name:"Rejuvenating and Brightning Night Cream",
        price:2850,
        image:nightcream
    },
    {
        id:3,
        name:"Radiant & Protective Day Cream",
        price:2800,
        image:daycream
    },
    {
        id:4,
        name:"Golden Radiance Tumeric Cream",
        price:2900,
        image:tumeric
    },
    {
        id:5,
        name:"Radiant & Protective Brightening Daytime Body Lotion",
        price:3150,
        image:dayLotion
    },
    {
        id:6,
        name:"Radiant & Protective Brightening Night time Body Lotion",
        price:3300,
        image:nightLotion
    },
    {
        id:7,
        name:"Golden Radiance Fairness Face Wash",
        price:600,
        image:facewash
    },
    {
        id:8,
        name:"PIMPLE CLEAR ANTI- ACNE MINT FACE WASH",
        price:600,
        image:antiAcne
    },
    {
        id:9,
        name:"SMOOTH EXFOLIATING COFFEE & WALNUT FACIAL SCRUB",
        price:1699,
        image:coffee
    },
    {
        id:10,
        name:"BRIGHTENING & REJUVINATING ACTIVATED CHARCOAL PACK",
        price:1600,
        image:charcoal
    },
    {
        id:11,
        name:"ROSE T & ALOE VERA DAY AND NIGHT BODY LOTION",
        price:690,
        image:roseT
    },
    {
        id:12,
        name:"SHIELDING 2 IN 1 SUNCREAM",
        price:1100,
        image:suncream
    },
    {
        id:13,
        name:"ANTI-BLEMISH PIGMENTATION CONTROL CREAM",
        price:3850,
        image:antiBlemish
    },
    {
        id:14,
        name:"REVIVE & RADIANCE HAIR ELIXIR SHAMPOO",
        price:740,
        image:shampoo
    }
]