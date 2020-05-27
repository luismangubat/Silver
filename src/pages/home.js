import React from 'react';
import {PostMasonry, MasonryPost, PostGrid} from '../components/common';
import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured';


// Congfigurations for new trending Masonry Layout 
const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },

    1: {
        height: '300px'
    }, 

    3: {
        height:'630px',
        marginLeft: '30px',
        width: '630px'
    }
    
}


// Muerge styless for each post 
const mergeStyles = function (posts, config ){
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = "Luis Mangubat"
        post.description = "Hello Everyone "
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)
 
const lastFeatured = featured.pop()


export default function Home () {
    return (
        <main className = 'home'>
            <section className = 'container'>
                <div className='row'>
                    <h1> Featured Post</h1>
                    <section className = "featured-post-container">
                    <PostMasonry posts = {featured} columns = {2} tagsOnTop = {true} />
                    <MasonryPost post = {lastFeatured } tagsOnTop = {true} />
                    </section>
                </div>
            </section>

            <section className = 'container'>
                <div className='row'>
                    <h1>Recent Post</h1>
                    <PostGrid posts={recentPosts}/>
                </div>
            </section>

            <section className = 'container'>
                <div className='row'>
                    <h1>Trending Post</h1>
                    <PostMasonry posts={trending} columns={3}/>
                </div>
            </section>
        </main>
    )
}