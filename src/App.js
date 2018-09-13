import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import withImageProcess from './withImageProcess';

export default withImageProcess(class App extends Component {

        constructor(props) {
            super(props);
            this.handleTextareaChange = this.handleTextareaChange.bind(this);
            this.state = {
                textareaValue: '',
                base64: ''
            }
        }

        handleTextareaChange = (e) => {
            this.setState({
                textareaValue: e.target.value
            })
        }

        handleButtonClick() {
            console.log(this.props.imageResize(this.state.textareaValue))
        }

  render() {
      return (
      <div className="App">
        <main>
            <div>
                <textarea name="base64" id="base64" cols="200" rows="10" onChange={this.handleTextareaChange}/>
            </div>
          <div>
              <img src={this.state.textareaValue} alt={'base64'}/>
          </div>
          <div>
              <Button type="primary" onClick={() => this.handleButtonClick()}>Primary</Button>
          </div>
          <span id="old" style={{width:200}}>

          </span>
        </main>
      </div>
    );
  }
})

/*function imageResize(img) {
    const img1 = img;
    function getBase64Image(img) {
        const canvas = document.createElement("canvas");
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
}*/

