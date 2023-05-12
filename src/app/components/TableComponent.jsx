"use client"
import { Table } from "antd"
import { useEffect, useState } from "react"
export default function TableComponent({ data }) {
    const [dataSource, setDataSouce] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const dataParsed = JSON.parse(data.value)[0]
        setDataSouce(dataParsed)
        setColumns(() => Object.keys(dataParsed[0]).map((item, index) => {
            return {
                title: item.split('_').join(' '),
                dataIndex: item.toLowerCase(),
                key: `${item.toLowerCase()}${window.crypto.randomUUID()}`,
            }
        }))
    }, [])

    return <Table rowKey={obj => obj[Object.keys(obj)[0]]} dataSource={dataSource} columns={columns} />
}
