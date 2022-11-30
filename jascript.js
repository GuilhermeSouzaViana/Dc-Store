

let nm = document.getElementById("nm")
let tel = document.getElementById("tel")
let email = document.getElementById("email")
let es = document.getElementById("es")



let shop=document.getElementById("shop")
let descShop=document.getElementById("descShop")

let cadastro=document.getElementById("cadastro")
let dc=document.getElementById("dc")

let pr1 = document.getElementById("pr1")
let pr2 = document.getElementById("pr2")
let pr3 = document.getElementById("pr3")
let pr4 = document.getElementById("pr4")
let pr5 = document.getElementById("pr5")
let pr6 = document.getElementById("pr6")
let pr7 = document.getElementById("pr7")
let pr8 = document.getElementById("pr8")
let pr9 = document.getElementById("pr9")
let pr10 = document.getElementById("pr10")
let pr11 = document.getElementById("pr11")
let pr12 = document.getElementById("pr12")
let pr13 = document.getElementById("pr13")
let pr14 = document.getElementById("pr14")
let pr15= document.getElementById("pr15")
let pr16 = document.getElementById("pr16")
let pr17 = document.getElementById("pr17")
let pr18 = document.getElementById("pr18")
let pr19 = document.getElementById("pr19")
let pr20 = document.getElementById("pr20")
let pr21 = document.getElementById("pr21")
let pr22 = document.getElementById("pr22")
let pr23 = document.getElementById("pr23")
let pr24 = document.getElementById("pr24")



let cbtn=document.getElementsByClassName("cbtn")
let qt = document.getElementsByClassName("qt")
let comp = document.getElementsByClassName("comp")
let hist=document.getElementById("hist")
let rmr=document.getElementById("rmr")
let brmr=document.getElementById("brmr")
let rev=document.getElementById("rev")

let btn = document.getElementsByClassName("btn")
let bev = document.getElementById("bev")

let descricao = document.getElementById("descricao")


let carrinho = document.getElementById("carrinho")
let total = document.getElementById("total")
let visu = document.getElementById("visu")


let cSound=new Audio()
cSound.src="./audio/clickCompra.flac"

let fSound=new Audio()
fSound.src="./audio/clickFinalizaCompra.ogg"

let eSound=new Audio()
eSound.src="./audio/clickErro.ogg"

let nome = ""
let telefone=""

let k1 = 49.99
let quantk1
let totK1 = 0


let k2 = 54.99
let quantk2
let totK2 = 0


let k3 = 49.99
let quantk3
let totK3 = 0

let k4 = 180.99
let quantk4
let totK4 = 0

let k5 = 159.99
let quantk5
let totK5 = 0

let k6 = 159.99
let quantk6
let totK6 = 0

let k7 = 139.90
let quantk7
let totK7 = 0

let k8 = 159.99
let quantk8
let totK8 = 0


let k9 = 99.99
let quantk9
let totK9= 0


let k10 = 99.99
let quantk113
let totK10 = 0


let k11 = 59.99
let quantk11
let totK11 = 0

let k12 = 59.99
let quantk12
let totK12 = 0

let k13 = 159.99
let quantk13
let totK13= 0

let k14 = 119.99
let quantk14
let totK14 = 0

let k15 = 119.99
let quantk15
let totK15 = 0

let k16 = 189.99
let quantk16
let totK16 = 0

let k17 = 399.99
let quantk17
let totK17 = 0


let k18 = 399.99
let quantk18
let totK18 = 0

let k19 = 399.99
let quantk19
let totK19 = 0

let k20 = 499.90
let quantk20
let totK20 = 0

let k21 = 429.90
let quantk21
let totK21 = 0

let k22 = 450
let quantk22
let totK22 = 0

let k23 = 599.99
let quantk23
let totK23 = 0

let k24= 599.99
let quantk24
let totK24 = 0


let tot1Reais 
let tot2Reais 
let tot3Reais 
let tot4Reais 
let tot5Reais 
let tot6Reais 
let tot7Reais 
let tot8Reais 
let tot9Reais 
let tot10Reais 
let tot11Reais 
let tot12Reais 
let tot13Reais 
let tot14Reais 
let tot15Reais 
let tot16Reais 
let tot17Reais 
let tot18Reais 
let tot19Reais 
let tot20Reais 
let tot21Reais 
let tot22Reais 
let tot23Reais 
let tot24Reais 


let totC = 0
let totalC=0

let itens=[];
let somaitens=[]
let historico=[]


bev.addEventListener("click", function () {
    
    nome = nm.value
    telefone = tel.value
    
    if(nome!="" && telefone!=""){

            nm.value=""
            tel.value = ""
            email.value=""
            es.value=""
         
           dc.style.display="none"
           descShop.style.display="none"
           descricao.style.display="block"
           cadastro.style.display="none"  
           
           document.body.style.backgroundImage="url(./imagens/backLiga.gif)"
    }else{
        eSound.play()
        alert("Nome e telefone obrigatórios")
    }
 
})


btn[0].addEventListener("click", function () {

    if (pr1.value > 0 ) {
        
        cSound.play()
        
        pr1.style.display = "none"
        qt[0].style.display = "none"
        btn[0].style.display = "none"
        comp[0].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk1 = pr1.value
        totK1 = k1 * quantk1
        pr1.value = ""
        
        tot1Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK1)
        
        itens.push("Camiseta-DC x"+ quantk1+" total: "+ tot1Reais)
         somaitens.push(totK1)


    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[1].addEventListener("click", function () {
    if (pr2.value > 0 ) {
        
        cSound.play()

        pr2.style.display = "none"
        qt[1].style.display = "none"
        btn[1].style.display = "none"
        comp[1].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk2 = pr2.value
        totK2 = k2 * quantk2
        pr2.value = ""


        tot2Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK2)

        itens.push("C.Liga-da-justiça x"+quantk2+" total: "+ tot2Reais)
        somaitens.push(totK2)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }

})

btn[2].addEventListener("click", function () {
    if (pr3.value > 0 ) {
       
        cSound.play()

        pr3.style.display = "none"
        qt[2].style.display = "none"
        btn[2].style.display = "none"
        comp[2].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk3 = pr3.value
        totK3 = k3 * quantk3
        pr3.value = ""
       
        tot3Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK3)
       
        itens.push("C.Liga-da-justiça x"+quantk3+" total: "+ tot3Reais)
        somaitens.push(totK3)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[3].addEventListener("click", function () {
    if (pr4.value > 0 ) {

        cSound.play()

        pr4.style.display = "none"
        qt[3].style.display = "none"
        btn[3].style.display = "none"
        comp[3].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk4 = pr4.value
        totK4 = k4 * quantk4
        pr4.value = ""
       
        tot4Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK4)

        itens.push("Kit-Batman x"+quantk4+" total: "+ tot4Reais)
        somaitens.push(totK4)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[4].addEventListener("click", function () {
    if (pr5.value > 0 ) {

        cSound.play()

        pr5.style.display = "none"
        qt[4].style.display = "none"
        btn[4].style.display = "none"
        comp[4].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk5 = pr5.value
        totK5 = k5 * quantk5
        pr5.value = ""
       
        tot5Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK5)
       
        itens.push("Kit-Mulher-Maravilha x"+quantk5+" total: "+ tot5Reais)
        somaitens.push(totK5)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[5].addEventListener("click", function () {
    if (pr6.value > 0 ) {

        cSound.play()

        pr6.style.display = "none"
        qt[5].style.display = "none"
        btn[5].style.display = "none"
        comp[5].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk6 = pr6.value
        totK6 = k6 * quantk6
        pr6.value = ""
       
        tot6Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK6)
       
        itens.push("Kit-Super-Man x"+quantk6+" total: "+ tot6Reais)
        somaitens.push(totK6)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[6].addEventListener("click", function () {
    if (pr7.value > 0 ) {

        cSound.play()

        pr7.style.display = "none"
        qt[6].style.display = "none"
        btn[6].style.display = "none"
        comp[6].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk7 = pr7.value
        totK7 = k7 * quantk7
        pr7.value = ""
       
        tot7Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK7)
       
        itens.push("Kit-Flash-Reverso x"+quantk7+" total: "+ tot7Reais)
        somaitens.push(totK7)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})


btn[7].addEventListener("click", function () {
    if (pr8.value > 0 ) {

        cSound.play()

        pr8.style.display = "none"
        qt[7].style.display = "none"
        btn[7].style.display = "none"
        comp[7].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk8 = pr8.value
        totK8 = k8 * quantk8
        pr8.value = ""
       
       
        tot8Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK8)
       
        itens.push("Kit-Coringa x"+quantk8+" total: "+ tot8Reais)
        somaitens.push(totK8)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[8].addEventListener("click", function () {

    if (pr9.value > 0 ) {
        
        
        cSound.play()
        
        pr9.style.display = "none"
        qt[8].style.display = "none"
        btn[8].style.display = "none"
        comp[8].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk9 = pr9.value
        totK9 = k9 * quantk9
        pr9.value = ""
        
        tot9Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK9)
        
        itens.push("Hq-L.justiça-Origem x"+ quantk9+" total: "+ tot9Reais)
         somaitens.push(totK9)


    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[9].addEventListener("click", function () {
    if (pr10.value > 0 ) {
        
        cSound.play()

        pr10.style.display = "none"
        qt[9].style.display = "none"
        btn[9].style.display = "none"
        comp[9].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk10 = pr10.value
        totK10 = k10 * quantk10
        pr10.value = ""


        tot10Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK10)

        itens.push("HQ-flash-Renascimento x"+quantk10+" total: "+ tot10Reais)
        somaitens.push(totK10)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }

})

btn[10].addEventListener("click", function () {
    if (pr11.value > 0 ) {
       
        cSound.play()

        pr11.style.display = "none"
        qt[10].style.display = "none"
        btn[10].style.display = "none"
        comp[10].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk11 = pr11.value
        totK11 = k11 * quantk11
        pr11.value = ""
       
        tot11Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK11)
       
        itens.push("HQ-M.Maravilha-Terra um x"+quantk11+" total: "+ tot11Reais)
        somaitens.push(totK11)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[11].addEventListener("click", function () {
    if (pr12.value > 0 ) {

        cSound.play()

        pr12.style.display = "none"
        qt[11].style.display = "none"
        btn[11].style.display = "none"
        comp[11].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk12 = pr12.value
        totK12 = k12 * quantk12
        pr12.value = ""
       
        tot12Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK12)

        itens.push("HQ-S.Girl-A.de Krypton "+quantk12+" total: "+ tot12Reais)
        somaitens.push(totK12)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[12].addEventListener("click", function () {
    if (pr13.value > 0 ) {

        cSound.play()

        pr13.style.display = "none"
        qt[12].style.display = "none"
        btn[12].style.display = "none"
        comp[12].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk13 = pr13.value
        totK13 = k13 * quantk13
        pr13.value = ""
       
        tot13Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK13)
       
        itens.push("HQ-Batman-D.das bruxas x"+quantk13+" total: "+ tot13Reais)
        somaitens.push(totK13)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[13].addEventListener("click", function () {
    if (pr14.value > 0 ) {

        cSound.play()
    
        pr14.style.display = "none"
        qt[13].style.display = "none"
        btn[13].style.display = "none"
        comp[13].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk14 = pr14.value
        totK14 = k14 * quantk14
        pr14.value = ""
       
        tot14Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK14)
       
        itens.push("HQ-Batman-Piada mortal x"+quantk14+" total: "+ tot14Reais)
        somaitens.push(totK14)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[14].addEventListener("click", function () {
    if (pr15.value > 0 ) {

        cSound.play()

        pr15.style.display = "none"
        qt[14].style.display = "none"
        btn[14].style.display = "none"
        comp[14].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk15 = pr15.value
        totK15 = k15 * quantk15
        pr15.value = ""
       
        tot15Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK15)
       
        itens.push("HQ-S.Man-Foice e martelo x"+quantk15+" total: "+ tot15Reais)
        somaitens.push(totK15)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[15].addEventListener("click", function () {
    if (pr16.value > 0 ) {

        cSound.play()
  
        pr16.style.display = "none"
        qt[15].style.display = "none"
        btn[15].style.display = "none"
        comp[15].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk16 = pr16.value
        totK16 = k16 * quantk16
        pr16.value = ""
       
       
        tot16Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK16)
       
        itens.push("Hq-Watchmen x"+quantk16+" total: "+ tot16Reais)
        somaitens.push(totK16)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[16].addEventListener("click", function () {

    if (pr17.value > 0 ) {
        
        
        cSound.play()
        
       pr17.style.display = "none"
        qt[16].style.display = "none"
        btn[16].style.display = "none"
        comp[16].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk17 = pr17.value
        totK17 = k17 * quantk17
        pr17.value = ""
        
        tot17Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK17)
        
        itens.push("Action-figure-Cyborg x"+ quantk17+" total: "+ tot17Reais)
         somaitens.push(totK17)


    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[17].addEventListener("click", function () {
    if (pr18.value > 0 ) {
        
        cSound.play()

        pr18.style.display = "none"
        qt[17].style.display = "none"
        btn[17].style.display = "none"
        comp[17].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk18 = pr18.value
        totK18 = k18 * quantk18
        pr18.value = ""


        tot18Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK18)

        itens.push("Action-figure-Aquaman x"+quantk18+" total: "+ tot18Reais)
        somaitens.push(totK18)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }

})

btn[18].addEventListener("click", function () {
    if (pr19.value > 0 ) {

        cSound.play()

        pr19.style.display = "none"
        qt[18].style.display = "none"
        btn[18].style.display = "none"
        comp[18].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk19 = pr19.value
        totK19 = k19 * quantk19
        pr19.value = ""
       
        tot19Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK19)

        itens.push("Action-figure-Lanterna-Verde x"+quantk19+" total: "+ tot19Reais)
        somaitens.push(totK19)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[19].addEventListener("click", function () {
    if (pr20.value > 0 ) {
       
        cSound.play()
   
        pr20.style.display = "none"
        qt[19].style.display = "none"
        btn[19].style.display = "none"
        comp[19].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk20 = pr20.value
        totK20 = k20 * quantk20
        pr20.value = ""
       
        tot20Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK20)
       
        itens.push("Action-figure-C.de Marte x"+quantk20+" total: "+ tot20Reais)
        somaitens.push(totK20)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[20].addEventListener("click", function () {
    if (pr21.value > 0 ) {

        cSound.play()

        pr21.style.display = "none"
        qt[20].style.display = "none"
        btn[20].style.display = "none"
        comp[20].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk21 = pr21.value
        totK21 = k21 * quantk21
        pr21.value = ""
       
        tot21Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK21)
       
        itens.push("Action-figure-Lobo x"+quantk21+" total: "+ tot21Reais)
        somaitens.push(totK21)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[21].addEventListener("click", function () {
    if (pr22.value > 0 ) {

        cSound.play()
    
        pr22.style.display = "none"
        qt[21].style.display = "none"
        btn[21].style.display = "none"
        comp[21].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk22 = pr22.value
        totK22 = k22 * quantk22
        pr22.value = ""
       
        tot22Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK22)
       
        itens.push("Action-figure-Adão-Negro x"+quantk22+" total: "+ tot22Reais)
        somaitens.push(totK22)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[22].addEventListener("click", function () {
    if (pr23.value > 0 ) {

        cSound.play()

        pr23.style.display = "none"
        qt[22].style.display = "none"
        btn[22].style.display = "none"
        comp[22].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk23 = pr23.value
        totK23 = k23 * quantk23
        pr23.value = ""
       
        tot23Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK23)
       
        itens.push("Action-figure-Swamp-Thing  x"+quantk23+" total: "+ tot23Reais)
        somaitens.push(totK23)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[23].addEventListener("click", function () {
    if (pr24.value > 0 ) {

        cSound.play()
 
        pr24.style.display = "none"
        qt[23].style.display = "none"
        btn[23].style.display = "none"
        comp[23].innerHTML = "Produto adicionado"
        descricao.style.display = "none"
        visu.style.display = "block"
        quantk24 = pr24.value
        totK24 = k24 * quantk24
        pr24.value = ""
       
       
        tot24Reais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totK24)
       
        itens.push("Action-figure-Dark-side x"+ quantk24 +" total: "+ tot24Reais)
        somaitens.push(totK24)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})


cbtn[0].addEventListener("click",function(){
          fSound.play()

         historico.push("Nome: "+ nome +"|"+" Total comprado "+totReais)
         total.innerHTML="Agradecemos pela sua confiança"
         carrinho.innerHTML=""
         cbtn[0].style.display="none"
         cbtn[1].style.display="none"
         cbtn[3].style.display="inline-block"
                   
})


cbtn[1].addEventListener("click",function(){
    if(itens.length==1){
        eSound.play()
        alert("Finalize a compra ou inicie uma nova compra")
    }else{
    rev.style.display="block" 
}
})


brmr.addEventListener("click",function(){

if(rmr.value>itens.length){
    eSound.play()
    alert("item não encontrado")
}else if(rmr.value==""){
    alert("Ultimo item removido")  
    itens.splice(rmr.value-1,1)
    somaitens.splice(rmr.value-1,1)
    hist.innerHTML="Item removido"
    setTimeout(function(){
        hist.innerHTML=""
    },1700)
}else{
    itens.splice(rmr.value-1,1)
    somaitens.splice(rmr.value-1,1)
    hist.innerHTML="Item removido"
    setTimeout(function(){
        hist.innerHTML=""
    },1700)
}
    rmr.value=""
    totalC=somaitens.reduce(function(soma,i){
        return soma+i
    })

    totReais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totalC)

    carrinho.innerHTML=""
    itens.map((p,i)=>{carrinho.innerHTML+= i+1 +"."+ p + "<br>"}) 
    total.innerHTML="Total da compra "+totReais 
    rev.style.display="none" 
})

cbtn[2].addEventListener("click",function(){
  
    cadastro.style.display="none"
    dc.style.display="flex"
    visu.style.display="block"
    descricao.style.display="none"
    descShop.style.display="block"
    descShop.innerHTML="Roupas, Hqs e colecionaveis você só encontra aqui na <strong>DC</strong> store !"
    shop.style.display="block"
    hist.innerHTML=""
    itens=[]
    somaitens=[]
    nome=null
    telefone=null
    
     totK1 =0 
     totK2 =0
     totK3 =0  
     totK4 =0 
     totK5 =0 
     totK6 =0 
     totK7 =0 
     totK8 =0 

     totK9  =0
     totK10 =0
     totK11 =0
     totK12 =0
     totK13 =0 
     totK14 =0 
     totK15 =0
     totK16 =0 

     totK17 =0
     totK18 =0
     totK19 =0
     totK20 =0
     totK21 =0
     totK22 =0
     totK23 =0
     totK24 =0

    document.body.style.backgroundImage=" url(./imagens/backLigaJust.jpg)"
    document.body.style.backgroundColor=" black"



})



cbtn[3].addEventListener("click",function(){

    if(historico.length>=1){
hist.innerHTML=historico.join("<br>")
}else{
    alert("Não há compras")
}

})

visu.addEventListener("click", function () {

 

    totC = (totK1 + totK2+ totK3 + totK4 + totK5 + totK6 + totK7 + totK8 + 
    totK9 + totK10+ totK11 + totK12 + totK13 + totK14 + totK15 + totK16 +
    totK17 + totK18+ totK19 + totK20 + totK21 + totK22 + totK23 + totK24)


    
    if(totC>0){
    novaCompra()
   
    
    document.body.style.backgroundImage="url(./imagens/backBatman.gif)"
    document.body.style.backgroundColor="black"

    cbtn[3].style.display="none"
    cbtn[0].style.display="inline-block"
    cbtn[1].style.display="inline-block"
 
   
  
   
totalC=somaitens.reduce(function(soma,i){
    return soma+i
})

    totReais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totalC)

 
    cadastro.style.display="block"
    dc.style.display="none"
    shop.style.display="none"
    descShop.innerHTML="Informe seus dados para proseguir "
    itens.map((p,i)=>{carrinho.innerHTML+= i+1 +"."+ p + "<br>"}) 
    total.innerHTML="Total da compra "+totReais 
     
        visu.style.display = "none"
}else{
    eSound.play()
    alert("Nenhum item selecionado")
}

})

 function novaCompra(){

    pr1.style.display = "inline-block"
    btn[0].style.display = "block"
    qt[0].style.display = "inline-block"
    comp[0].innerHTML = ""


    pr2.style.display = "inline-block"
    btn[1].style.display = "block"
    qt[1].style.display = "inline-block"
    comp[1].innerHTML = ""


    pr3.style.display = "inline-block"
    btn[2].style.display = "block"
    qt[2].style.display = "inline-block"
    comp[2].innerHTML = ""

    pr4.style.display = "inline-block"
    btn[3].style.display = "block"
    qt[3].style.display = "inline-block"
    comp[3].innerHTML = ""

    pr5.style.display = "inline-block"
    btn[4].style.display = "block"
    qt[4].style.display = "inline-block"
    comp[4].innerHTML = ""

    pr6.style.display = "inline-block"
    btn[5].style.display = "block"
    qt[5].style.display = "inline-block"
    comp[5].innerHTML = ""

    pr7.style.display = "inline-block"
    btn[6].style.display = "block"
    qt[6].style.display = "inline-block"
    comp[6].innerHTML = ""

    pr8.style.display = "inline-block"
    btn[7].style.display = "block"
    qt[7].style.display = "inline-block"
    comp[7].innerHTML = ""

    pr9.style.display = "inline-block"
    btn[8].style.display = "block"
    qt[8].style.display = "inline-block"
    comp[8].innerHTML = ""


    pr10.style.display = "inline-block"
    btn[9].style.display = "block"
    qt[9].style.display = "inline-block"
    comp[9].innerHTML = ""


    pr11.style.display = "inline-block"
    btn[10].style.display = "block"
    qt[10].style.display = "inline-block"
    comp[10].innerHTML = ""

    pr12.style.display = "inline-block"
    btn[11].style.display = "block"
    qt[11].style.display = "inline-block"
    comp[11].innerHTML = ""

    pr13.style.display = "inline-block"
    btn[12].style.display = "block"
    qt[12].style.display = "inline-block"
    comp[12].innerHTML = ""

    pr14.style.display = "inline-block"
    btn[13].style.display = "block"
    qt[13].style.display = "inline-block"
    comp[13].innerHTML = ""

    pr15.style.display = "inline-block"
    btn[14].style.display = "block"
    qt[14].style.display = "inline-block"
    comp[14].innerHTML = ""

    pr16.style.display = "inline-block"
    btn[15].style.display = "block"
    qt[15].style.display = "inline-block"
    comp[15].innerHTML = ""

    pr17.style.display = "inline-block"
    btn[16].style.display = "block"
    qt[16].style.display = "inline-block"
    comp[16].innerHTML = ""


    pr18.style.display = "inline-block"
    btn[17].style.display = "block"
    qt[17].style.display = "inline-block"
    comp[17].innerHTML = ""


    pr19.style.display = "inline-block"
    btn[18].style.display = "block"
    qt[18].style.display = "inline-block"
    comp[18].innerHTML = ""

    pr20.style.display = "inline-block"
    btn[19].style.display = "block"
    qt[19].style.display = "inline-block"
    comp[19].innerHTML = ""

    pr21.style.display = "inline-block"
    btn[20].style.display = "block"
    qt[20].style.display = "inline-block"
    comp[20].innerHTML = ""

    pr22.style.display = "inline-block"
    btn[21].style.display = "block"
    qt[21].style.display = "inline-block"
    comp[21].innerHTML = ""

    pr23.style.display = "inline-block"
    btn[22].style.display = "block"
    qt[22].style.display = "inline-block"
    comp[22].innerHTML = ""

    pr24.style.display = "inline-block"
    btn[23].style.display = "block"
    qt[23].style.display = "inline-block"
    comp[23].innerHTML = ""

 }

