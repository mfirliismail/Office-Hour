const express = require('express')

const app = express()
const port = 3000
const {regencies, provinces} = require("./location (1)")

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/regencies', (req, res) => {


    res.status(200).json({
        name: req.body.name,
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port} ...`)
})













// function getProvinceNameById(provinceId) {

//    for(const province of provinces){
//      if(province.id == provinceId){
//          return province.name
//      }
       
     
//    }

//    return null


// }

function getIdByProvinceName(provinceName){
    for(const province of provinces){
        if(province.name == provinceName){
            return province.id
        }
    }
    return null
}


function getRegenciesByProvinceName(provinceName) {

    const id = getIdByProvinceName(provinceName)

    const list = []
    console.log(`Regencies dari ${provinceName} yang mana idnya adalah ${id}: `)
    
        for(const regensi of regencies){
            if(regensi.province_id == id){
                list.push(regensi.name)
            }
            
        }
        return list
    
    
}

function getProvinceIdName(name){
    for(let i = 0; i < provinces.length; i++){
        const province = provinces[i]
        const provinceName = province.name
            if(provinceName.includes(name)){
                return province.id
            }
        
    }
}
function getProvinceName(name){
    let list = []
    for(let i = 0; i < provinces.length; i++){
        const province = provinces[i]
        const provinceName = province.name.toLocaleLowerCase()
            if(provinceName.includes(name.toLocaleLowerCase())){
                list.push(province.name)
            }
        
    }
    return list
}

// console.log(getProvinceIdName('jakarta'))
// console.log(getRegenciesByProvinceName("JAWA BARAT"))
console.log(getProvinceName('seLaTan'))