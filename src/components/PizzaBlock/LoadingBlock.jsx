import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return <ContentLoader
    className='pizza-block' 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="134" r="118" /> 
    <rect x="3" y="274" rx="6" ry="6" width="280" height="31" /> 
    <rect x="1" y="321" rx="6" ry="6" width="280" height="84" /> 
    <rect x="5" y="418" rx="6" ry="6" width="101" height="31" /> 
    <rect x="133" y="411" rx="20" ry="20" width="147" height="41" />
  </ContentLoader>
}

export default LoadingBlock