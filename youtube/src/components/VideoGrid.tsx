import { VideoCard } from "./VideoCard"

const VIDEOS =[{

    title: "Harry Potter deathly halloows scencs",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"60M",
    timestamp:"12 days ago"
},
{

    title: "Harry Potter order of phoniex scencs",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"100M",
    timestamp:"21 days ago"
},
{

    title: "Harry Potter prisoner of azkaban scencs",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"10M",
    timestamp:"2 days ago"
},
{

    title: "Harry Potter half blood prince scencs",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"32M",
    timestamp:"2 days ago"
},
    {
    title: "Harry Potter half blood prince scenes",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"32M",
    timestamp:"2 days ago"
},
    { 
    title: "Harry Potter and the philosoper stone scenes",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"32M",
    timestamp:"1 month ago"
},
{ 
    title: "Harry Potter and the goblet of fire  scenes",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"32M",
    timestamp:"1 month ago"
},
{ 
    title: "Harry Potter and the deathly hallows Part 2  scenes",
    image:"harrypotter.jpg",
    thumbnail :"thumb.jpg",
    author:"Abhishek Kirloskar",
    views:"32M",
    timestamp:"1 month ago"
}
]



export  function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
             title={video.title}
             image={video.image}
             thumbnail={video.thumbnail}
             author={video.author}
             views={video.views}
             timestamp={video.timestamp}/>
            </div>)}

    </div>

    
}