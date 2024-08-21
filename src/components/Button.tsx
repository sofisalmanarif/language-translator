

type Btn={
    label:string;
    handler:() => void;
}
const Button = ({label,handler}:Btn) => {
  return (
   <button className='rounded-md bg-blue-600 text-white px-6 py-2 font-semibold text-center text-justify' onClick={handler}>{label}</button>
  )
}

export default Button