import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {social} from './info.config';



function Nfts () {

    useEffect(() => {
        Aos.init({ duration : 1500,
                   offset: 100,
                   delay : 500})
      }, []);

    return (
        <div id="nfts"className='overflow-hidden flex flex-col'>
    <div className='flex flex-col my-10 md:mx-16 mx-2 justify-between items-center'>
       <div className='mt-10'>
        <h1 data-aos="flip-right" className='md:text-[40px] text-[30px] bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-Kanit text-center uppercase font-semibold tracking-wide'>The Problem</h1>
        <p data-aos="flip-right" className='text-justify font-Kanit md:text-[20px] text-[16px] text-gray-400 mt-4 mb-5'>
        Dex battle game was created because there are far too many blockchain games that lack good visuals, and the PC
gaming area is mostly disregarded by P2E producers. Furthermore, traditional games do not provide their players with
a play-to-earn structure. Over 1 billion players have been playing games for years without making any money from
them. They spend hundreds of dollars on skins and other <br/>
in-game things, yet they cannot sell them. This represents a return on investment.
            </p>
            <h1 data-aos="flip-right" className='md:text-[40px] text-[30px] bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent  font-Kanit text-center uppercase mt-10 font-semibold tracking-wide'>Our Solution</h1>
        <p  data-aos="flip-right" className='text-justify font-Kanit md:text-[20px] text-=[16px] text-gray-400 mt-4 mb-5'>
        We want to create a play-to-earn iOS and Android game with stunning visuals and gameplay
to attract a share of the 1 billion conventional Android gamers. We also hope to supply our
gamers with an NFT ecosystem in order to establish a long-lasting and addictive P2E gaming
experience.

            </p>
            
       </div>

       {/* Slideshow here*/}
       <div className="my-4 w-full h-auto rounded-md border border-white">
            <img src='/Banner 03.jpg'
            className="object-cover"/>
       </div>


<div className='mt-10'>
        <h1 data-aos="flip-right" className='md:text-[40px] text-[30px] bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-Kanit text-center uppercase font-semibold tracking-wide'>NFT Characters</h1>
        <p data-aos="flip-right" className='text-justify font-Kanit md:text-[20px] text-[16px] text-gray-400 mt-4'>
        Every character in the Dex battle P2E game is an NFT asset that can be enhanced using gemstones, and in-game currency (Dex
Token). Players will utilize their characters to complete objectives, win fights, and gain prizes in many game formats, including
guilds systems.
            </p>
            <h1 data-aos="flip-right" className='md:text-[40px] text-[30px] bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-Kanit text-center uppercase mt-10 font-semibold tracking-wide'>NFT marketplace</h1>
        <p data-aos="flip-right" className='text-justify font-Kanit md:text-[20px] text-[16px] text-gray-400 mt-4'>
        NFT market place will be created with whitelisting, presale and public sales funtionality to buy the NFTs with your token only and auction and lottery
too. Dex coin features blockchain-based digital assets know as &ldquo;NFTs&ldquo; that operate on an eco-friendly proof-of-stake blockchain. Because blockchain
technology enables actual digital ownership, indira characters may be exchanged not just on the specific indira marketplace, but also on a variety of
other platforms. Given the massive tading volume and profits generated by these NFT markets, This is a wonderful incentivefor users who are merely
profit-driven, as well as a chance for next generation green investment. There would be marketplaces where we sell actual items/food/taxi rides and
buy with crypto payment from the game.

            </p>
       </div>

       <section class=" dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        

        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover w-full lg:mx-6 lg:w-auto rounded-xl h-72 lg:h-96" src="/DexBattle PNG/DexBattle-Characters.jpg"alt=""/>

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-[28px] tracking-wide text-blue-500 uppercase mb-8 font-Kanit font-semibold">Buy Dex battle characters and weapons on opensea</p>

                <a href={social.opensea}>
                <button type="button" class="text-white my-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center mr-2 mb-2 font-Kanit">
                    Buy on Opeansea</button>
                </a>

                <a href="/exchange">
                <button type="button" class="text-white my-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center mr-2 mb-2 font-Kanit">
                    Buy Dex Coins</button>
                </a>
            </div>
        </div>
    </div>
</section>

    </div>
    </div>
    ) 
}
export default Nfts