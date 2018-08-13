
import React,{Component} from 'react';
import './css/signup.css';
class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
          type: 'inputtype'
        }
        this.showHide = this.showHide.bind(this);
      }
      showHide(){ 
        this.setState({
          type: this.state.type === 'inputtype' ? 'password' : 'inputtype'
        })  
      }
    render(){
        return(
        <div className="sign">
            <div > 
               <label> Register a new account</label><br/>
                <p>If you're new to Mathruka, register for an account here...</p><br/>
                <p>Already a member?  <code> Sign in>> </code></p>
              <hr id="hr"/>
            </div>
         <form   className="form-horizontal"> 
            <p id="h1">Personal Details:</p>
            <p  id="field"> * Fields Are Mandatory</p>
          <div className ="form-group col-8">
            <label className=" col-sm-offset-1 col-sm-4"> <label id="field"> * </label> Title:</label>  
            <select className ="form-control col-sm-offset-1">
                <option>Select One</option>
                <option>Miss</option>
                <option>Ms</option>
                <option>Mrs</option>
                <option>Mr</option>
             </select>  
         </div>
         <div className ="form-group col-8 ">
          <label className=" col-sm-offset-1 col-sm-4"><label id="field">*</label> FirstName:</label> 
            <input type="text"   className="form-control col-sm-offset-1 " placeholder="FirstName" required/>           
         </div>
         <div className ="form-group col-8">
            <label className="col-sm-offset-1 col-sm-4  ">MiddleName:</label>   
             <input type="text" className="form-control col-sm-offset-1 " placeholder="MiddleName"/>
         </div>   
         <div className ="form-group col-8">
            <label className=" col-sm-offset-1 col-sm-4 "><label id="field">*</label> LastName:</label>
             <input type="text"  className="form-control col-sm-offset-1 " placeholder="LastName" required/>
         </div> 
         <div className ="form-group col-8">
          <label className=" col-sm-offset-1 col-sm-4"> <label id="field">*</label> Mobile Number:</label>   
            <input type="number"  className="form-control col-sm-offset-1 "  placeholder="123456789" required/>
         </div> 
         <div className ="form-group col-8">
           <label className=" col-sm-offset-1 col-sm-4">Address:</label>
             < textarea className =" form-control col-sm-offset-1 " rows="4"/>
         </div>
         <p id="h1">Account Details:</p>
         <div className ="form-group col-8">
          <label className=" col-sm-offset-1 col-sm-4"> <label id="field">*</label> E-mail:</label>
           <input type="text"  className=" form-control col-sm-offset-1 " required/>
         </div> 
         <div className="form-group col-8">
          <label  className=" col-sm-offset-1 col-sm-4"><label id="field">* </label> SetPassword :</label>
           <input type={this.state.type} className="form-control col-sm-offset-1 "  />
            <span  className=" col-sm-offset-1 form-group-btn "  onClick={this.showHide}>{this.state.type === 'inputtype' ? 'Hide' : 'Show'}</span>
         </div>
         <div className="form-group col-8"> 
            <div className="col-sm-offset-6 col-sm-6">
              <button type="submit" className="btn btn-success">Create Account<i className="fa fa-fw fa-chevron-right"></i></button>
            </div>
         </div>
         <div>
             <hr id="hr"/>
                <label>
                    Please make sure you read our <code>terms and conditions</code> opens in new window because you're agreeing by creating a Matruka account.
                </label>
         </div>
        </form>
    </div>
        );
    }
}
export default Signup;