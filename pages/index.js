import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from '../config.json'



export function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.primary[400]};
                font-size: ${props.sizeText || null};
                // font-weight: 600;
            }
            `}</style>
    </>
  )
}


export default function PaginaInicial() {

  const [username, setUsername] = React.useState('JacksonECO');
  const router = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          // backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: appConfig.backgroundImg.home,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
            // width: '100%', maxWidth: '700px',
            // borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 20px 50px 0 rgb(0 0 0 / 80%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >

          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              
              borderRadius: '5px', 
              // margin: '46px',
              marginHorizontal: '50px',
              marginTop: '40px',
              // marginBottom: '10px',
              
              // boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >

            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (event) {
                /// Não atualiza a tela, para que futuramente utilizar uma atualização de tela sem reload;
                event.preventDefault();

                /// Código padrão, funciona no console do navegador;
                // window.location.href = '/chat';

                router.push('/chat?username=' + username);
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2" sizeText="28px">{appConfig.title}</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', marginTop: '15px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>


              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
                type="text" value={username} onChange={function (a) {
                  setUsername(a.target.value);

                  // fetch('https://api.github.com/users/' + username).then((response) => response.json()).then(function (response) {
                  //     console.log(response['name']);
                  // }).catch(function (e) {
                  //     console.log('Erro requestName');
                  // });

                }}
              />


              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />

            </Box>
            {/* Formulário */}


            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}

              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}

          </Box>

          <Text variant="body4" styleSheet={{ marginBottom: '20px', marginTop: '15px', color: appConfig.theme.colors.neutrals[300] }}>
            *Antes de pedir qualquer coisa, mantenha o aluguel e as demais contas em dia!
          </Text>
        </Box>
      </Box>
    </>
  );
}