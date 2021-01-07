import React, { useEffect, useState } from 'react';

import {recemendations} from '../../../backend/apiconnector';
// import './inputSearch.css';
// Delete after rendering from backend
import temp from '../../../images/newProfile/az-temp-icon.png';



function InputSearch({ setCompanyName, setCompanyImg, initValue }) {
    const [input, setInput] = useState('');
    const [blur, setBlur] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const [loading,setLoading] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true);
    
        async function recemendation() {
          var list = await recemendations();
        //   var arr = list.map(async val => {
        //     return {...val}
        //   })
        if(list === "Error")
        {
            console.log("error");
            return
        }
          Promise.all(list).then(res => {
            setData(res);
            setLoading(false);
          })
        }
        recemendation()
      }, []);
    
      useEffect(() => {
        console.log(data);
      }, [data]);
    
    useEffect(() => {
        setCompanyName(initValue)
        setInput(initValue)
        console.log(initValue)
    }, [initValue])

    const handleInput = async(e) => {
        setInput(e.target.value);
        const value = e.target.value;
        if(loading)
        return;
        const suggetionsArr = data.filter(film => film.title.toLowerCase().startsWith(value.toLowerCase()));
        setSuggestions(suggetionsArr);
        if(value === '') {
            setSuggestions([]);
        }
        
        // Used to check if input has an image
        const tf = data.filter(film => film.title.toLowerCase() === value.toLowerCase());
        if(tf.length > 0) {
            setCompanyName(tf[0].title);
            setCompanyImg(tf[0].img);
        } else {
            setCompanyName(value);
            setCompanyImg(null);
        }
    }

    const handleClick = (title, img) => {
        setInput(title);
        setCompanyName(title);
        setCompanyImg(img);
        setBlur(true);
    }

    return (
        <div className='inputSearch'>
            <input 
                type='text' 
                onChange={handleInput} 
                onFocus={() => setBlur(false)}                 
                value={input} 
                placeholder='Example: Google, Facebook...' 
            />
            { suggestions.length > 0 && !blur &&
                <ul  style={{
                    position : "relative",
                    maxWidth : "100%",
                    width : "100%",
                    // height : "190px",
                    maxHeight : "190px"
                }}>
                    {suggestions?.map(films => (
                        <li onClick={() => handleClick(films.title, films.img)}> 
                            <img src={films.img} alt='imggg' style={{width: '25px', borderRadius: '10px'}} />
                            {films.title} 
                        </li>
                        ))}
                </ul>
            }
        </div>
    )
}

export const top100Films = [
    { title: 'The Shawshank Redemption', img: temp },
    { title: 'The Godfather', img: temp },
    { title: 'The Godfather: Part II', img: temp },
    { title: 'The Dark Knight', img: temp },
    { title: '12 Angry Men', img: temp },
    { title: "Google", img: temp },
    { title: 'Pulp Fiction', img: temp },
    { title: 'The Lord of the Rings: The Return of the King', img: temp },
    { title: 'The Good, the Bad and the Ugly', img: temp },
    { title: 'Fight Club', img: temp }
]

//  export const top100Films = recemendations();
// [
//         {
//             "title": "Hoozing",
//             "img": "https://i.ibb.co/N6Y2J6f/Hoozing.jpg"
//         },
//         {
//             "title": "Shuga",
//             "img": "https://i.ibb.co/DgVy1m8/Shuga.png"
//         },
//         {
//             "title": "Finin",
//             "img": "https://i.ibb.co/grbHJsP/Finin.png"
//         },
//         {
//             "title": "StyleDotMe",
//             "img": "https://i.ibb.co/vDvz2Mj/Style-Dot-Me.png"
//         },
//         {
//             "title": "Zopnik",
//             "img": "https://i.ibb.co/gTWR1CG/zopnik.png"
//         },
//         {
//             "title": "Walrus",
//             "img": "https://i.ibb.co/JdTcrVh/Walrus.png"
//         },
//         {
//             "title": "PumPumPum",
//             "img": "https://i.ibb.co/k6mrSyn/pumpumpum.png"
//         },
//         {
//             "title": "Mastree",
//             "img": "https://i.ibb.co/SwVsZq3/Mastree.jpg"
//         },
//         {
//             "title": "Editorji",
//             "img": "https://i.ibb.co/sp46pTm/Editorji.png"
//         },
//         {
//             "title": "Gobbly",
//             "img": "https://i.ibb.co/YcH8vNH/Gobbly.jpg"
//         },
//         {
//             "title": "MyanCare",
//             "img": "https://i.ibb.co/VVjZt5L/Myancare.jpg"
//         },
//         {
//             "title": "Seez",
//             "img": "https://i.ibb.co/hWhDhfm/seez.png"
//         },
//         {
//             "title": "Tebengan",
//             "img": "https://i.ibb.co/CBbRQC7/Tebengan.png"
//         },
//         {
//             "title": "Sociolla",
//             "img": "https://i.ibb.co/YNHPBQq/Sociolla.png"
//         },
//         {
//             "title": "Limbix",
//             "img": "https://i.ibb.co/yVFV8Lj/Limbix.png"
//         },
//         {
//             "title": "Cien",
//             "img": "https://i.ibb.co/jRfjnng/Cien.jpg"
//         },
//         {
//             "title": "Muso",
//             "img": "https://i.ibb.co/fvXC1FB/Muso.png"
//         },
//         {
//             "title": "Satori Cyber",
//             "img": "https://i.ibb.co/1qxvmnQ/Satori.jpg"
//         },
//         {
//             "title": "Dropee",
//             "img": "https://i.ibb.co/tPnS5nN/dropee.png"
//         },
//         {
//             "title": "Omnichat",
//             "img": "https://i.ibb.co/vct2JLy/Omnichat.png"
//         },
//         {
//             "title": "Spiceware",
//             "img": "https://i.ibb.co/Th4RxPs/Spiceware.jpg"
//         },
//         {
//             "title": "Prisync",
//             "img": "https://i.ibb.co/09grVxm/prisync.jpg"
//         },
//         {
//             "title": "TendoPay",
//             "img": "https://i.ibb.co/2gzrJyq/TendoPay.png"
//         },
//         {
//             "title": "PalmPay",
//             "img": "https://i.ibb.co/qmcJ6dR/PalmPay.jpg"
//         },
//         {
//             "title": "Loop",
//             "img": "https://i.ibb.co/Pgn19Fc/Loop-Freight.png"
//         },
//         {
//             "title": "Vonder",
//             "img": "https://i.ibb.co/Q8KTfqT/Vonder.jpg"
//         },
//         {
//             "title": "Swvl",
//             "img": "https://i.ibb.co/n18WJLr/swvl.jpg"
//         },
//         {
//             "title": "QuiverVision",
//             "img": "https://i.ibb.co/7n7PBM4/Quiver-Vision.png"
//         },
//         {
//             "title": "Contxtful",
//             "img": "https://i.ibb.co/zb5p32t/Contxtful.png"
//         },
//         {
//             "title": "mPharma",
//             "img": "https://i.ibb.co/Q8gJfPY/mPharma.png"
//         },
//         {
//             "title": "SEND",
//             "img": "https://i.ibb.co/3Y0GsK5/SEND-Freight.png"
//         },
//         {
//             "title": "Pickar",
//             "img": "https://i.ibb.co/YR8nwBt/pickar.jpg"
//         },
//         {
//             "title": "Mostly AI",
//             "img": "https://i.ibb.co/M53WWQx/MOSTLY-AI.jpg"
//         },
//         {
//             "title": "Datagran",
//             "img": "https://i.ibb.co/xqKfZv8/datagran.jpg"
//         },
//         {
//             "title": "Profes",
//             "img": "https://i.ibb.co/fk0ngSM/Profes.png"
//         },
//         {
//             "title": "Amwalcom",
//             "img": "https://i.ibb.co/T1W3Ctq/amwalcom.png"
//         },
//         {
//             "title": "Rafeeq",
//             "img": "https://i.ibb.co/7SkF0m9/Rafeeq.png"
//         },
//         {
//             "title": "ARVORE",
//             "img": "https://i.ibb.co/fv0XS7D/ARVORE.png"
//         },
//         {
//             "title": "LeapMind",
//             "img": "https://i.ibb.co/kGwZWQW/Leap-Mind-Inc.png"
//         },
//         {
//             "title": "Bambinotes",
//             "img": "https://i.ibb.co/VQJVvGQ/Bambinotes.png"
//         },
//         {
//             "title": "Mubawab",
//             "img": "https://i.ibb.co/zh9QZRq/Mubawab.jpg"
//         },
//         {
//             "title": "Shezlong",
//             "img": "https://i.ibb.co/kMSzBQt/Shezlong.jpg"
//         },
//         {
//             "title": "Thobi",
//             "img": "https://i.ibb.co/ZhyVmPc/Thobi.png"
//         },
//         {
//             "title": "Lean Technologies",
//             "img": "https://i.ibb.co/k3xHT04/Lean-Tchnologies.png"
//         },
//         {
//             "title": "Gamiphy",
//             "img": "https://i.ibb.co/TmKXRP1/Gamiphy.png"
//         },
//         {
//             "title": "Kenz",
//             "img": "https://i.ibb.co/P45sH5D/kenz.jpg"
//         },
//         {
//             "title": "Receet",
//             "img": "https://i.ibb.co/BBYFMnh/Receet.png"
//         },
//         {
//             "title": "Eyewa",
//             "img": "https://i.ibb.co/Qv59BcP/Eyewa.png"
//         },
//         {
//             "title": "Intrro",
//             "img": "https://i.ibb.co/QHCZ3nY/Intrro.png"
//         },
//         {
//             "title": "Freterium",
//             "img": "https://i.ibb.co/wyQYJC0/freterium.png"
//         },
//         {
//             "title": "joi Gifts",
//             "img": "https://i.ibb.co/rvZDF8b/joi-Gifts.png"
//         },
//         {
//             "title": "Hachium",
//             "img": "https://i.ibb.co/1QfX9g7/Hachium.jpg"
//         },
//         {
//             "title": "Sibly",
//             "img": "https://i.ibb.co/ggv8rcb/sibly.png"
//         },
//         {
//             "title": "Sary",
//             "img": "https://i.ibb.co/pzSZk0q/Sary.png"
//         },
//         {
//             "title": "Clara Technologies",
//             "img": "https://i.ibb.co/SR8j6p9/Clara-Technologies.png"
//         },
//         {
//             "title": "KoolSkools",
//             "img": "https://i.ibb.co/LxXHnMW/Koolskools.png"
//         },
//         {
//             "title": "Khazna",
//             "img": "https://i.ibb.co/wzyqYhF/Khazna.jpg"
//         },
//         {
//             "title": "Administrate",
//             "img": "https://i.ibb.co/5TSTY4C/Administrate.jpg"
//         },
//         {
//             "title": "STARZPLAY",
//             "img": "https://i.ibb.co/58HVS3J/Starzplay.png"
//         },
//         {
//             "title": "STEP",
//             "img": "https://i.ibb.co/R6D4ny0/STEP.png"
//         },
//         {
//             "title": "Union",
//             "img": "https://i.ibb.co/3cD3xwt/Union.png"
//         },
//         {
//             "title": "Antwork",
//             "img": "https://i.ibb.co/Njp0GMr/Antwork.png"
//         },
//         {
//             "title": "í´ëž˜ìŠ¤101",
//             "img": "https://i.ibb.co/9N8kRVS/class101.jpg"
//         },
//         {
//             "title": "ImageVision",
//             "img": "https://i.ibb.co/tMS8zyK/Image-Vision.jpg"
//         },
//         {
//             "title": "Zype",
//             "img": "https://i.ibb.co/DYwmmTJ/zype.jpg"
//         },
//         {
//             "title": "Wangree Fresh",
//             "img": "https://i.ibb.co/ZKsRTkP/Wangree-Fresh.png"
//         },
//         {
//             "title": "NalaGenetics",
//             "img": "https://i.ibb.co/vLfsgr5/Nala-Genetics.png"
//         },
//         {
//             "title": "Theia",
//             "img": "https://i.ibb.co/f1K2WBZ/Theia.jpg"
//         },
//         {
//             "title": "Doctor Raksa",
//             "img": "https://i.ibb.co/7CDbwpD/Doctor-Raksa.png"
//         },
//         {
//             "title": "Taskworld",
//             "img": "https://i.ibb.co/NYxmmKX/taskworld.jpg"
//         },
//         {
//             "title": "Nimble",
//             "img": "https://i.ibb.co/m966Bmn/Nimble.png"
//         },
//         {
//             "title": "Eko",
//             "img": "https://i.ibb.co/hg6dT4M/eko.jpg"
//         },
//         {
//             "title": "Data Wow",
//             "img": "https://i.ibb.co/YRL9yNh/Data-Wow.png"
//         },
//         {
//             "title": "Andovar",
//             "img": "https://i.ibb.co/XZJstjB/Andovar.png"
//         },
//         {
//             "title": "MAQE",
//             "img": "https://i.ibb.co/RBMc8pj/MAQE.png"
//         },
//         {
//             "title": "ZINE",
//             "img": "https://i.ibb.co/JjHd9nJ/ZINE.png"
//         },
//         {
//             "title": "Travelbook",
//             "img": "https://i.ibb.co/S3t1F94/Travel-Book.png"
//         },
//         {
//             "title": "myPAT",
//             "img": "https://i.ibb.co/j8fFyrT/myPAT.jpg"
//         },
//         {
//             "title": "Gradeup",
//             "img": "https://i.ibb.co/WB5tDcK/Gradeup.png"
//         },
//         {
//             "title": "Wisesight",
//             "img": "https://i.ibb.co/S30JnPH/Wisesight.png"
//         },
//         {
//             "title": "Yellow.com",
//             "img": "https://i.ibb.co/V2z3Vg6/yellowc.png"
//         },
//         {
//             "title": "Morpheus Labs",
//             "img": "https://i.ibb.co/XyrwVmM/Morpheus-Labs.png"
//         },
//         {
//             "title": "Geeq",
//             "img": "https://i.ibb.co/SsF49zN/Geeq.jpg"
//         },
//         {
//             "title": "Beat",
//             "img": "https://i.ibb.co/jRTmZvS/Beat.png"
//         },
//         {
//             "title": "Clipchamp",
//             "img": "https://i.ibb.co/y6B0jWW/Clipchamp.png"
//         },
//         {
//             "title": "Homebase",
//             "img": "https://i.ibb.co/kHzm99k/homebase.png"
//         },
//         {
//             "title": "Tutumluanne",
//             "img": "https://i.ibb.co/L1FT1n7/Tutumluanne.png"
//         },
//         {
//             "title": "Waves",
//             "img": "https://i.ibb.co/FXsp3fb/Waves.jpg"
//         },
//         {
//             "title": "bTaskee",
//             "img": "https://i.ibb.co/Jc80DVy/bTaskee.png"
//         },
//         {
//             "title": "Finhay",
//             "img": "https://i.ibb.co/gvvPcD5/Finhay.png"
//         },
//         {
//             "title": "Mozper",
//             "img": "https://i.ibb.co/tckJPT0/Mozper.jpg"
//         },
//         {
//             "title": "Valify Solutions",
//             "img": "https://i.ibb.co/vXxP1mV/Valify-Solutions.png"
//         },
//         {
//             "title": "Travala.com",
//             "img": "https://i.ibb.co/T8RF853/Travala.png"
//         },
//         {
//             "title": "Logivan",
//             "img": "https://i.ibb.co/Snr90gY/logivan.jpg"
//         },
//         {
//             "title": "iSalon",
//             "img": "https://i.ibb.co/YXdYCDc/isalon.jpg"
//         },
//         {
//             "title": "Vibeji",
//             "img": "https://i.ibb.co/pbPWjT5/Vibeji.png"
//         },
//         {
//             "title": "Bizzi",
//             "img": "https://i.ibb.co/c6jyG9s/Bizzi.png"
//         },
//         {
//             "title": "Nugit",
//             "img": "https://i.ibb.co/Yc7gB0B/Nugit.png"
//         },
//         {
//             "title": "Female Daily",
//             "img": "https://i.ibb.co/vznRwvh/Female-Daily-Network.png"
//         },
//         {
//             "title": "Flatfile",
//             "img": "https://i.ibb.co/PmJqBqt/Flatfile-Inc.png"
//         },
//         {
//             "title": "TurtleTree Labs",
//             "img": "https://i.ibb.co/pztTZp0/Turtle-Tree-Labs.png"
//         },
//         {
//             "title": "Algomo",
//             "img": "https://i.ibb.co/HpkzyG7/Algomo.jpg"
//         },
//         {
//             "title": "Tictag.io",
//             "img": "https://i.ibb.co/NmzfHgx/Tictagio.png"
//         },
//         {
//             "title": "Taiger",
//             "img": "https://i.ibb.co/pzJjB9P/Taiger.png"
//         },
//         {
//             "title": "Accredify",
//             "img": "https://i.ibb.co/98zrsW0/Accredify.png"
//         },
//         {
//             "title": "ZigWay",
//             "img": "https://i.ibb.co/KKry2VC/ZigWay.jpg"
//         },
//         {
//             "title": "Impact Terra",
//             "img": "https://i.ibb.co/r4GnPQ3/Impact-Terra.png"
//         },
//         {
//             "title": "KyoPay Technologies",
//             "img": "https://i.ibb.co/S73ZYbR/Kyopay.jpg"
//         },
//         {
//             "title": "Flexible Pass",
//             "img": "https://i.ibb.co/k3ngHJf/Flexible-Pass.png"
//         },
//         {
//             "title": "Karzo",
//             "img": "https://i.ibb.co/G27SVy4/Karzo.png"
//         },
//         {
//             "title": "Better HR",
//             "img": "https://i.ibb.co/w0sq31x/Better-HR.png"
//         },
//         {
//             "title": "Tun Yat",
//             "img": "https://i.ibb.co/6wF2GNg/TunYat.png"
//         },
//         {
//             "title": "Goama",
//             "img": "https://i.ibb.co/jkQsqrC/Goama.png"
//         },
//         {
//             "title": "Mote Poh",
//             "img": "https://i.ibb.co/jwjvcSP/Motepoh.jpg"
//         },
//         {
//             "title": "Bilforon",
//             "img": "https://i.ibb.co/LvmGwz4/Bilforon.png"
//         },
//         {
//             "title": "Shuttle",
//             "img": "https://i.ibb.co/0p7HXZP/Shuttle.png"
//         },
//         {
//             "title": "wadiz",
//             "img": "https://i.ibb.co/PNBTSJ0/wadiz.jpg"
//         },
//         {
//             "title": "Return Box",
//             "img": "https://i.ibb.co/cbvQwz7/Return-Box.jpg"
//         },
//         {
//             "title": "Desilo",
//             "img": "https://i.ibb.co/zfFkCFh/Desilo.png"
//         },
//         {
//             "title": "ThingsFlow",
//             "img": "https://i.ibb.co/N13DNbm/Things-Flow.png"
//         },
//         {
//             "title": "elice",
//             "img": "https://i.ibb.co/r5sxskh/Elice.png"
//         },
//         {
//             "title": "Bayzat",
//             "img": "https://i.ibb.co/D8HN5P9/Bayzat.png"
//         },
//         {
//             "title": "Kerning Cultures",
//             "img": "https://i.ibb.co/5B66stL/Kerning-Cultures.png"
//         },
//         {
//             "title": "Sowt | ØµÙˆØª",
//             "img": "https://i.ibb.co/qgXxk4h/Sowt.png"
//         },
//         {
//             "title": "GoodsMart",
//             "img": "https://i.ibb.co/nPYbPyF/Goods-Mart.jpg"
//         },
//         {
//             "title": "Trella",
//             "img": "https://i.ibb.co/gWMVY3m/Trella.png"
//         },
//         {
//             "title": "Eventtus",
//             "img": "https://i.ibb.co/CVm8bwr/Eventtus.png"
//         },
//         {
//             "title": "Wyzetalk",
//             "img": "https://i.ibb.co/fQBSQWH/Wyzetalk.jpg"
//         },
//         {
//             "title": "Lyve",
//             "img": "https://i.ibb.co/jZyyZtK/Lyve.png"
//         },
//         {
//             "title": "ViaVii",
//             "img": "https://i.ibb.co/zHKrfCM/Viavii.png"
//         },
//         {
//             "title": "Little Thinking Minds",
//             "img": "https://i.ibb.co/D1GZQFf/Little-Thinking-Minds.png"
//         },
//         {
//             "title": "BuyBack Bazaar",
//             "img": "https://i.ibb.co/ZGtDMZb/Buy-Back-Bazaar.jpg"
//         },
//         {
//             "title": "Little Spoon",
//             "img": "https://i.ibb.co/RpBhpVg/Little-Spoon.jpg"
//         },
//         {
//             "title": "Datacultr",
//             "img": "https://i.ibb.co/SnP3KB9/datacultr.png"
//         },
//         {
//             "title": "Cera",
//             "img": "https://i.ibb.co/GVtLVBK/Cera.png"
//         },
//         {
//             "title": "Distichain",
//             "img": "https://i.ibb.co/H7FTz9n/Distichain.png"
//         },
//         {
//             "title": "ShipChain",
//             "img": "https://i.ibb.co/wcS2FWM/Ship-Chain.png"
//         },
//         {
//             "title": "PayMint",
//             "img": "https://i.ibb.co/946tM26/PayMint.jpg"
//         },
//         {
//             "title": "SkyHive",
//             "img": "https://i.ibb.co/mFxB6r6/skyhive.png"
//         },
//         {
//             "title": "Arthur AI",
//             "img": "https://i.ibb.co/9nBjbwz/Arthur-AI.png"
//         },
//         {
//             "title": "DataFleets",
//             "img": "https://i.ibb.co/fS41YW5/Data-Fleets.png"
//         },
//         {
//             "title": "Marlow",
//             "img": "https://i.ibb.co/BqDTL0H/Marlow.png"
//         },
//         {
//             "title": "Rhino",
//             "img": "https://i.ibb.co/svqbBJd/Rhino.png"
//         },
//         {
//             "title": "Kader ÙƒØ§Ø¯Ø±",
//             "img": "https://i.ibb.co/9VFDY8F/Kader.jpg"
//         },
//         {
//             "title": "arabot",
//             "img": "https://i.ibb.co/Jdh3t7c/arabot.jpg"
//         },
//         {
//             "title": "MUNCH:ON",
//             "img": "https://i.ibb.co/7ktsrR6/MUNCHON.jpg"
//         },
//         {
//             "title": "GreenFig",
//             "img": "https://i.ibb.co/6PhpMyt/GreenFig.png"
//         },
//         {
//             "title": "Forefront",
//             "img": "https://i.ibb.co/zQLYCNc/Forefront.png"
//         },
//         {
//             "title": "Crescendo",
//             "img": "https://i.ibb.co/C9KK7Gf/Crescendo.jpg"
//         },
//         {
//             "title": "JobBliss",
//             "img": "https://i.ibb.co/hZLHmFG/JobBliss.png"
//         },
//         {
//             "title": "CosmoSafe",
//             "img": "https://i.ibb.co/h16CdtK/Cosmo-Safe.png"
//         },
//         {
//             "title": "JokkoLabs",
//             "img": "https://i.ibb.co/Fxc8YW8/Jokko-Labs.png"
//         },
//         {
//             "title": "AfriLabs",
//             "img": "https://i.ibb.co/0Gjh7GH/AfriLabs.png"
//         },
//         {
//             "title": "Zowasel",
//             "img": "https://i.ibb.co/ccY3s3R/Zowasel.png"
//         },
//         {
//             "title": "Eversend",
//             "img": "https://i.ibb.co/db4Ch98/Eversend.png"
//         },
//         {
//             "title": "Hoozing",
//             "img": "https://i.ibb.co/N6Y2J6f/Hoozing.jpg"
//         },
//         {
//             "title": "People Car",
//             "img": "https://i.ibb.co/wsd6FxV/People-Car.png"
//         },
//         {
//             "title": "Tappytoon",
//             "img": "https://i.ibb.co/zXw082r/Tappytoon.jpg"
//         },
//         {
//             "title": "Oradian",
//             "img": "https://i.ibb.co/PCGD9fR/Oradian.png"
//         },
//         {
//             "title": "LifeCheq",
//             "img": "https://i.ibb.co/16kP9Ds/LifeCheq.png"
//         },
//         {
//             "title": "Flow",
//             "img": "https://i.ibb.co/gmL8xS7/Flow.png"
//         },
//         {
//             "title": "Accounteer",
//             "img": "https://i.ibb.co/3B7b1FQ/Accounteer.png"
//         },
//         {
//             "title": "Vencru",
//             "img": "https://i.ibb.co/D8nbB0Y/Vencru.png"
//         },
//         {
//             "title": "ìŠ¤í‹°ë¹„ Stibee",
//             "img": "https://i.ibb.co/Ny1Vt2C/Stibee.png"
//         },
//         {
//             "title": "My Comment",
//             "img": "https://i.ibb.co/HCd9XPQ/79590880-592830878220509-7429940865394540544-n.jpg"
//         },
//         {
//             "title": "ë§˜ì‹œí„°",
//             "img": "https://i.ibb.co/WsbkZQ9/107451400-1627138937453327-3988577561102274214-n.jpg"
//         },
//         {
//             "title": "Votek",
//             "img": "https://i.ibb.co/MCgwpJ5/Votek.png"
//         },
//         {
//             "title": "Instaval",
//             "img": "https://i.ibb.co/vwTHK8q/Instaval.jpg"
//         },
//         {
//             "title": "Fairom",
//             "img": "https://i.ibb.co/mhz4bps/Fairom.jpg"
//         },
//         {
//             "title": "Gokada",
//             "img": "https://i.ibb.co/LJKZH7J/Gokada.png"
//         },
//         {
//             "title": "PricePally",
//             "img": "https://i.ibb.co/9g1MLG8/Price-Pally.png"
//         },
//         {
//             "title": "Datarize",
//             "img": "https://i.ibb.co/0VdYnLC/Datarize.png"
//         },
//         {
//             "title": "Next Unicorn",
//             "img": "https://i.ibb.co/H4rqq6F/Halfz.jpg"
//         },
//         {
//             "title": "Pixelic",
//             "img": "https://i.ibb.co/V2yMWSB/Pixelic.png"
//         },
//         {
//             "title": "Minding",
//             "img": "https://i.ibb.co/cTtSqR4/67231543-457687698407186-6054177782953410560-n.jpg"
//         },
//         {
//             "title": "Cognitev",
//             "img": "https://i.ibb.co/vDrR9gr/Cognitev.png"
//         },
//         {
//             "title": "Aqeed",
//             "img": "https://i.ibb.co/PZ9P9Xv/aqeed.png"
//         },
//         {
//             "title": "Otter.ai",
//             "img": "https://i.ibb.co/RCSzrkK/otterai.png"
//         },
//         {
//             "title": "Tripplo",
//             "img": "https://i.ibb.co/cQZmsN8/Tripplo.jpg"
//         },
//         {
//             "title": "ProctorU",
//             "img": "https://i.ibb.co/fC2F1tH/ProctorU.png"
//         },
//         {
//             "title": "Eden Life",
//             "img": "https://i.ibb.co/xMRxWcs/eden-life.jpg"
//         },
//         {
//             "title": "Chefaa",
//             "img": "https://i.ibb.co/7QxhX8g/chefaa.jpg"
//         },
//         {
//             "title": "Breadfast",
//             "img": "https://i.ibb.co/KhKfkv6/Breadfast.jpg"
//         },
//         {
//             "title": "Affective Markets",
//             "img": "https://i.ibb.co/VSkDNW5/Affective-Markets.png"
//         },
//         {
//             "title": "Crowdworks",
//             "img": "https://i.ibb.co/ZW4Zq2r/Crowdworks.png"
//         },
//         {
//             "title": "Sentbe",
//             "img": "https://i.ibb.co/TRFtMY5/Sentbe.png"
//         },
//         {
//             "title": "Carmile",
//             "img": "https://i.ibb.co/CwVkfTC/91050135-590988911501315-8373528945349361664-n.jpg"
//         },
//         {
//             "title": "Algorima",
//             "img": "https://i.ibb.co/rpmpdzd/Algorima.png"
//         },
//         {
//             "title": "Watcha",
//             "img": "https://i.ibb.co/7G0QLss/watcha.jpg"
//         },
//         {
//             "title": "Fliqpay",
//             "img": "https://i.ibb.co/fr95mrB/Fliqpay.png"
//         },
//         {
//             "title": "Primer",
//             "img": "https://i.ibb.co/HB34vdj/Primer.png"
//         },
//         {
//             "title": "CredPal",
//             "img": "https://i.ibb.co/VmfPNGm/CredPal.jpg"
//         },
//         {
//             "title": "Schoolable",
//             "img": "https://i.ibb.co/yd5MpmL/schoolable.png"
//         },
//         {
//             "title": "CYou Retail",
//             "img": "https://i.ibb.co/3zrHQ0B/CYou-Retail.png"
//         },
//         {
//             "title": "Deepixel",
//             "img": "https://i.ibb.co/7VpGvdN/deepixel.jpg"
//         },
//         {
//             "title": "Karana",
//             "img": "https://i.ibb.co/P6bxVrb/karana.jpg"
//         },
//         {
//             "title": "CellMEAT",
//             "img": "https://i.ibb.co/WzXpssX/74529517-105206757598115-7853282228254539776-n.png"
//         },
//         {
//             "title": "Jandi",
//             "img": "https://i.ibb.co/5rcP6Sv/Jandi.jpg"
//         },
//         {
//             "title": "ì½”ì¸ì› Coinone",
//             "img": "https://i.ibb.co/r7GfNJS/Coinone.jpg"
//         },
//         {
//             "title": "Lunit",
//             "img": "https://i.ibb.co/fD8m3nR/Lunit.jpg"
//         },
//         {
//             "title": "MYKI",
//             "img": "https://i.ibb.co/sy6f4Hr/MYKI.png"
//         },
//         {
//             "title": "FloatPays",
//             "img": "https://i.ibb.co/qkpWq0T/Float-Pays.jpg"
//         },
//         {
//             "title": "Riby",
//             "img": "https://i.ibb.co/m8yNbJ9/Riby.png"
//         },
//         {
//             "title": "Vyne",
//             "img": "https://i.ibb.co/T2dDMhz/Vyne.png"
//         },
//         {
//             "title": "Bamboo",
//             "img": "https://i.ibb.co/LnLVsHB/Bamboo.png"
//         },
//         {
//             "title": "Busha",
//             "img": "https://i.ibb.co/bJ73vvV/Busha.png"
//         },
//         {
//             "title": "Code42.ai",
//             "img": "https://i.ibb.co/mt0FKbG/Code42.png"
//         }
//     ]
export default InputSearch
