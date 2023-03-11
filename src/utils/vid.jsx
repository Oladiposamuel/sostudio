import React from "react";
import Advert from '../vid/Advert-trim-720p.mp4';
import Billboard from '../vid/Billboard-trim-720p.mp4';
import Black from '../vid/Black-girl-trim-720p.mp4';
import Landscape from '../vid/Landscape-trim-720p.mp4';
import Photoshoot from '../vid/Photoshoot-trim-720p.mp4';
import White from '../vid/White-girl-trim-720p.mp4';
import WhiteMobile from '../vid/White-girl-trim-mobile.mp4';
import BillboardMobile from '../vid/Billboard-trim-mobile.mp4';
import PhotoshootMobile from '../vid/Photoshoot-trim-mobile.mp4';
import AdvertMobile from '../vid/Advert-trim-mobile.mp4';


export const vidData = [
    {
        "id": 1,
        "name": "Advert",
        "cover": Advert,
        "coverMobile" : AdvertMobile
    },
    
    {
        "id": 2,
        "name": "Billboard",
        "cover": Billboard,
        "coverMobile" : BillboardMobile
    },

    // {
    //     "id": 3,
    //     "name": "Black",
    //     "cover": Black,
    // },

    // {
    //     "id": 4,
    //     "name": "Landscape",
    //     "cover": Landscape,
    // },

    {
        "id": 3,
        "name": "Photoshoot",
        "cover": Photoshoot,
        "coverMobile" : PhotoshootMobile
    },

    {
        "id": 4,
        "name": "White",
        "cover": White,
        "coverMobile" : WhiteMobile
    }
]