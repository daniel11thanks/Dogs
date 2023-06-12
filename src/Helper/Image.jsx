import React from 'react'
import styles from './Image.module.css'
import PropTypes from 'prop-types';

const Image = ({alt, ...props}) => {
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoad({target}){
        setSkeleton(false);
        target.style.opacity = 1;
    }

  return (
    <div className={styles.wrapper}>
        {skeleton && <div className={styles.skeleton}></div>}
        <img onLoad={handleLoad} className={styles.img} src="" alt={alt} {...props}/>
    </div>
  )
}

Image.propTypes = {
    alt: PropTypes.any
  };

export default Image