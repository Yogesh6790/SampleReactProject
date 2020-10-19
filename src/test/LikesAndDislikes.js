import React, {useCallback} from 'react';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import {incrementLikes, incrementDisLikes}  from '../store/action/likes'

const LikesAndDislikes = () => {
    const likes = useSelector(state => state.likesAndDislike.likes);
    const dislikes = useSelector(state => state.likesAndDislike.dislikes);

    const dispatch = useDispatch();

    const likesCounterHandler = useCallback(() => {
        console.log('Dispatching Likes Counter...');
        dispatch(incrementLikes())
    }, [dispatch]); 

    const dislikesCounterHandler = useCallback(() => {
        console.log('Dispatching dislikes Counter...');
        dispatch(incrementDisLikes())
    }, [dispatch]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <fieldset style={{width: '500px'}}>
                <legend>
                    <strong>This is a Likes and DisLikes Counter Component</strong>
                </legend>
                <div style={{marginLeft: '100px'}}>
                    <strong  style={{ marginTop: '10px' }} >LIKES</strong> : {likes}
                    <strong  style={{ marginTop: '10px', marginLeft: '50px' }} >DISLIKES </strong> : {dislikes}
                </div>
                <div style={{marginLeft: '100px'}}>
                    <AiOutlineLike size='30px' style={{ marginTop: '10px', marginRight: '100px', marginLeft: '15px' }} cursor='pointer' onClick={likesCounterHandler}/>
                    <AiOutlineDislike size='30px' style={{ marginTop: '10px' }} cursor='pointer' onClick={dislikesCounterHandler}/>
                </div>
            </fieldset> 
        </div>
    );
}


export default LikesAndDislikes;