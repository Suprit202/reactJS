import { useState, useEffect } from "react";
import axios from "axios";

export function DataTable() {
  const [data, setData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);

  useEffect(() => {
    axios.get("item.json").then((res) => {
      setData(res.data);
    });
  }, []);

  // Enable edit mode for a row
  function editRow(index) {
    setEditingRow(index);
  }

  // Save the row and exit edit mode
  function saveRow() {
    setEditingRow(null);
  }

  // Handle input change
  function handleChange(e, rowIndex, colKey) {
    const updatedData = [...data];
    updatedData[rowIndex][colKey] = e.target.value;
    setData(updatedData);
  }

  // Delete a row
  function deleteRow(index) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  }

  return (
    <table className="table table-hover container-fluid">
      <thead>
        <tr className="table-success">
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.keys(row).map((key) => (
              <td key={key}>
                {editingRow === rowIndex ? (
                  <input
                    type="text"
                    value={row[key]}
                    onChange={(e) => handleChange(e, rowIndex, key)}
                  />
                ) : (
                  row[key]
                )}
              </td>
            ))}
            <td>
              {editingRow === rowIndex ? (
                <button
                  className="btn btn-success"
                  onClick={() => saveRow(rowIndex)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() => editRow(rowIndex)}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteRow(rowIndex)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
