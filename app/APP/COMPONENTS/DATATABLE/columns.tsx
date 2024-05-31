"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


const ViewLargeImage =({ImageLink}:{ImageLink:string})=>{
const Router = useRouter()

  return <p onClick={()=>{Router.push(`/detail/?ImageUrl=${ImageLink}`)}}> View Large image</p>
}

const columns: ColumnDef<DogImages>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
{
  header: "Avatar",
id:"Avatar",
cell:({row})=>{
const Image = row.original

return <Avatar>
<AvatarImage src={Image.ImageLink}/>
<AvatarFallback>CN</AvatarFallback>
</Avatar>
}
},
  
  {
    accessorKey: "ImageLink",
    header: "Image Link",
  },

  {

    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const Images = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {}}
            >

<ViewLargeImage ImageLink={Images.ImageLink}/>
            
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];


export { columns };
