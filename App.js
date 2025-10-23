import React from "react";
import {ScrollView} from 'react-native';
import Titulo from "./Componentes/Titulo";
import Saudacao from "./Componentes/Saudacao";

export default function App(){
  return(
    <ScrollView style={{ padding:20}}>
      <Titulo />
      <Saudacao nome="Gustavo"/>

    </ScrollView>
  )
}