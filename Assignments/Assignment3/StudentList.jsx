function StudentList({ students }) {
  return (
    <>
      <h2 style={{ marginTop: "40px" }}>Student List</h2>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="3">No Data Available</td>
            </tr>
          ) : (
            students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.email}</td>
                <td>{stu.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default StudentList;
