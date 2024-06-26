import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Image1 from "./LOGO/white.jpg"

export default function WhatsappPop (){

  return (
      <FloatingWhatsApp 
      phoneNumber='+243811700014'
      accountName='FAKIM GROUP s.a.r.l'  
      chatMessage='Bonjour!'
      avatar={Image1}
      modil
      />
  )
}
