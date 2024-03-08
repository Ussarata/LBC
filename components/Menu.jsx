'use client';
import Image from "next/image";
import Link from "next/link";
import {IoIosArrowRoundForward} from 'react-icons/io';

import {motion} from 'framer-motion';
import { fadeIn } from "@/variants";

const menu = [
  {
    img: '/menu/plat1.jpeg',
  },
  {
    img: '/menu/plat2.jpeg',
  },
  {
    img: '/menu/plat3.jpeg',
  },
  {
    img: '/menu/plat4.jpg',
  },
  {
    img: '/menu/plat5.jpg',
  },
  {
    img: '/menu/plat6.jpg',
  },
  {
    img: '/menu/plat7.jpg',
  },
  {
    img: '/menu/plat8.jpg',
  },
];

const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className="max-w-[570px] mx-auto text-center xl:text-right">
          <h2 className="mb-3">Menu</h2>
          <Link href='/' className="text-green flex justify-center xl:justify-end items-center mb-16">
            Voir plus
            <IoIosArrowRoundForward className="text-3xl"/>
          </Link>
        </motion.div>
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4">
          {menu.map((item, index)=> {
            return (
              <div key={index} 
              className="max-w-{270px} bg-white shadow-primary mx-auto group">
                <div className="overflow-hidden">
                  <Image src={item.img} width={270} height={270} alt='' 
                  className="group-hover:scale-110 transition-all duration-300"/>
                </div>
                <div className="pt-[20px] pb-[20px] px-[30px]">
                  <h3 className="font-poppins text-black mb-[14px]">Nom du Plat</h3>
                  <h3 className="font-poppins font-semibold text-orange">Description</h3>
                </div>
              </div>
            );
          }
          )}
        </motion.div>
      </div>
    </section>
  )
};

export default Menu;