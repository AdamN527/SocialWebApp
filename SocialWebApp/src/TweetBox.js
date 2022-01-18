import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://cdn.oneesports.gg/cdn-data/2021/12/Anime_AttackonTitan_Season4_Part2_Eren_Featured-450x253.jpg'></Avatar>
                    <input placeholder="What's Happening?"></input>
                </div>
                <input 
                className='tweetBox__imageInput'
                placeholder='Optional: Enter Image URL'
                type='text'/>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
