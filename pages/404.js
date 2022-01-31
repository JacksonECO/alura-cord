import { Box } from '@skynexui/components'
import appConfig from '../config.json'
import { Titulo } from './index'

export default function Page404() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    backgroundColor: appConfig.theme.colors.primary[200],
                    backgroundImage: appConfig.backgroundImg.destruido,
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
                        <Titulo tag="h1">Área restrita a funcionários</Titulo>
                    </Box>
                    <Box>
                        <Titulo tag="b1">Por favor, não volte aqui novamente!</Titulo>

                    </Box>
                </Box>
            </Box>
        </>
    );
}