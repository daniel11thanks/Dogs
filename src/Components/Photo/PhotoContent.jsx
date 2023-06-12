import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";
import PropTypes from "prop-types";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import { UserContext } from "../../UserContext";
import Image from "../../Helper/Image";

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

PhotoContent.propTypes = {
  data: PropTypes.any,
  single: PropTypes.any,
};

export default PhotoContent;
