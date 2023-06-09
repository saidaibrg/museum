
import { ToolbarData } from './Toolbardata'

const Toolbar = () => {
  return (
    <div className={styles.Toolbar}>
      <ul className={styles.ToolbarList}>
        {ToolbarData.map((val, key) => {
          return (
            <li key={key} className={styles.row}>
              <button onClick={val.function} >{val.action}</button>{" "}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Toolbar; 