
document.addEventListener("DOMContentLoaded", function () {
    // this funtion loading the fire in the page   
    function render(fireHeight, fireWidth, takeDiv, marionete){ 
        let indCell = 0
        let htm = "<table cellpadding = 0 cellspacing=0 class = 'minhaTabela'>"
        for(let row = 0;fireHeight > row; row++){
            htm += "<tr>"
            for(let column = 0; fireWidth > column; column++){
                let intFire =  Math.floor(marionete[row][column])
                htm += "<td style='background-color:"+callColor(intFire)+ "'>"
                htm += ''
                htm += "</td>"
                indCell ++
            }
            htm += "</tr>"
        }
        htm += "</table>"
        
        takeDiv.innerHTML = htm;
        
    }
    //This function creates a puppet to be imitated by rendering fire
    function marionete(fireHeight, fireWidth){
        let tabelaMarionete = []
        for(let row = 0;fireHeight > row; row++){
            rowMarionete = []
            for(let column = 0; fireWidth > column; column++){
                let  pixelIdent = column + (fireWidth * row)
                rowMarionete.push(0)
            }
            tabelaMarionete.push(rowMarionete)
        }
        return tabelaMarionete
    }

    function inicialSpawFire(fireHeight, fireWidth, fireInitial, marioneteTable){
        

        for(let i = fireWidth; i != 0; i--){ 
            marioneteTable[fireHeight-1][i-1] = fireInitial
        }

    }

    function callColor(callOneColor){
        let oneColor = 35 - callOneColor 
        const color = [
                "rgb(255,255,255)",
        
                "rgb(255,240,240)",
        
                "rgb(255,225,225)",
        
                "rgb(255,210,210)",
        
                "rgb(255,195,195)",
        
                "rgb(255,180,180)",
        
                "rgb(255,165,165)",
                
                "rgb(255,150,150)",
                
                "rgb(255,135,135)",
                
                "rgb(255,120,120)",
                
                "rgb(255,105,105)",
                
                "rgb(255,90,90)",
                
                "rgb(255,75,75)",
                
                "rgb(255,60,60)",
                
                "rgb(255,45,45)",
                
                "rgb(255,30,30)",
                
                "rgb(255,15,15)",
                
                "rgb(255,0,0)",
        
                "rgb(255,0,0,1.000)",
        
                "rgb(255,0,0,0.942)",
        
                "rgb(255,0,0,0.884)",
                
                "rgb(255,0,0,0.826)",
                
                "rgb(255,0,0,0.768)",
                
                "rgb(255,0,0,0.710)",
            
                "rgb(255,0,0,0.652)",
            
                "rgb(255,0,0,0.594)",
            
                "rgb(255,0,0,0.536)",
                
                "rgb(255,0,0,0.478)",
            
                "rgb(255,0,0,0.420)",
                
                "rgb(255,0,0,0.362)",
                
                "rgb(255,0,0,0.304)",
                
                "rgb(255,0,0,0.246)",
                
                "rgb(255,0,0,0.188)",
                
                "rgb(255,0,0,0.130)",
                
                "rgb(255,0,0,0.072)",
                
                "rgb(255,0,0,0.0)",  
        ] 
        return color[oneColor]
    }
    function inPrint(fireHeight, fireWidth, logGado, fireInitial){
        for(let i = fireHeight ; i > 0; i--){
            for(let j = fireWidth; j > 0; j--){
                if(fireHeight > i){
                    let randomMoveV =  randomMoveF(0,3)

                    let resistensce = logGado[i][j-1] 
                    
                    a = i - 1
                    b = j - 1
                    c = resistensce  - randomMoveV
                    
                    logGado[a][b] = c 
                    if (logGado [a][b] > fireInitial){logGado [a][b] = fireInitial}   
                }
            }
        }
    }
    function randomMoveF(max, min){
       return Math.floor(Math.random() * (max - min + 1)) + min

    }
    function filter(z, size){
        if (z < 0 ){z = 0}
        if (z > size){z = size}
        return z
    }

    function fireRender(){
        
        var larguraDaTela =  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var alturaDaTela =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        const percentualPixel = 0.07
        let fireHeight = Math.floor(alturaDaTela * percentualPixel)
        let fireWidth = Math.floor( larguraDaTela * percentualPixel)
        let fireInitial = 35
        const takeDiv = document.getElementById("fireContent")


        let logGado = marionete(fireHeight, fireWidth)
        inicialSpawFire(fireHeight,fireWidth, fireInitial, logGado)
        
        
        inPrint(fireHeight, fireWidth, logGado, fireInitial)
       
        
    render(fireHeight, fireWidth, takeDiv, logGado)
    }
    
    
    

    
    setInterval(fireRender, 175)
    
    
    
});


