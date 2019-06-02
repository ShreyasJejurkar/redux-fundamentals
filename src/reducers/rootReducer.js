const initState = {
    posts: [
        {
            id: 1,
            title: 'Hello World',
            body: 'Dummy text 1'
        },
        {
            id: 2,
            title: 'Hello World 2',
            body: 'Dummy text 2'
        },
        {
            id: 3,
            title: 'Hello World 3',
            body: 'Dummy text 3'
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
      return {
        ...state,
        posts: state.posts.filter(post =>  action.id != post.id)
      }
    }
}

export default rootReducer;