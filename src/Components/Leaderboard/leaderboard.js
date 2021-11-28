import lbStyles from "./Leaderboard.module.css"
import axios from "axios"

function Leaderboard()
{

    const tableData = [
        {rank: "1", name: "Rahul", moves: "10"},
        {rank: "2", name: "acbd", moves: "69"},
        {rank: "3", name: "dedefe", moves: "100"},
        {rank: "4", name: "loldude", moves: "420"},
        {rank: "5", name: "gitgud", moves: "1337"},
    ]

    const tableDataMap = tableData.map( item =>
        <tr key = {item.name} className = {lbStyles.tableRow}>
            <td className = {lbStyles.rankData}> #{item.rank} </td>
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