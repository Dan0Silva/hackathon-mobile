import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth'

import HomeUsuario from '../HomeUsuario'
import HomeEfetivo from '../HomeEfetivo'
import HomeVisitante from '../HomeVisitante'

export default () => {
  const { user, staff, visiter } = useContext(AuthContext)

  if (user.flag) {
    console.log(user)
    return <HomeUsuario />
  }
  if (staff.ativo_efetivo) {
    console.log(staff)
    return <HomeEfetivo />
  }
  if (visiter.ativo_visitante) {
    console.log(visiter)
    return <HomeVisitante />
  }

  return <></>
}
