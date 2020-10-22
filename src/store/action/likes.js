export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const INCREMENT_DISLIKES = 'INCREMENT_DISLIKES';
export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (message, index) => {
    console.log('Add comments dispatching...') 
    console.log(message) 
    return { type: ADD_COMMENT, msg : message, index : index}; 
}

export const incrementLikes = (index) => {
    console.log('Increment likes action dispatching...') 
    return { type: INCREMENT_LIKES, index: index}; 
}

export const incrementDisLikes = (index) => {
    console.log('Increment Dislikes action dispatching...') 
    return { type: INCREMENT_DISLIKES, index: index}; 
}

