import { SearchBar } from "./SearchBar"

export const AppBar =()=>{
    return <div className="grid grid-cols-3 pt-2">
        <div className="text-md inline-flex items-center pb-2"> Youtube</div>
        <SearchBar/>
        <div className="pl-2"> Signin</div>


    </div>
}