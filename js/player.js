class Player{
    constructor(){
   this.index = null
   this.distance = 0
   this.name = null
   this.rank = null
    }
    getCount(){
        var playerCountref = database.ref('playerCount')
        playerCountref.on("value", function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){
        var playerindex = "players/player "+this.index
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerinfo(){
        var playerInforef = database.ref("players")
        playerInforef.on("value",(data)=>{
            allPlayers = data.val()
        })
    }

    getCarsAtEnd(){
        database.ref('CarsAtEnd').on("value",(data)=>{
            this.rank = data.val()
        })

        }

        static updateCarsAtEnd(rank){
            database.ref('/').update({
                CarsAtEnd:rank

            })
        }
    }
