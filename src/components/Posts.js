import React from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../features/post/postSlice'
import PostItem from './PostItem'

const Posts = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
                onClick={() => (getPosts)}
            >
                Get posts
            </button>
            <PostItem />
        </div>
    )
}

export default Posts
