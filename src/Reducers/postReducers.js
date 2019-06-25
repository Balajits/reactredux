const postReducers = (state=[], action) => {
    switch(action.type){
        case 'create':
            return state.concat([action.data]);
        case 'delete':
            return state.filter((post)=>post.id !==action.id);  
        case 'edit':
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post); 
        case 'update':
                return state.map((post)=>{
                    if(post.id === action.id) {
                      return {
                         ...post,
                         title:action.data.newTitle,
                         message:action.data.newMessage,
                         editing: !post.editing
                      }
                    } else return post;
                  })
        default:
        return state;
    }

}
export default postReducers;