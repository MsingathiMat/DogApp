"use client";
import { AppSlider } from "@/app/APP/COMPONENTS/AppSlider";
import AppLinkButton from "@/app/APP/COMPONENTS/CONSTANTS/AppLinkButton";
import { AppDataTable } from "@/app/APP/COMPONENTS/DATATABLE/AppDataTable";
import { columns } from "@/app/APP/COMPONENTS/DATATABLE/columns";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AppButton from "../APP/COMPONENTS/AppButton";

function Page() {

  const Qparams = useSearchParams()
 
const Router = useRouter()
  const ImageUrl = Qparams.get("ImageUrl")
 



  return (
    <div className=" h-screen w-screen bg-AppTertiary CENTER ">
      <div
        className={cn(
          " pt-12  w-[180px] CENTER h-screen ",
          " justify-start gap-[100px] flex-col"
        )}
      >
    
    <div onClick={()=>{Router.back()}}>  <AppButton>Back</AppButton></div>

      
      </div>

      <div className="  w-full h-full pt-12 pl-12 p-12">

<h1 className=" text-3xl font-bold capitalize text-AppMutedPop">Image Url</h1>
<p>{ImageUrl}</p>

{
    ImageUrl?
    
    <div className=" h-[400px] w-[400px] mt-20  ">
           
    <Image src={ImageUrl} width={400} height={400} alt="Images" className=" rounded-md h-[100%]  border-2  border-AppPrimary "/>
    </div>
    
    :<p>No Query Params Found</p>
}
     
      </div>
    </div>
  );
}

export default Page;
