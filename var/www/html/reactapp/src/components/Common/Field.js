import React, {Component} from 'react';

class Field extends Component{
    render(){
        return(
            
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input 
                        className="form-control" 
                        id={this.props.name} 
                        type={this.props.type}
                        placeholder={this.props.placeholder} 
                        required="required" 
                        data-validation-required-message={"Please enter your "+this.props.name+"."} 
                        name= {this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                    :
                    <textarea 
                        className="form-control" 
                        id={this.props.name} 
                        placeholder={this.props.placeholder}
                        required="required" 
                        data-validation-required-message={"Please enter your "+this.props.name+"."} 
                        name= {this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                }
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.erros) &&
                        <span>{this.props.erros}</span>
                    }
                </p>
            </div>
        )
    }   
}

export default Field;