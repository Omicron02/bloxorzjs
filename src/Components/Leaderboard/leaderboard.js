import lbStyles from "./Leaderboard.module.css"
import axios from "axios"
import {useState} from 'react'
function Leaderboard()
{
    const [tableData, setTableData]=useState([])
    axios.get("http://localhost:4000/api/readallDB")
    .then(res =>{
        console.log(res.data)
        setTableData(res.data)
    })
    tableData.sort((i,j)=>i.moves-j.moves)
    console.log(tableData)
    const tableDataMap = tableData.map((item,index) =>
        <tr key = {item.name} className = {lbStyles.tableRow}>
            <td className = {lbStyles.rankData}> #{index+1} </td>
            <td className = {lbStyles.nameData}> {item.name} </td>
            <td className = {lbStyles.moveData}> {item.moves} </td>
        </tr>)

    return(
        <div className = {lbStyles.page}>
            <table className = {lbStyles.leaderboard}>
                <thead>
                    <tr className = {lbStyles.tableHeader}>
                        <th className = {lbStyles.rankData}> Rank </th>
                        <th className = {lbStyles.nameData}> Name </th>
                        <th className = {lbStyles.moveData}> Moves </th>
                    </tr>
                </thead>
                <tbody>
                    {tableDataMap}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard;