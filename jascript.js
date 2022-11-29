

let nm = document.getElementById("nm")
let tel = document.getElementById("tel")
let email = document.getElementById("email")
let es = document.getElementById("es")
let cmt = document.getElementById("cmt")


let shop=document.getElementById("shop")
let cadastro=document.getElementById("cadastro")
let principal=document.getElementById("principal")
let pr1 = document.getElementById("pr1")
let pr2 = document.getElementById("pr2")
let pr3 = document.getElementById("pr3")
let pr4 = document.getElementById("pr4")
let pr5 = document.getElementById("pr5")
let pr6 = document.getElementById("pr6")
let pr7 = document.getElementById("pr7")
let pr8 = document.getElementById("pr8")
let cbtn=document.getElementsByClassName("cbtn")
let qt = document.getElementsByClassName("qt")
let comp = document.getElementsByClassName("comp")
let kit=document.getElementsByClassName("kit")
let hist=document.getElementById("hist")
let rmr=document.getElementById("rmr")
let brmr=document.getElementById("brmr")
let rev=document.getElementById("rev")

let btn = document.getElementsByClassName("btn")
let bev = document.getElementById("bev")

let descricao = document.getElementById("descricao")

let nomeC = document.getElementById("nomeC")
let kit1 = document.getElementById("kit1")
let kit2 = document.getElementById("kit2")
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

let k1 = 49.85
let quantk1
let totK1 = 0


let k2 = 19.90
let quantk2
let totK2 = 0


let k3 = 19.90
let quantk3
let totK3 = 0

let k4 = 180.99
let quantk4
let totK4 = 0

let k5 = 139.50
let quantk5
let totK5 = 0

let k6 = 450
let quantk6
let totK6 = 0

let k7 = 999.90
let quantk7
let totK7 = 0

let k8 = 599.99
let quantk8
let totK8 = 0

let tot1Reais 
let tot2Reais 
let tot3Reais 
let tot4Reais 
let tot5Reais 
let tot6Reais 
let tot7Reais 
let tot8Reais 

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
            cmt.value=""

           principal.style.display="flex"
           visu.style.display="block"
           shop.style.display="none"
           cadastro.style.display="none"  
           
           document.body.style.backgroundImage=" url(./imagens/backLigaJust.jpg)"
           document.body.style.backgroundColor=" rgb(70, 10, 10)"

    }else{
        eSound.play()
        alert("Nome e telefone obrigatórios")
    }
 
})


btn[0].addEventListener("click", function () {

    if (pr1.value > 0 ) {
        
        
        cSound.play()
        
        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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

        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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

        itens.push("HQ-the-flash x"+quantk2+" total: "+ tot2Reais)
        somaitens.push(totK2)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }

})

btn[2].addEventListener("click", function () {
    if (pr3.value > 0 ) {
       
        cSound.play()

        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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
       
        itens.push("HQ-liga-da-justiça x"+quantk3+" total: "+ tot3Reais)
        somaitens.push(totK3)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[3].addEventListener("click", function () {
    if (pr4.value > 0 ) {

        cSound.play()

        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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

        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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

        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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
       
        itens.push("Action-figure-Adão-Negro x"+quantk6+" total: "+ tot6Reais)
        somaitens.push(totK6)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})

btn[6].addEventListener("click", function () {
    if (pr7.value > 0 ) {

        cSound.play()

        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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
       
        itens.push("Action-figure-Batman-Slade x"+quantk7+" total: "+ tot7Reais)
        somaitens.push(totK7)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})


btn[7].addEventListener("click", function () {
    if (pr8.value > 0 ) {

        cSound.play()

        nomeC.innerHTML = ""
        kit[0].innerHTML = ""
        kit[1].innerHTML = ""
        kit[2].innerHTML = ""
        kit[3].innerHTML = ""
        kit[4].innerHTML = ""
        kit[5].innerHTML = ""
        kit[6].innerHTML = ""
        kit[7].innerHTML = ""
        total.innerHTML = ""
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
       
        itens.push("Action-figure-Dark-side x"+quantk8+" total: "+ tot8)
        somaitens.push(totK8)
    } else {
        eSound.play()
        alert("Cadastro inválido ou indefinido")
    }
})


cbtn[0].addEventListener("click",function(){
          fSound.play()

         historico.push("Nome: "+ nome +"|"+" Total comprado "+totReais)
         total.innerHTML="Agradecemos pela sua confiança"
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

    total.innerHTML= itens.join("<br>")+ "<br> Total da compra "+totReais  
    rev.style.display="none" 
})

cbtn[2].addEventListener("click",function(){
  
   
    principal.style.display="none"
    visu.style.display="none"
    descricao.style.display="none"
    hist.innerHTML=""
    itens=[]
    somaitens=[]
    nome=null
    telefone=null

    document.body.style.backgroundImage=" url(./imagens/backBatman.gif)"
    document.body.style.backgroundColor=" black"
    shop.style.display="block"
    cadastro.style.display="block"

})



cbtn[3].addEventListener("click",function(){

    if(historico.length>=1){
hist.innerHTML=historico.join("<br>")
}else{
    alert("Não há compras")
}

})

visu.addEventListener("click", function () {

    totC = (totK1 + totK2+ totK3 + totK4 + totK5 + totK6 + totK7 + totK8).toFixed(2)

    if(totC>0){
    novaCompra()
   
         
    document.body.style.backgroundImage="url(./imagens/backLiga.gif)"
    document.body.style.backgroundColor="black"

    cbtn[3].style.display="none"
    cbtn[0].style.display="inline-block"
    cbtn[1].style.display="inline-block"
 
   
  
   
totalC=somaitens.reduce(function(soma,i){
    return soma+i
})

    totReais=new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(totalC)


    principal.style.display="none"
    descricao.style.display="block"
    total.innerHTML= itens.join("<br>")+ "<br> Total da compra "+totReais   
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

}
