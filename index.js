import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {
        name: 'link',
        message: 'Digite o link para QR Code :'
    }
])
.then((res)=>{
    const link = res.link;
    
    var qr_svg = qr.image(link);
    qr_svg.pipe(fs.createWriteStream("qr_image.pdf"))
})
.catch((err) => {
    console.error('Erro ao obter a mensagem', err)
})


