import { useState } from "react";

 function AdminSample() {

    const [samples] = useState([
        { id: 1, type: "Type A", name: "Umama", email: "umama@example.com", company: "ABC Crop" },
        { id: 2, type: "Type B", name: "Saleha", email: "saleha@example.com", company: "XYZ Ltd"},
    ]);

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin: Sample Requests</h1>
        <table className="min-w-full bg-white shadow rounded">
            <thead>
                <tr>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Sample Type</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Company</th>
                </tr>
            </thead>
            <tbody>
                {samples.map((s) => (
                 <tr key={s.id}>
                    <td className="p-2 border">{s.id}</td>
                    <td className="p-2 border">{s.type}</td>
                    <td className="p-2 border">{s.name}</td>
                    <td className="p-3 border">{s.email}</td>
                    <td className="p-4 border">{s.comapny}</td>
                 </tr>
                ))}
            </tbody>
        </table>
        </div>
);
}
export default AdminSample;