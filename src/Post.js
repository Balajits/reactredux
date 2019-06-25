import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {
    render() {
        return( 
            <div>
                <table class="table">
                    <tr>
                        <td> <h4>{this.props.post.title}</h4> </td>
                        <td> <i> {this.props.post.message} </i> </td>
                        <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                         <button class="btn btn-outline-warning btn-lg" onClick={() => this.props.dispatch({type:'edit',id:this.props.post.id})}>Edit</button>
                         <button class="btn btn-outline-danger btn-lg" onClick={() => this.props.dispatch({type:'delete',id:this.props.post.id})}>Delete</button>
                         </div>
                        </td>
                    </tr>           
                </table>

            </div>

        );
    }
}
export default connect() (Post);