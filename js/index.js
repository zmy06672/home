var arr  = [
    {
        reason:'做核酸',
        type:'事假'
    },
    {
        reason:'外出练车',
        type:'事假'
    },
    {
        reason:'身份证过期，补办身份证',
        type:'事假'
    },
    {
        reason:'办理银行卡',
        type:'事假'
    },
    {
        reason:'电脑重装系统',
        type:'事假'
    },
    {
        reason:'电脑长时间未清灰导致卡顿，现外出清灰',
        type:'事假'
    },
    {
        reason:'牙龈发炎需要到校外就诊',
        type:'病假'
    },
    {
        reason:'长智齿，需要拔牙',
        type:'病假'
    },
    {
        reason:'急性肠胃炎，需要到医院治疗',
        type:'病假'
    }
]

function Messages (obj){
    var elm = document.querySelector('table').firstElementChild.firstElementChild;
    var date = new Date();
    var a = obj[parseInt(date.getDate()%9)]

    elm.firstElementChild
        .nextElementSibling
        .innerHTML = a.reason;
    elm.nextElementSibling
        .firstElementChild
        .nextElementSibling
        .innerHTML = a.type
    elm.nextElementSibling
        .nextElementSibling
        .firstElementChild
        .nextElementSibling
        .innerHTML = `${date.getFullYear()}-
            ${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth()}-
            ${date.getDate()<10?'0'+date.getDate():date.getDate()}&nbsp
            ${(date.getHours()-3)<10?'0'+(date.getHours()-3):(date.getHours()-3)}:
            ${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}
            `
    elm.nextElementSibling
        .nextElementSibling
        .nextElementSibling
        .firstElementChild
        .nextElementSibling
        .innerHTML = `${date.getFullYear()}-
            ${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth()}-
            ${date.getDate()<10?'0'+date.getDate():date.getDate()}&nbsp
            ${(date.getHours()+5)<10?'0'+(date.getHours()+5):(date.getHours()+5)>24?'23':(date.getHours()+5)}:
            ${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}
            `
}

Messages(arr)