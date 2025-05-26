import { useEffect, useState } from "react"
import axios from "axios"

export  function Exemplo_2() {

const[cep,setCep]=useState("")
const[logadouro,setLogadouro]=useState("")
const[bairro,setBairro]=useState("")
const[cidade,setCidade]=useState("")
const[estado,setEstado]=useState("")
const[uf,setUf]=useState("")



useEffect(()=> {
    if (cep.length === 8 ){
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response)=>{
            setLogadouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setCidade(response.data.localidade)
            setEstado(response.data.estado)
            setUf(response.data.uf)
        })
    }
},[cep])


  return (
    <section>

    <h2>Exemplo 2: Buscar Endereço </h2>

        <input type="number" placeholder="Digite o CEP" onChange={(input)=> setCep (input.target.value)} />

        {cep.length === 8 &&(
            <>
            <h3>Informações do Endereço</h3>
            <ul>
                <li>Rua: {logadouro}</li>
                <li>Bairro: {bairro}</li>
                <li>Cidade: {cidade}</li>
                <li>Estado: {estado} - {uf}</li>
            </ul>
            </>
        )}

    </section>
  )
}