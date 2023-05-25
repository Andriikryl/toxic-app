import { AvatarSize } from "./types";
import styles from "./Avatar.module.css";
import classNames from "classnames";
interface IAvatarProps {
  size?: AvatarSize;
}

export function Avatar({ size = AvatarSize.SM }: IAvatarProps) {
  const avatarClassNames = classNames({
    [`${styles.avatar}`]: true,
    [`${styles.sizeLg}`]: size === AvatarSize.LG,
  });

  return <div className={avatarClassNames}></div>;
}
