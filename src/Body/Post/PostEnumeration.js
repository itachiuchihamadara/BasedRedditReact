
import PostBody from './PostContent/PostBody';
import PostHeader from './PostContent/PostHeader';
import React, { useState } from 'react';
import './PostEnumeration.css'


function PostEnumeration() {


  return (<div className='Post'>
    <PostHeader></PostHeader>
    <PostBody></PostBody>
  </div>);
  
  }
  
  export default PostEnumeration;