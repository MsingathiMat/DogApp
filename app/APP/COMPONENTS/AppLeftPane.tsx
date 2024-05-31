import React from 'react'
import AppMenuItemGroup from './AppMenuItemGroup'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function AppLeftPane() {
  return (
    <div className={cn(' bg-AppSecondary h-screen w-[160px] CENTER pt-20'," flex-col gap-40 justify-start")}>
 
 <Image src="/logo.svg" width={50} height={70} alt='DogApp Logo'/>
 <div className={cn(' CENTER gap-4'," flex-col items-start")}>


 <AppMenuItemGroup/>
 </div>
    </div>
  )
}

export default AppLeftPane
