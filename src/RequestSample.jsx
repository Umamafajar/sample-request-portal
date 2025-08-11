import { useState } from "react";
 
function RequestSample() {
    const [formData, setFormData] = useState({
        sampleType: "",
        name: "",
        email: "",
        company: "",
    });

     const [success, setSuccess] = useState(false);

     const handleChange  = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});

     };

     const handleSubmit = (e) =>{
        e.preventDefault();

        if (!formData.sampleType || !formData.name || !formData.email || !formData.company) {
            alert("Please fill all the fields");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("invalid email format");
            return;
        }

        console.log("Submitted Data:",formData);
        setSuccess(true);
     };

     return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
            <h1 className="text-2xl font-bold mb-4">Request a Sample</h1>

            {success ? (
                <p className="text-green-600 font-semibold">Request submitted successfully!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <select
                   name="sampleType"
                   value={formData.sampleType} 
                   onChange={handleChange}
                   className="w-full border rounded p-2"
                   >
                    <option value="">Select Sample Type</option>
                    <option value="Type A">Tyoe A</option>
                    <option value="Type B">Type B</option>
                    <option value="Type C">Type C</option>
                   </select>

                   <input name="name"
                   placeholder="Your Name"
                   value={formData.name}
                   onChange={handleChange}
                   className="w-full border rounded p-2"
                   />

                   <input 
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                    />

                    <input 
                      name="Company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">submit

                    </button>
              </form>
            )}
              </div>
              </div>  
            

     );
} 
 export default RequestSample;