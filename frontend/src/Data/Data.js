// Sidebar imports

import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
//import img1 from "../imgs/img1.png";
import robot from "../imgs/robot.svg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,// Agrega una clase para el color rojo
    heading: "Panel",
    Path: '/',
  },
  {
    icon: UilChart,
    heading: "Estadisticas",
    Path: '/estadisticas',
  },
//    {
//      icon: UilClipboardAlt,
//    heading: "Orders",
//    Path: '/estadisticas',
//  },
 {
   icon: UilUsersAlt,
   heading: "Evaluaciones",
   Path: '/',
 },
 {
   icon: UilPackage,
   heading: 'Ayuda',
   Path: '/estadisticas',
 },
];


// Analytics Cards Data
export const cardsData = [
  {
    title: "TDC NTB",
    color: {
      backGround: "linear-gradient(25deg, #a1cca5, #a1cca5)", // Aquí se cambia el gradiente por el color #a1cca5
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 90],
      }
    ],
  },


  {
    title: "TDC ETB",
    color: {
      backGround: "linear-gradient(25deg, #a1cca5, #a1cca5)", // Aquí se cambia el gradiente por el color #a1cca5
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    //Aquí se cambia el valor de la ruedita de la gráfica
    barValue: 93.4,
    //Aquí se cambia el valor que aparece en cada carta :3 
    value: "93%",
    png: UilClipboardAlt,
    //png: UilMoneyWithdrawal,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [ 89, 75, 56],
      },
    ],
  },
  {
    title: "BT",
    color: {
      backGround: "linear-gradient(25deg, #9a031e, #9a031e)", // Aquí se cambia el gradiente por el color #9a031e
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
//Aquí se cambia el valor de la ruedita de la gráfica
barValue: 87.2,
//Aquí se cambia el valor que aparece en cada carta :3 
value: "87%",
png: UilClipboardAlt,
//png: UilMoneyWithdrawal,
series: [
  {
    name: "Meta",
    data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
  },
  {
    name: "Avance",
    data: [92, 87, 40],
    },
    ],
  },
  {
    title: "L2",
    color: {
      backGround: "linear-gradient(25deg, #9a031e, #9a031e)", // Aquí se cambia el gradiente por el color #9a031e
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93,
    value: "93%",
    png: UilClipboardAlt,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
      }
    ],
  },
  {
    title: "Nómina",
    color: {
      backGround: "linear-gradient(25deg, #5dc1b9, #5dc1b9)", // Aquí se cambia el gradiente por el color #5dc1b9

      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
      }
    ],
  },
  {
    title: "Personales",
    color: {
      backGround: "linear-gradient(25deg, #5dc1b9, #5dc1b9)", // Aquí se cambia el gradiente por el color #5dc1b9
      boxShadow: "0px 10px 20px 0px #FCEAC9",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
      }
    ],
  },
  {
    title: "Seguros",
    color: {
      backGround: "linear-gradient(25deg, #e42d40, #e42d40)", // Aquí se cambia el gradiente por el color #e42d40
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93.4,
    value: "93%",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "Meta",
        data: [98, 80, 95, 99, 89, 87, 98, 99, 89, 87, 98,88, 89, 95],
      },
      {
        name: "Avance",
        data: [92, 87, 40],
      }
    ],
  }
];

//AQUI PONEMOS EL MENSAJE DEL ROBOT :3 
export const UpdatesData = [
  {
    img: robot,
    mensaje: "Si tienes alguna duda o sugerencia sobre éste Dashboard, escribenos y el equipo de Robotics te ayudará.",
  },
  
];
// Recent Update Card Data
/*export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
*/

/*
export const UpdatesData = [
  {
    img: robot,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  
];
*/
