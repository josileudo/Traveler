import {Form} from '@unform/web'
import Input from "./components/Form/Input"

export default function App () {

  function handleSubmit(data) {
    console.log(data)
  }  

  return (
    <div className="app-container">
      <h1>Traveler</h1>
      <Form onSubmit={handleSubmit}>
        <Input name = "name"/>
        <Input name = "email"/>
        <Input name = "password"/>
        <button type = 'submit'> Enviar</button>
      </Form>
    </div>
  )
}
