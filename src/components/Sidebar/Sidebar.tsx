import { Avatar } from "../Avatar/Avatar";
import { AvatarSize } from "../Avatar/types";
import { Logo } from "../Logo/Logo";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.avatar}>
        <Avatar size={AvatarSize.LG} />
      </div>
      <div className={styles.userName}> User Name</div>
      <div className={styles.userLvl}>Next user level</div>
      <nav>Navigation</nav>
    </aside>
  );
}
