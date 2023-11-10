"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { Sparkle } from 'lucide-react';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { useToast } from "@/components/ui/use-toast"

interface SubcriptionButtonProps {
    className?: string;
    isPro?: boolean;
}

const SubcriptionButton:React.FC<SubcriptionButtonProps> = ({className, isPro}) => {
    const [loading, setLoading] = useState(false);
    const {toast} = useToast();
    const handleSubcribe = async() =>{
        //to do something
        try{
            setLoading(true);
            const {data} = await axios.get("/api/tripe");
        }catch(error){
            toast({
                variant: "Destructive",
                description: "Something Went Wrong. Please Try Again"
            });
        } finally{
            setLoading(false)
        }
    }

  return (
    <div className={className}>
      <Button
        variant="outline"
        size="lg"
        disabled = {loading} 
        onClick={handleSubcribe} 
        className={cn(
            "text-white w-full font-semibold border-none gradient-btn",
            "hover:text-white"
        )}
    >
        <span> {isPro ? "Manage Subcription" : "Upgrade To Pro"} </span>
        <Sparkle />
      </Button>
    </div>
  )
}

export default SubcriptionButton
