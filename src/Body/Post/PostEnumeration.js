
import PostBody from './PostContent/PostBody';
import PostHeader from './PostContent/PostHeader';
import React, { useState } from 'react';
import './PostEnumeration.css'


function PostEnumeration() {

  const cont = "<img src = 'http://localhost:8080/getImage'></img>"

  return (<div dangerouslySetInnerHTML={{__html : cont}}/>);
  
  }
  
  export default PostEnumeration;