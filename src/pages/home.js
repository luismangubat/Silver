import React from 'react'
import {PostMasonry} from '../components/common'
import trending from '../assets/mocks/trending'
//import featured from '../assets/mocks/featured'


// Congfigurations for new trending Masonry Layout 
const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}


// Muerge styless for each post 
const mergeStyles = function (posts, config ){
    posts.forEach((post, index) => {
        post.styles = config[index]
    })
}

mergeStyles(trending, trendingConfig)
export default function Home () {
    return (
    <section className = 'container home'>
        <div className='row'>
            <h2>Trending Post</h2>
            <PostMasonry posts={trending} columns={3}/>
        </div>
    </section>
    )
}