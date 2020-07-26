import React ,{Component} from 'react'
import './calculator.css'



class Calculator extends Component{
    constructor(){
        super()
        this.state={
            result:""
        }
    }

    clear=()=>{
        
            try{
                this.setState({result:this.state.result.slice(0,-1)})
            }catch(e){
                this.setState({result:""})
            }
            
        
    }

    allClear=()=>{
        this.setState({
            result:""
        })
    }

   onClick=(button)=>{
       if(button ==="="){
           return this.calculate()

       }else if (button==="AC"){
           return this.allClear()
       }else if(button ==="C"){
           return this.clear()
       }
       
       else{
           this.setState({
               result:this.state.result+button
           })
       }
   }

   calculate=()=>{
       try{
           this.setState({
               result: (eval(this.state.result) )
           })
       }catch(e){
           this.setState({
               result:"error"
           })
       }
   }
    render(){
        return(
            <div >
                <div class="shadow-lg  mb-5 bg-white rounded">
                    <nav class="navbar navbar-dark bg-dark">
                        <div className='custom-nav'> Calculator 2020 vr2.31</div>
                    </nav>
                </div>

                <div className='container'>
                <div className="calculator card shadow-lg  mb-5 bg-white rounded">

                    <div class="calculator-screen"  >
                        {this.state.result}
                    </div>
                    <div class="calculator-keys">
                    
                    <button type="button" class="operator" value="+" onClick={e=> this.onClick(e.target.value)}>+</button>
                    <button type="button" class="operator" value="-" onClick={e=> this.onClick(e.target.value)}>-</button>
                    <button type="button" class="operator" value="*" onClick={e=> this.onClick(e.target.value)}>&times;</button>
                    <button type="button" class="operator" value="/" onClick={e=> this.onClick(e.target.value)}>&divide;</button>

                    <button type="button" value="7" onClick={e=> this.onClick(e.target.value)}>7</button>
                    <button type="button" value="8" onClick={e=> this.onClick(e.target.value)}>8</button>
                    <button type="button" value="9" onClick={e=> this.onClick(e.target.value)} >9</button>


                    <button type="button" value="4" onClick={e=> this.onClick(e.target.value)}>4</button>
                    <button type="button" value="5" onClick={e=> this.onClick(e.target.value)}>5</button>
                    <button type="button" value="6" onClick={e=> this.onClick(e.target.value)}>6</button>


                    <button type="button" value="1" onClick={e=> this.onClick(e.target.value)}>1</button>
                    <button type="button" value="2" onClick={e=> this.onClick(e.target.value)} >2</button>
                    <button type="button" value="3" onClick={e=> this.onClick(e.target.value)}>3</button>


                    <button type="button" value="0" onClick={e=> this.onClick(e.target.value)}>0</button>
                    <button type="button" class="decimal" value="." onClick={e=> this.onClick(e.target.value)}>.</button>
                    <button type="button" class="all-clear" value="AC" onClick={e=> this.onClick(e.target.value)}>AC</button>
                    <button type='button' className="all-clear" value="C" onClick={e=> this.onClick(e.target.value)}>C</button>
                    <button type="button" class="equal-sign operator" value="=" onClick={e=> this.onClick(e.target.value)}>=</button>
                    
                    </div>
                </div>
            </div>
            </div>
           
        )
    }
}

export default Calculator;