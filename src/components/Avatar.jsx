import styles from './Avatar.module.css';

//Olhar com atenção desestruturação
// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder = true, src }) {
  return (

    < img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />

  );
}