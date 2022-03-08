

export default function About(props) {
   
    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        background: props.mode ==='dark'?'black':'white',

        border: props.mode ==='dark'?'1px solid white':'.3px solid black'
    }
    
    return (
        <div className='container' style={{color: props.mode==='dark'?'white':'black',
    }}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button  style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong> Analyze Your text  </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                                  Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or  

                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use </strong>

                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
