'use client'
import Image from "next/image";
import {motion} from 'framer-motion';
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";

const Hero = () => {
  return (  
  <section className="bg-footer bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0" id="home">
    <div className="container mx-auto">
        <div className="flex items-center xl:h-[960px]">
            <div className="w-full xl:max-w-[540px] text-center xl:text-left">
                <motion.h1
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.4}}
                className="text-white mb-7 uppercase">
                    Le <span className="text-orange">bois-Caïman</span> 
                </motion.h1>
                <motion.p 
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.4}}
                className="text-white font-semibold mb-7">
                    « Par un <span className="text-orange">artiste</span>  pour les <span className="text-orange">artistes</span>  »
                </motion.p>
                <motion.p 
                variants={fadeIn('down', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.1}}
                className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
                    Entreprise familiale de restauration traditionnelle haïtienne dédiée au spectacle vivant.
                </motion.p>
            </div>
            <motion.div 
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.4}}
            className="hidden xl:flex xl:absolute xl:top-[100px] xl:right-0">
                <Image src='/LOGOLBC.png' width={756} height={682} alt="logo" />
            </motion.div>
        </div>
    </div>
  </section>)
};

export default Hero;