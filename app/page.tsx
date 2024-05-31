"use client"
import React, { useEffect, useState } from "react"
import AppLeftPane from "./APP/COMPONENTS/AppLeftPane";
import { cn } from "@/lib/utils";
import { AppDataTable } from "./APP/COMPONENTS/DATATABLE/AppDataTable";
import { columns } from "./APP/COMPONENTS/DATATABLE/columns";
function Page() {
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
      await fetch("https://dog.ceo/api/breed/hound/afghan/images/random/5")
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
    <div
      className={cn(
        " CENTER   gap-1 flex-col bg-AppTertiary h-screen w-screen",
        " justify-start items-start flex-row"
      )}
    >
      <AppLeftPane />
      <div className=" bg-white  p-12 ml-[50px] h-auto rounded-md mt-[50px] w-[850px]">
      {

FormatedData?<AppDataTable columns={columns} data={FormatedData?FormatedData:[]} />:"Loading Table ......"

}
</div>
    </div>
  );
}
export default Page;
