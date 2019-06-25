import React from 'react';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
class PostForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title =this.getTitle.value;
        const message = this.getMessage.value;
        const data={
            id:new Date(),
            title,
            message,
            editing:false
        }
        console.log(data);
        this.props.dispatch({
            type:'create',
            data
        });
        this.getTitle.value='';
        this.getMessage.value='';
    }
    render() {
        return( 
            <div>
                <h2>Post A Form </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                       <label>Title</label>
                       <input type="text" class="form-control" id="title" required placeholder="enter Your Title" ref={(input)=>this.getTitle=input} />
                    </div>
                   
                    <div >  
                         <label >Description</label>
                         <input type="textarea" class="form-control" id="desc" required placeholder="enter Your Description" ref={(input)=>this.getMessage=input} />
                    </div> <br/>
                <button class="btn btn-outline-success btn-lg">Post</button>
               
                </form>

            </div>

        );
    }
}
export default connect() (PostForm);