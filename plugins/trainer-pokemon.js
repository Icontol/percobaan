let handler = async (m, { conn, usedPrefix, command }) => { 
 conn.sendButton(m.chat, `*––––『 TRAINER LIST 』––––*`, ` 
 ⮕  *Delhi & NCR* 
  
 Enter Trainer Code Here: 
 https://bit.ly/Pokemon_Go_Trainer_Code_Delhi_NCR_Form 
  
 View Trainer List Here: (Access Required) 
 https://bit.ly/Pokemon_Go_Trainer_Code_Delhi_NCR_L
 =========================== 
 ⮕ *PoGo Raids* 
  
 Enter Trainer Code Here: 
 https://docs.google.com/forms/d/e/1FAIpQLSe4aGmYNM1BViWoicKwVPK2ynpbpm1hhMs3aVNAvqnDO6m12A/viewform 
  
 View Trainer List Here: 
 https://docs.google.com/spreadsheets/u/0/d/1iUP6iBhY7GGEFBJE0w59UYuszFkqHOxusLARCtxPVq0/htmlview 
  
 grup bot = https://chat.whatsapp.com/EPmjuw9X1wZDGX1p4NCV1e
 =========================== 
 `.trim(), `./media/trainerlist.jpg`, [ 
 [`ᴏᴋ 👌`, `Ok`] 
 ], m, {asLocation: true}) 
 } 
 handler.help = ['trainerlist'] 
 handler.tags = ['rpg'] 
 handler.command = /^(trainerlist|tl|trainercode|tc)$/i 
  
 export default handler