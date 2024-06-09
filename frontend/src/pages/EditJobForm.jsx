import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const NewJobForm = ()=> {
  const [form, setForm] = useState({
    customerName: "",
    jobType: "",
    status: "",
    technician:""
  });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

    useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      const response = await fetch(
        `http://localhost:3000/api/jobs/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      console.log(record)
      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(record.jobDetails);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  //These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    try {
      let response;
    //  if we are updating a record we will PATCH to /record/:id.
        response = axios.put(`http://localhost:3000/api/jobs/update/${params.id}`, {
          customerName: person.customerName,
          jobType: person.jobType,
          status: person.status,
          technician:person.technician
        });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({ customerName: "", jobType: "", status: "",technician:""  });
      navigate("/");
    }
  }

  // This following section will display the form that takes the input from the user.
  return (
    <>
    {console.log(form)}
      <h3 className="text-lg font-semibold p-4">Create Employee Record</h3>
      <form
        onSubmit={onSubmit}
        className="border rounded-lg overflow-hidden p-4"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-slate-900">
              Employee Info
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 ">
            <div className="sm:col-span-4">
              <label
                htmlFor="customerName"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Customer Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Customer Name"
                    id="customerName"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Customer Name"
                    value={form.customerName}
                    onChange={(e) => updateForm({ customerName: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="jobType"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Job Type
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="jobType"
                    id="jobType"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Developer Advocate"
                    value={form.jobType}
                    onChange={(e) => updateForm({ jobType: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div>
            <div className="sm:col-span-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Job Type
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="status"
                    id="status"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Status"
                    value={form.status}
                    onChange={(e) => updateForm({ status: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="technician"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Technician Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="technician"
                    id="technician"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Technician Name"
                    value={form.technician}
                    onChange={(e) => updateForm({ technician: e.target.value })}
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Save Employee Record"
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
        />
      </form>
    </>
  );
}

export default NewJobForm;
