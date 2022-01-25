import { Box } from '@skynexui/components'
import appConfig from '../config.json'

export default function PaginaDoChat() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[400],
                    backgroundImage: appConfig.backgroundImg.matrix,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            ></Box>
        </>
    );
}