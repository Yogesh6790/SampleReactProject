import React, {useState, useCallback, useEffect} from 'react';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import {addComment,incrementLikes, incrementDisLikes}  from '../store/action/likes'

const LikesAndDislikes = () => {
    const commentsInStore = useSelector(state => state.likesAndDislike.comments);
    const [comment, setComment] = useState('');
    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch();

    const addCommentHandler = (text) => {
        setComment(text);
    };

    const resetCommentHandler = () => {
        setComment('');
    };

    const submitCommentHandler = async () => {
        setLoaded(false);
        await dispatch(addComment(comment, commentsInStore.length));
        setLoaded(true);
    };

    const likesCounterHandler = async (index) => {
        setLoaded(false);
        await dispatch(incrementLikes(index));
        setLoaded(true);
    }; 

    const dislikesCounterHandler = async (index) => {
        setLoaded(false);
        await dispatch(incrementDisLikes(index))
        setLoaded(true);
    };


    const commentsList = commentsInStore.map(element => {
        return (<div key={element.id} style={{ margin: '10px', marginLeft: '510px', border: '1px solid grey', width: '400px' }}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontStyle: 'italic', color: 'blue'}}>{element.message}</span>
            </div>
            <div style={{ marginLeft: '100px' }}>
                <strong style={{ marginTop: '10px', fontSize: '15px' }} >LIKES</strong> : {element.likes}
                <strong style={{ marginTop: '10px', marginLeft: '50px',fontSize: '15px'  }} >DISLIKES </strong> : {element.dislikes}
            </div>
            <div style={{ marginLeft: '100px' }}>
                <AiOutlineLike size='30px' style={{ marginTop: '10px', marginRight: '100px', marginLeft: '15px' }} cursor='pointer' onClick={() => likesCounterHandler(element.id)} />
                <AiOutlineDislike size='30px' style={{ marginTop: '10px' }} cursor='pointer' onClick={() => dislikesCounterHandler(element.id)} />
            </div>
        </div>)
    });

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{color: '#4284f5'}}>Comments Likes/Dislikes Tracker</h1>
            </div>
            {commentsList.length > 0 ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3 style={{color: '#1b7a40'}}>Your Comments</h3></div> : null}
            {commentsList}
            <div style={{marginLeft: '510px'}}>
                <div>
                    <h4></h4>
                </div>
                <div>
                    <textarea style={{marginTop: '10px', width: '400px'}} placeholder='Enter your comment' value={comment} onChange={event => addCommentHandler(event.target.value)}/>
                </div>
                <div style={{ marginLeft: '100px' }}>
                        <button style={{margin : '10px'}} type="button" onClick={() => resetCommentHandler()} >RESET</button>
                        <button style={{margin : '10px'}} type="button" onClick={() => submitCommentHandler()} >SUBMIT</button>
                </div>
            </div>
        </div>
    );
}


export default LikesAndDislikes;