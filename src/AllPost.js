import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Edit from './Edit';

class AllPost extends React.Component {
    render() {
        return( 
            <div>
                <h3>My Posts</h3>
                <hr />
                {/* {console.log(this.props.posts)} */}
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <Edit post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
              

            </div>

        );
    }
}
const mapStateToProps =(state) => {
    return {
        posts:state
    }
}
export default connect(mapStateToProps) (AllPost);