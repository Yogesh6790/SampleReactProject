export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const INCREMENT_DISLIKES = 'INCREMENT_DISLIKES';

export const incrementLikes = () => {
    console.log('Increment likes action dispatching...') 
    return { type: INCREMENT_LIKES}; 
}

export const incrementDisLikes = () => {
    console.log('Increment Dislikes action dispatching...') 
    return { type: INCREMENT_DISLIKES}; 
}

