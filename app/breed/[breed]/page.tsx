"use client";
import { AppSlider } from "@/app/APP/COMPONENTS/AppSlider";
import AppLinkButton from "@/app/APP/COMPONENTS/CONSTANTS/AppLinkButton";
import { AppDataTable } from "@/app/APP/COMPONENTS/DATATABLE/AppDataTable";
import { columns } from "@/app/APP/COMPONENTS/DATATABLE/columns";

import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const Params = useParams();
  
 
  const [FormatedData, setFormatedData] = useState<DogImages[] | null>(null);




const Convert=( data:string[]):DogImages[]=>{


return   data.map((items,index)=>
({
    id: index+1,
    ImageLink: items
})

  )
}
  

  useEffect(() => {
    const GetData = async () => {
      await fetch(`https://dog.ceo/api/breed/${Params.breed}/images/random/5`)
        .then((data) => data.json())
        .then((data) => {
         

         const convertedData= Convert(data.message)

      
         setFormatedData(convertedData)
         
        }).catch(error=>{console.log(error)}).finally(()=>{
           
           
        });
    };
    GetData();
  }, []);

  return (
    <div className=" h-screen w-screen bg-AppTertiary CENTER ">
      <div
        className={cn(
          " pt-12  w-[180px] CENTER h-screen ",
          " justify-start gap-[100px] flex-col"
        )}
      >
        <AppLinkButton link="/" />

        <div>
          {FormatedData ? (
            <AppSlider ImageArrayList={FormatedData} />
          ) : (
            "Loading....."
          )}
        </div>
      </div>

      <div className="  w-full h-full pt-12 pl-12 p-12">

<h1 className=" text-3xl font-bold capitalize text-AppMutedPop"> {Params.breed}</h1>
     
<div className=" bg-white w-full h-auto rounded-md mt-[50px]">



{

FormatedData?<AppDataTable columns={columns} data={FormatedData?FormatedData:[]} />:"Loading Table ......"

}
</div>
     
      </div>
    </div>
  );
}

export default Page;
