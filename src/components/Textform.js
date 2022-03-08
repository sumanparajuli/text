import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    let txtArea = document.getElementById('exampleFormControlTextarea1')
    const handleUpClick = (event)=>{
        setText(text.toUpperCase());
        txtArea.value.length>0 && props.showAlert('uppercased', 'Success')
    }
    const handleCaClick = ()=>{
       let final = [];
       let arr = text.split('. ')
        let val = ' '
       for(let i=0; i<arr.length; i++){  
           if(arr[i].slice(1).toUpperCase()){
             val = arr[i].slice(1).toLowerCase()
           }
           final.push(arr[i].charAt(0).toUpperCase()+val)
        }
        let finale = final.join('. ')
        if(text === ''){
            return
        }
        setText(finale);
        txtArea.value.length>0 && props.showAlert('Capitalized', 'Success')
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase());
        txtArea.value.length>0 && props.showAlert('converted to lower case', 'Success')
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpCount = () =>{
        let count = 0;
        let wordcnt = 0;
        wordcnt = text.split(' ').length;
        for(let i=0; i<text.length; i++){
            count +=1;
           
        }
        if(text === ''){
            wordcnt =0;
        }else if(text.endsWith(' ')){
            wordcnt --;
        }
        return [count, wordcnt];
    }
    const handleClear = ()=>{
        setText('');
        
        txtArea.value.length>0 && props.showAlert('Cleared','Woah')
    }
    const handleCut = ()=>{
        let txt = document.getElementById('exampleFormControlTextarea1')
        // navigator.clipboard.writeText(text.value)
        txt.select()
        
        navigator.clipboard.writeText(txt.value).then(() =>{
        
        }).catch(err =>{
            console.log('some error occured');
        })
        document.getSelection().removeAllRanges()
        setText('')
        txtArea.value.length>0 && props.showAlert('Cutted', 'Success')
    }
    const handlePaste = ()=>{
        navigator.clipboard.readText().then(text =>{
            setText(text)
        }).catch(err =>{
            console.log('some error occured');
        })
        txtArea.value.length>0 && props.showAlert('pasted', 'Success')
    }
    const handleCopy = ()=>{
        let text = document.getElementById('exampleFormControlTextarea1')
        text.select()
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text.value)
        txtArea.value.length>0 && props.showAlert('copied', 'Success')
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        txtArea.value.length>0 && props.showAlert('removed extra spaces', 'Success')
    }
    const [text, setText] = useState('');
    const [count, wordcnt] = handleUpCount();
    return (
        <>
        <div className={`text-${props.mode === 'light' ?'dark':'light'}`}>
            <h5 >{props.header}</h5>
        <div className="mb-3">
        <textarea className={`form-control`} value={text} style={{background: `${props.mode==='dark'?'black': 'white'}`,color:`${props.mode ==='dark'?'white':'black'}`}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCaClick}>Capitalize</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCut}>Cut</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlePaste}>Paste</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClear}>Clear</button>
        <p  className='my-2 '>{count} <i>characters</i> and {wordcnt} <i>words</i></p>
        <p className={`text-${props.mode === 'light' ?'dark':'light'}`}><b>Estimated time to read:</b> <i>{(count * 0.003).toFixed(1) < 1 ? 'less than a ': (count*0.003).toFixed(1)} minute </i> </p>
        <div>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Enter something"}</p>
    </div>
    </div>
    
    </>
  )
}

Textform.prototype = {
    header: PropTypes.string.isRequired
}
