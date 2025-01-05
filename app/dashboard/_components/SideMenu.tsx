import { MenuItem } from "./MenuItem";
import styles from "./SideMenu.module.css";

export const SideMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <MenuItem icon="clock" href="/dashboard/stamp">
        勤怠打刻
      </MenuItem>
      <MenuItem icon="calendar" href="/dashboard/edit">
        勤怠管理
      </MenuItem>
      <MenuItem icon="project" href="/dashboard/project">
        プロジェクト管理
      </MenuItem>
    </div>
  );
};
