import React from 'react'
import { useEffect,useState,useRef } from 'react';
import Header from '@/components/Header'
    
interface FormData {
    firstName: string;
    lastName: string;
    age: number | '';
    gender: string;
    email: string;
}
function Contact() {



    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: ''
    });
   
    const firstNameInputRef = useRef<HTMLInputElement | null>(null);
   
    useEffect(() => {
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            email: ''
        });
        if (firstNameInputRef.current) {
            firstNameInputRef.current.focus(); 
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
     
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            email: ''
        }); 
        if (firstNameInputRef.current) {
            firstNameInputRef.current.focus(); 
        }
    };
  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>User Form</h2>
         
                <input
                placeholder='first name'
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    ref={firstNameInputRef} // Attach the ref to the input
                />
            <br />
           
                <input
                placeholder='last name'
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
           
            
               <br />
                <input
                placeholder='age'
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
           
         <br />
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
         
          <br />
                <input
                placeholder='email'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
         <br />
            <button type="submit">Submit</button>
        </form>
    
    </div>
  );
}

export default Contact
