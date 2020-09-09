import React from "react"

const Card = props => {
  let attrs = Object.keys(props)
  return (
    <table className="citation-table">
      <tr>
        <th colSpan="2">Citation</th>
      </tr>
      {attrs.map(attr => {
        return (
          <tr className="citation-attr">
            <td>{attr[0].toUpperCase() + attr.slice(1)}</td>
            <td>{props[attr]}</td>
          </tr>
        )
      })}
    </table>
  )
}

export default Card
