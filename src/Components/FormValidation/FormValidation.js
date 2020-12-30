// with out using the third party librayries

import React, { useState } from 'react';
const FormValidation = () => {

    const formdata= ['name','age','salary','pin','id']
    const intialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues);
    
  
    const submit = () => {
        debugger;
      console.log(formValues);
    };
  
    //input change handler
    const handleChange = (e) => {
      
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    return (
        <div>
        <form>
        {
            formdata.map((element,index)=>(
                <input
                key={index}
                type='text'
                name={element}
                placeholder={element}
                onChange={handleChange}
            />
            ))
        }
            <input
                type='text'
                name='email'
                placeholder='user name'
                onChange={handleChange}
            />
            <input
                type='text'
                name='passward'
                placeholder='passward'
                onChange={handleChange}
            />
            </form>
            <button onClick={submit}>submit</button>
        </div>
    );
}

export default FormValidation;