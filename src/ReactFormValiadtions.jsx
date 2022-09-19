import React from 'react'
import "./ReactFormValiadtions.css"
import { useForm } from "react-hook-form";

function ReactFormValiadtions() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    let formData=(data)=>
    {
        console.log(data)
    }
console.log(errors)
    // console.log(register("username"))
  return (
    <form className='myform' onSubmit={handleSubmit(formData)}>
        <div className='container'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoFxeSlDws5fS5mA0HskvM6M_elEnSZrVEg&usqp=CAU'/>
        <div>
            <input type="text" placeholder='Username'
            className={errors.username?.message?"err-border":null}
            {...register("username",{required:{value:true,message:"Username is Mandatory"},
            minLength:{value:6,message:"Usersname Minimum 6 Chracters"},
            maxLength:{value:10,message:"Usersname Maximum 10 Chracters"},
            pattern:{value:/^[a-zA-Z]+$/g,message:"Username Should Contain Only Alphabets"}})}/>
        </div>
        <div className='err-message'>
            {errors.username?.message}
        </div>
        <div>
            <input type="email" placeholder='Email' 
            {...register("email",{required:{value:true,message:"Email is Mandatory"}})}/>
        </div>
        <div className='err-message'>
            {errors.email?.message}
        </div>
        <div>
            <input type="password" placeholder='Password' 
            {...register("password" ,{required:{value:true,message:"Password is Mandatory"}})}/>
        </div>
        <div className='err-message'>
            {errors.password?.message}
        </div>
        <div>
            <input type="tel" placeholder='Mobile' 
            {...register("mobile",{required:{value:true,message:"Mobile is Mandatory"}})}/>
        </div>
        <div className='err-message'>
            {errors.mobile?.message}
        </div>
        <div>
            <button type="submit">Sign Up</button>
        </div>
        </div>
    </form>
  )
}

export default ReactFormValiadtions



