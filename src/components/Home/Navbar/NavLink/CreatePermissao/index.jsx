import { Box, Button, Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useContext } from "react";
import { PermissionController } from "../../../../../../utils/database/controllers/permission";
import { ContextGlobal } from "../../../../../shared/context/global";


const CreatePermissao = () =>{

  const {
    onChangeTipo,
    onChangeEmail,
    tipo,
    email,
    modal,
    handlerModal
  } = useContext(ContextGlobal);

  console.log(tipo);
  console.log(email)

    return(
        <>
        <Box
        w={'100%'}
        minH={'100vh'}
        bg={'rgb(0,0,0,.5)'}
        display={modal ? "block" : "none"}
        position={'absolute'}
        top={0}
        left={0}
        p={'1rem'}
        >

           <FormControl
           position={"relative"}
           w={'100%'}
           maxW={'840px'}
           borderRadius={'10px'}
           p={'2rem'}
           bg={"#fff"}
           mx={'auto'}
           >
           <Flex
            w={30}
            h={30}
            borderRadius={'50%'}
            border={'2px solid #000'}
            color={'#000'}
            position={'absolute'}
            onClick={handlerModal}
            justifyContent={'center'}
            alignItems={'center'}
            top={4}
            cursor={'pointer'}
            right={4}
            _hover={{
              boxShadow:"0 0 10px 0 rgba(0,0,0,.5)",
              border:'none',
              color:"rgba(0,0,0,.5)"
            }}
           >
              x
           </Flex>
            <Box
            mt={'1rem'}
            >
                <FormLabel>
                   Tipo de permissão
                </FormLabel>
                <Box>
                  <Select
                  onChange={onChangeTipo}
                  >
                    <option value='usuario'>
                      usuario
                    </option>
                    <option value='administrador'>
                      administrador
                    </option>
                    <option value='sub-administrador'>
                      sub-administrador
                    </option>
                  </Select>
                </Box>
            </Box>
            <Box
            my={'1rem'}
            >
                <FormLabel>
                   Email
                </FormLabel>
                <Box>
                 <Input
                 type={'email'}
                 onChange={onChangeEmail}
                 value={email}
                 />
                </Box>
            </Box>
            <Box
            w={"100%"}
            maxW={'250px'}
            mx={'auto'}
            >
              <Button
               type={'submit'}
               onClick={()=>{
                const create = new PermissionController();
                create.postPermission(tipo,true,email);
               }}
              >
                Criar uma permissão
              </Button>
            </Box>
          </FormControl>

        </Box>
        </>
    )
}

export default CreatePermissao;