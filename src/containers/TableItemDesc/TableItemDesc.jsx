const TableItemDesc = ({ attributes }) => {
  return (
    <table className="w-[90%] m-auto border">
      <thead className="text-2xl">
        <tr>
          <th className="bg-gray-300">Item</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody className="[&>tr]:p-[16px] text-center">
        {attributes.map((row, index) => {
          return (
            <tr>
              <td className="w-[50%] p-4 bg-gray-300">{row.name}</td>
              <td>{row.value_name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableItemDesc;
