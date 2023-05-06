import { ToolbarData } from '../components/Toolbardata'
import styles from '../styles/Toolbar.module.css'

 function Toolbar() {
  return (
    <div className={styles.Toolbar}>
      <ul className={styles.ToolbarList}>
        {ToolbarData.map((val, key) => {
          return (
            <li key={key} className={styles.row}>
              <div>{val.action}</div>{" "}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Toolbar; 