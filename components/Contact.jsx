'use client';

import {motion} from 'framer-motion';
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";
import { Input } from './ui/input';
import { Label } from './ui/label';

const Contact = () => {
  return (
    <form className="grid grid-cols-1" id='contact'>
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className='container mx-auto p-24 flex flex-col gap-y-4 bg-black'>
            <h1 className="mb-9 text-center text-white">Contact</h1>
            <div className=''>
                <Label htmlFor='Nom'>Nom</Label>
                <Input type='nom' id='nom' />
            </div>
            <div className=''>
                <Label htmlFor='Nom'>Email</Label>
                <Input type='nom' id='nom' />
            </div>
            <div className=''>
                <Label htmlFor='Nom'>Message</Label>
                <Input type='nom' id='nom' />
            </div>
            <Button className="mx-auto" variant='orange'>Envoyer</Button>
        </motion.div>
    </form>
  )
}

export default Contact