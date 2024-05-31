import { FaDog } from "react-icons/fa"
import { GiSittingDog } from "react-icons/gi";
import { BiSolidDog } from "react-icons/bi";
import { LuDog } from "react-icons/lu";
const MenuItemList =[

    {
        id:0,
        title:"Hound",
        link:"/breed/hound",
        icon:<FaDog/>,
    },
    {
        id:2,
        title:"Basenji",
        link:"/breed/basenji",
        icon:<GiSittingDog/>,
    },
    {
        id:3,
        title:"Bulldog",
        link:"/breed/bulldog",
        icon:<BiSolidDog/>,
    },
    {
        id:4,
        title:"Chihuahua",
        link:"/breed/chihuahua",
        icon:<LuDog/>,
    },

]

export {MenuItemList}


