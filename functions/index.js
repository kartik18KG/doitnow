const functions = require('firebase-functions');
const admin = require("firebase-admin")
admin.initializeApp()

const cors = require('cors')({origin:true})
const mailgun = require("mailgun-js")

const DOMAIN
const api_key

const mg = mailgun({
    apikey:api_key,
    domain:DOMAIN
})

exports.notification = functions.firestore
.document("Articles/{articleId}")
.onCreate(async(snap,context)=>{
    admin.auth().listUsers()
})

exports.addAdminRole = functions.https.onCall((data, context)=>{
    // if(context.auth.token.admin !== true){
    //     return { error: 'only admins can add other admin, sucker'}
    // }
    //get user and add custom claims (admin)
    console.log("request recieved")
    console.log(data)
    return admin.auth().getUserByEmail(data.email).then(user=>{
        return admin.auth().setCustomUserClaims(user.uid,{
            admin:true
        })
    }).then(()=>{
        console.log("it is working")
        return{
          message: "it is working"
        }
    }).catch(err=>{
        return err
    })
})

