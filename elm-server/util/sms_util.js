const Core = require('@alicloud/pop-core')

function makeSmsCaptcha (bound) {
    let res = ''
    for(let i = 0; i < bound; i++){
        res += (Math.floor(Math.random()*10) + '')
    }
    return res
}

function sendSmsCaptcha (phoneNumber, smsCode) {
    let client = new Core({
        accessKeyId: 'LTAI4G7PBCz3kyrhv5ZRkHQK',
        accessKeySecret: 'Xve05y1uDq9zMviGLvt1KDDRRvdIhC',
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    })
      
    let params = {
        "RegionId": "cn-hangzhou",
        "PhoneNumbers": phoneNumber,
        "SignName": "ele",
        "TemplateCode": "SMS_195225815",
        "TemplateParam": `\{\"code\":\"${smsCode}\"\}`
    }
      
    let requestOption = {
        method: 'POST'
    }
      
    client.request('SendSms', params, requestOption).then((result) => {
        console.log('短信验证码发送成功')
        console.log(JSON.stringify(result))
    }, (ex) => {
        console.log('短信验证码发送失败')
        console.log(ex)
    })    
}

module.exports = {
    makeSmsCaptcha,
    sendSmsCaptcha
}