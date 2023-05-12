import { sequelize } from "@/sequelize"
import TableComponent from "../components/TableComponent"

export default function DataTable({ query }) {
    /**
      * getData function as entrypoint data fetcher
      * @returns Array of values from the query
      */
    const getData = async () => {
        "use server"
        return await sequelize.query(query)
    }

    /**
    * This renders the @TableComponent
    * Passed on the @data property of the @TableComponent 
    * is the call of the @getData function
    */
    return (
        <TableComponent data={getData()} />
    )
}
