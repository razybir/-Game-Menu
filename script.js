const error = function(){
    console.log("Unknown command.")
}



const r = ("start")
const s = ("stop")
const p = ("premium")

const mode = prompt(       "GAMEMENU  " +
    "START  " +
    "STOP  " +
    "PREMIUM  " +
    "TYPE -  "
)

if(mode === r){
    console.log("Program starting...")
}

else if(mode === s){
    console.log("Program stopped.")
}
else if(mode === p){
    console.log("Premium feature activated!")
}
else{
  error()
}
