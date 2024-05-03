const bcrypt = require("bcrypt");

/*const password='12345';
const hashPassword = async () => {
  const generateSalt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, generateSalt);

  console.log(hashPassword);
};
hashPassword()*/

/*const databasePassword='$2b$10$Ahm4z0uWdQJyW09DR2VVDusFhV6Bngwy91OXPXmIdk7iXU44jfbXW'
const enterdPassword='12345'
const comparePassword=async()=>{
    const comparePass=await bcrypt.compare(enterdPassword,databasePassword)
    console.log(comparePass)
    if(comparePass){
        console.log('Password matched.')
    }else{
        console.log('Password not matched.')
    }
}
comparePassword();*/