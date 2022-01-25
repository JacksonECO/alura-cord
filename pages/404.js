import { Box } from '@skynexui/components'
import appConfig from '../config.json'
import { Titulo } from './index'

export default function Page404() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    backgroundColor: appConfig.theme.colors.primary[400],
                    backgroundImage: appConfig.backgroundImg.smith,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        borderRadius: '10px',
                        padding: '32px',
                        backgroundColor: appConfig.theme.colors.neutrals[200],
                    }}
                >
                    <Box styleSheet={{
                        marginBottom: '40px'
                    }}>
                        <Titulo tag="h1">Erro 404 - Page not found</Titulo>
                    </Box>
                    <Box>
                        <Titulo tag="b1">Infelizmente o Agente Smith não foi encontrado!</Titulo>

                    </Box>
                </Box>
            </Box>
        </>
    );
}