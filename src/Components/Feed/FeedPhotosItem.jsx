//import React from 'react'
import PropTypes from "prop-types";
import styles from './FeedPhotosItem.module.css'
import Image from "../../Helper/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick(){
    setModalPhoto(photo)
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

FeedPhotosItem.propTypes = {
  photo: PropTypes.any,
  setModalPhoto: PropTypes.any
};

export default FeedPhotosItem;
