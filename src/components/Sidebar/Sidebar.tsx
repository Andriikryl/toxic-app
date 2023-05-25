import { Avatar } from "../UI/Avatar/Avatar";
import { AvatarSize } from "../UI/Avatar/types";
import { Logo } from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import avatar from "./assets/toxic-user.png";
import { CircleProgressBar } from "../UI/CircleProgresBar/CircleProgressBar";

export function Sidebar() {
  return (
    <aside className={styles.sidbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.avatar}>
        <Avatar size={AvatarSize.LG} imgSrc={avatar} />
      </div>
      <CircleProgressBar />
      <div className={styles.userName}> User Name</div>
      <div className={styles.userLvl}>Next user level</div>
      <nav>Navigation</nav>
    </aside>
  );
}
