import React from 'react';



const withImageProcess = InnerComponent => class extends React.Component{


    render(){
        const props = {
            imageResize: img =>imageResize(img),
            ...this.props
        }
        return <InnerComponent {...props}/>
    }

};


function imageResize(img) {
    const img1 = img;
    function getBase64Image(img) {
        const canvas = document.createElement("canvas");
        if (img.width > 1000 && img.height > 1000) {
            if (img.width > img.height) {
                const coe = img.width/1000;
                img.height = img.height / coe;
                img.width = 1000;
            }else {
                const coe = img.height/1000;
                img.width = img.width / coe;
                img.height = 1000
            }
        }
        if (img.width > 1000 && img.height < 1000) {
            const coe = img.width/1000;
            img.height = img.height / coe;
            img.width = 1000
        }
        if (img.width < 1000 && img.height > 1000) {
            const coe = img.height/1000;
            img.width = img.width / coe;
            img.height = 1000
        }
        canvas.width = img.width*0.5;
        canvas.height = img.height*0.5;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width*0.5, img.height*0.5);
        const ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
        const dataURL = canvas.toDataURL("image/"+ext);
        return dataURL;
    }
    const image = new Image();
    image.src = img1;
    image.onload = function () {
        const base64 = getBase64Image(image);
        document.getElementById('old').innerText = base64;
        console.log(base64.length)
    }
}

export default withImageProcess;