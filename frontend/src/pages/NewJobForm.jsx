import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import Container from '@mui/material/Container';

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
      if (person.customerName && person.jobType && person.status && person.technician) {
        // if we are adding a new record we will POST to /record.
        response = axios.post("http://localhost:3000/api/createJob", {
          customerName: person.customerName,
          jobType: person.jobType,
          status: person.status,
          technician:person.technician
        });
      }
      else{
        alert("Please insert all the values")
      }
      if (!response) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      if (person.customerName && person.jobType && person.status && person.technician) {
        setForm({ customerName: "", jobType: "", status: "",technician:""  });
        navigate("/");
      }else{
        navigate("/newJob");
      }

    }
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
      <h3 className="text-lg font-semibold p-4">Create Employee Record</h3>
        <FormControl onSubmit={onSubmit}>
            <FormLabel>Customer Name</FormLabel>
            <TextField value={form.customerName} error={true} label="Enter value"
                    onChange={(e) => updateForm({ customerName: e.target.value })}></TextField>
            <FormLabel>Job Type</FormLabel>
            <TextField value={form.jobType} error={true}
                    onChange={(e) => updateForm({ jobType: e.target.value })}></TextField>
            <FormLabel>Status</FormLabel>
            <TextField value={form.status} error={true}
                    onChange={(e) => updateForm({ status: e.target.value })}></TextField>
            <FormLabel>Technician</FormLabel>
            <TextField value={form.technician} error={true}
                    onChange={(e) => updateForm({ technician: e.target.value })}></TextField>
            <Button onClick={onSubmit}>Submit</Button>
        </FormControl>
      </Container>
    </>
  );
}

export default NewJobForm;
