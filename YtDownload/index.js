const cmd = require("child_process")
const os = require("os")
//https://www.youtube.com/playlist?list=PLfgfARn9L6iaAcVZMyJ2IJYu7oMxEQ85G
function DownloadVideoPlaylist(url,quality="360p",path="/videos"){
    if(os.platform() ==="linux"
       ||os.platform()==="darwin" 
       || os.platform()==="freebsd")
       {cmd.spawn("python3",["../python/install.py","pytube"]);}else 
       if(os.platform()==="win32") cmd.spawn("python",["../python/install.py","pytube"]);
    if(os.platform() ==="linux" 
        || os.platform()==="darwin" 
        || os.platform()==="freebsd"){
        const python = cmd.spawn("python3",["../python/YtDownload.py",url,quality])
        let getData="";
        python.stdout.on("data", (data)=>{
             getData = data.toString()
        })
        python.stdout.on("end",()=>{
            console.log(getData)
        })
    }
    if(os.platform()==="win32"){
        const python = cmd.spawn("python",["../python/YtDownload.py",url,quality])
        python.stdout.on("data", (data)=>{
            console.log(data.toString())
        })
    }
}

module.exports = {
    DownloadVideoPlaylist
}

DownloadVideoPlaylist("https://www.youtube.com/playlist?list=PLfgfARn9L6iaAcVZMyJ2IJYu7oMxEQ85G")

// const install = cmd.spawn("python",["../python/install.py","pytube"]);
// install.stdout.on("data", (data)=>{
//     console.log(data.toString())
// })