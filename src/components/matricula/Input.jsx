function Input({type, placeholder, handleOnChange, name}) {
  return (
    <input type={type} placeholder={placeholder} name={name} onChange={handleOnChange}></input>
  )
}

export default Input;