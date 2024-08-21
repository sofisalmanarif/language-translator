

type Btn={
    label:"string";
    handler:() => void;
}
const Button = ({label,handler}:Btn) => {
  return (
   <button className='rounded-md bg-blue-300 text-white px-4 py-2' onClick={handler}>{label}</button>
  )
}

export default Button