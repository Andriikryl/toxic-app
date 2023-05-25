import { AvatarSize } from "./types";
import styles from "./Avatar.module.css";
import classNames from "classnames";
import defaultAvatar from "./assets/user.png";

interface IAvatarProps {
  size?: AvatarSize;
  imgSrc?: string;
}

export function Avatar({ size = AvatarSize.SM, imgSrc }: IAvatarProps) {
  const avatarClassNames = classNames({
    [`${styles.avatar}`]: true,
    [`${styles.sizeLg}`]: size === AvatarSize.LG,
  });

  return (
    <div className={avatarClassNames}>
      <img src={imgSrc || defaultAvatar} alt="userpic" />
    </div>
  );
}
