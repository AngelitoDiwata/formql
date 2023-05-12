/**
 * We always import modules at the top. These
 * are JS methods that are called from other JS files.
 */
import { centered } from "@/styleClass"
import DataTable from "./components/DataTable"


export default function sample() {
  return (
    <main className={centered}>
      {
        <DataTable query="SELECT * FROM t_projects" />
      }
    </main>
  )
}
