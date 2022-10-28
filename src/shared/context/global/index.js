import { createContext, useState } from 'react'

const ContextGlobal = createContext({})

const ContextGlobalProvider = ({ children }) => {

    const [tipo, setTipo] = useState("");
    const [email, setEmail] = useState("");
    const [modal,setModal] = useState(false);
    
    const handlerModal = () => setModal(!modal);

    const onChangeTipo = (e) => {
        setTipo(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

  const value = {
    handlerModal,
    modal,
    onChangeTipo,
    onChangeEmail,
    tipo,
    email
  }

  return (
    <>
      <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
    </>
  )
}

export { ContextGlobal, ContextGlobalProvider }
