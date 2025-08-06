import { useForm } from "react-hook-form";

export function ReactHook() {
  const  {register, handleSubmit,formState: {errors}} = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return(
    <form className="container-fluid p-5" onSubmit={handleSubmit(onSubmit => {
      console.log(onSubmit);
    })}>
      <dl>
        <dt>First Name</dt>
        <dd><input className="form-control" placeholder="First Name"{
          ...register("firstName",
            {
              required: 'First name required',
              maxLength: {
                value: 20,
                message: "Maximun length is 20"
              }
            })
        } />
          {errors?.firstName?.type === 'required' && <dd className="text-danger">First Name Required</dd>}
          {errors?.firstName?.type === 'maxLength' && <dd className="text-danger">First name can only have 20 chars</dd>}
        </dd>


        <dt>Last Name</dt>
        <dd><input className="form-control" placeholder="Last Name"{
          ...register("lastName", {
            required: 'Last name required',
            maxLength: {
              value: 20,
              message: "Minimun length is 20"
            }
          })
        } />
          {errors?.lastName?.type === 'required' && <dd className="text-danger">Last Name Required</dd>}
          {errors?.lastName?.type === 'maxLength' && <dd className="text-danger">Last name can only have 20 chars</dd>}
        </dd>

        
        <dt>Age</dt>
        <dd><input className="form-control" type="number" placeholder="Your Age"{
          ...register("age", {
            required: true,
            min: 18,
            max: 99
          })
        } />
          {errors?.age?.type === 'required' && <dd className="text-danger">Age must Required</dd>}
          {errors?.age?.type === 'min' && <dd className="text-danger">Age must in between 20 to 99</dd>}
          {errors?.age?.type === 'max' && <dd className="text-danger">Age must in between 20 to 99</dd>}
        </dd>
        

        <dt>Gender</dt>
        <dd>
          <select className="form-select" {...register("gender",{required:true,validate:(value) => value !== "-1" || `Please selcect a valid city!`})}>
            <option value="-1">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>
          <div className="text-danger">{errors.gender?.message}</div>
        </dd>
      </dl>
      <button className="btn btn-danger w-100" type="submit">Submit</button>
    </form>
  );
}