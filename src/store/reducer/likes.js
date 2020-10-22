import React from 'react'
import {ADD_COMMENT,INCREMENT_LIKES, INCREMENT_DISLIKES} from '../action/likes'

const initialState = {
    comments : []
}

const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const cmts = state.comments;
            const msgWithLikesAndDislikes = {
                id : action.index,
                message: action.msg,
                likes: 0,
                dislikes: 0
            }
            cmts.push(msgWithLikesAndDislikes);
            console.log(cmts);
            return { ...state, comments: cmts };
        case INCREMENT_LIKES:
            const i = action.index;
            const cmnts = state.comments;
            const cmnt = state.comments[i];
            cmnt.likes = cmnt.likes + 1;
            cmnts[i] = cmnt;
            console.log('Increment Likes : id ' + cmnts[i].id+ ', message : '+cmnts[i].message+', likes : '+cmnts[i].likes+', dislikes :'+cmnts[i].dislikes);
            return { ...state, comments: cmnts };
        case INCREMENT_DISLIKES:
            const index = action.index;
            const comments = state.comments;
            const comment = state.comments[index];
            comment.dislikes = comment.dislikes + 1;
            comments[index] = comment;
            console.log('Increment DisLikes : id ' + comments[index].id+ ', message : '+comments[index].message+', likes : '+comments[index].likes+', dislikes :'+comments[index].dislikes);
            return { ...state, comments: comments };
        default:
            return state;
    }
}

export default likesReducer;