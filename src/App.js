import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtUser : '',
            txtPass : '',
            txtDes : '',
            stlgender : 0,
            rdLanguage : 'vn',
            chbStatus : true
        };  
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    render(){         
    return(
        <div className="container">
            <div className="card bg-primary|secondary|success|danger|warning|info|light|dark text-primary|secondary|success|danger|warning|info|light|dark">
              <div className="card-header">Form</div>
              <div className="card-body">
                    <form onSubmit = { this.onHandleSubmit }>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input  type="email" 
                                        className="form-control" 
                                        id="inputEmail4" 
                                        placeholder="Email"
                                        name = "txtUser"
                                        onChange= { this.onHandleChange }
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Password</label>
                                <input  type="password" 
                                        className="form-control" 
                                        id="inputPassword4" 
                                        placeholder="Password"
                                        name = "txtPass"
                                        onChange= { this.onHandleChange }
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Descibe</label>
                                <div className="input-group input-group-sm|input-group-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">With textarea</span>
                                    </div>
                                    <textarea   className="form-control" 
                                                aria-label="With textarea"
                                                name = "txtDes"
                                                onChange = { this.onHandleChange }
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Descibe</label>
                                <select     className="custom-select custom-select-lg|custom-select-sm" 
                                            name = "stlgender" 
                                            value={this.state.stlgender}
                                            onChange = {this.onHandleChange}>
                                    <option defaultValue>Open this select menu</option>
                                    <option value={0}>Nữ</option>
                                    <option value={1}>Nam</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Radio Button</label>
                                <div className="form-check">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="rdLanguage" 
                                            value="vn" 
                                            onChange = {this.onHandleChange}
                                            checked = {this.state.rdLanguage === "vn"}
                                            />
                                    <label className="form-check-label">
                                        Tiếng Việt
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="rdLanguage"  
                                            value="en" 
                                            onChange = {this.onHandleChange}
                                            checked = {this.state.rdLanguage === "en"}
                                            />
                                    <label className="form-check-label">
                                        Tiếng Anh
                                    </label>
                                </div>
                            </div>
                            <div className="form-check">
                                <input  className="form-check-input" 
                                        type="checkbox" 
                                        value={true} 
                                        name = "chbStatus"
                                        onChange = {this.onHandleChange}
                                        checked = {this.state.chbStatus === true}/>
                                <label className="form-check-label">
                                    Remind me later
                                </label>
                            </div>
                        </div>
                      <button type="submit" className="btn btn-success btn-sm">Sign in</button>&nbsp;
                      <button type="reset" className="btn btn-light btn-sm">Reset</button>
                    </form>
              </div>
            </div>
        </div>
    );
    }
}
export default App;
