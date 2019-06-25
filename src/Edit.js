import React from 'react';
import { connect } from 'react-redux';

 class Edit extends React.Component {
     handleEdit = (e) => {
         e.preventDefault();
         const newTitle=this.getTitle.value;
         const newMessage=this.getMessage.value;
         const data = {
             id:new Date(),
             newTitle,
             newMessage
         }
         this.props.dispatch({type:'update', id:this.props.post.id, data:data})
     }
     render() {
         return (
             <div>
                 <form onSubmit = {this.handleEdit} >
                     <input type="text" class="form-control" ref = {(input) => this.getTitle = input} 
                     defaultValue={this.props.post.title} placeholder="Enter a Title"/><br/><br/>
                     <input type="text" class="form-control" ref={(input) => this.getMessage = input}
                     defaultValue={this.props.post.message} placeholder="Enter a Message"/>
                     <button class="btn btn-outline-primary btn-lg">Update</button>
                 </form>

             </div>

         );
     }
 }
 export default connect() (Edit);