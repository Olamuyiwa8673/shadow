const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['2349010895477'] //ur owner number
global.ownernomer = "2349010895477" //ur owner number2
global.ownername = "𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴" //ur owner name
global.ytname = "Not on youtube!!" //ur yt chanel name
global.socialm = "GitHub: olamuyiwa8673" //ur github or insta name
global.location = "Nigeria, Edo, Benin city" //ur location

//new
global.botname = "𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴"
global.ownernumber = '2349010895477'
global.ownername = '𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴'
global.ownerNumber = ["2349010895477@s.whatsapp.net"]
global.ownerweb = "https://github.com/Cipher0071"
global.websitex = "https://github.com/Cipher0071"
global.wagc = "https://chat.whatsapp.com/HQ26izcpZ7yAWXm2yyExSX"
global.themeemoji = '🪀'
global.wm = "Shadow Bot Inc."
global.botscript = 'https://github.com/Cipher0071/shadow' //script link
global.packname = "Sticker By"
global.author = "🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪\n\n"
global.creator = "2349010895477@s.whatsapp.net"
global.prefa = ['#']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./Assets/Media2/theme/h.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Assets/Media2/theme/g.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Assets/Media2/theme/e.jpg") //ur error pic
global.thumb = fs.readFileSync("./Assets/Media2/theme/r.jpg") //ur thumb pic
global.defaultpp = 'https://i.pinimg.com/originals/cc/fe/af/ccfeaff53e2fada3120942721cfab185.jpg' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
