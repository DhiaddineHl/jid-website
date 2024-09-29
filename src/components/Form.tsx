
import { InputText } from 'primereact/inputtext';
        

const Form = () => {
  return (
    <form>
      <div className="flex flex-row gap-4">
        <div className="p-field">
          <label htmlFor="firstname">Firstname</label>
          <InputText id="firstname" type="text" />
        </div>
        <div className="p-field">
          <label htmlFor="lastname">Lastname</label>
          <InputText id="lastname" type="text" />
        </div>
      </div>
    </form>
  )
}

export default Form