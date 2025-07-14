export default function Table() {
  const data = [
    { id: 1, name: 'Task 1', status: 'In Progress', due: '2025-07-15' },
    { id: 2, name: 'Task 2', status: 'Completed', due: '2025-07-10' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Status</th>
            <th className="px-4 py-2 text-left text-gray-600">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.status}</td>
              <td className="px-4 py-2">{item.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
