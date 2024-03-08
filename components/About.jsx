'use client';
import Image from "next/image";
import {motion} from 'framer-motion';
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";


const About = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center" id="about">
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className="xl:pl-[100px]">
            <h1 className="mb-9">Qui sommes nous ?</h1>
            <p className="mb-8 font-bold text-orange">
            Déborah ALEXIS, et Luidji ALEXIS,
            </p>
            <p className="mb-10">
            Enfants de parents nés en Haïti, témoins de la passion de nos parents pour leur cuisine natale, il y a quelques années nous avons vus naître « Le Rond-Point Des Artistes », un restaurant à l’ambition de promouvoir la culture haïtienne à travers son art culinaire, ainsi que de réunir les artistes de tous bords.<br></br> Malgré leurs nombreux sacrifices, ce projet n’aura hélas jamais pu arriver à maturité.Soucieux d’une alimentation saine et durable, nous avons naturellement hérité de leur amour pour la cuisine haïtienne, riches en saveurs et bienfaits.<br></br> Multitude de plats, aux ingrédients de choix, réalisés dans la plus pure tradition de l’île. C’est en l’honneur de ces valeurs que nous avons crée « <span className="text-orange">Le Bois-Caïman</span> », une société de catering crée par des artistes, pour les artistes.
            </p>
            <Button>En savoir plus</Button>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}>
            <Image className="hidden xl:flex" src='/about/img.png' width={705} height={771} alt=""/>
        </motion.div>
    </section>
  )
};

export default About;