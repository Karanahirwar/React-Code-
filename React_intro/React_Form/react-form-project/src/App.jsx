// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // api call ko simulate krte h 
    await new Promise((resolve)=> setTimeout(resolve,5000));
    console.log("submitting the form",data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
<div>

  <lable > First Name:</lable>
  <input 
  className={errors.firstName? 'input-error' : ""}
  {...register("firstName",
    { required: true ,
    minLength:{value:3,message:'Min len atleast 3'},
    maxLength:{value:8,message:'max len almost 8'}
    })}/>
    {errors.firstName &&<p className='error-msg'>{errors.firstName.message}</p>}

</div>

<br />




<div>
  <lable> Middle Name:</lable>
   <input {...register("middleName")}/>
   
</div>

<br />

<div>
  <lable> Last Name:</lable>
  <input {...register("LastName")}/>
</div>
<br />

<input type='submit' disabled={isSubmitting}
value={isSubmitting ? "submitting" : "submit"}
/>
    </form>
  )
}

export default App
