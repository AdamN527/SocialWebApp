import React, {useState} from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Adam Najib',
            username: 'adamnajib_',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media-exp1.licdn.com/dms/image/C5635AQGBLbEKkYFlpA/profile-framedphoto-shrink_200_200/0/1619199458586?e=1642744800&v=beta&t=XevesIaIoz8fJEB2m1wnvADqHlwfwXFY_0jvW1DLVL4"
        })  

        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <input 
                    onChange={e=> setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's Happening?"></input>
                </div>
                <input
                onChange = {e => setTweetImage(e.target.value)}
                value = {tweetImage}
                className='tweetBox__imageInput'
                placeholder='Optional: Enter Image URL'
                type='text'/>
                <Button onClick = {sendTweet} type = 'submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
