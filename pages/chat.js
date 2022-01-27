import { Box, Text, TextField, Image, Button, Icon } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import Supabase from '../class/supabase';


export default function ChatPage() {

    const supabase = new Supabase();

    const [getMessage, setMessage] = React.useState('');
    const [getListMessage, setListMessage] = React.useState([]);

    React.useEffect(() => supabase.get().then(({ data }) => {
        setListMessage(data);
    }
    ), []);

    function handleNewMessage(newMessage) {

        // Não inserir mensagens vazias
        if (newMessage == '') return;

        const message = {
            texto: newMessage,
            de: 'JacksonECO',
            id: new Date().getMilliseconds().toString() + getListMessage.length,
            created_at: new Date().toISOString(),
        }

        supabase.set({
            texto: message['texto'],
            de: message['de'],
        });

        setListMessage([
            message,
            ...getListMessage,
        ]);

        setMessage('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: appConfig.backgroundImg.matrix,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        mainAxisAlignment: 'flex-end',
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList
                        messages={getListMessage}
                        setMessages={setListMessage}
                    />

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            crossAxisAlignment: 'flex-start'
                        }}
                    >
                        <TextField
                            value={getMessage}
                            onChange={(value) => setMessage(value.target.value)}
                            onKeyPress={(value) => {
                                if (value['key'] == 'Enter' && value.shiftKey == false) {
                                    value.preventDefault();
                                    handleNewMessage(getMessage);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button
                            onClick={() => handleNewMessage(getMessage)}
                            styleSheet={{
                                padding: '12px',
                            }}
                            label='Enviar'
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {

    return (
        <Box
            tag="ul"
            styleSheet={{
                // mainAxisAlignment: 'flex-end',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >

            {props.messages.map((message) =>
                {
                    const date = new Date();
                    date.setMilliseconds = Date.parse(message.created_at);

                    return <Box
                        // key={message.id}
                        tag="ul"
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'row',
                            color: appConfig.theme.colors.neutrals["000"],
                            // marginBottom: '16px',
                        }}
                    >
                        <Text
                            key={message.id}
                            tag="li"
                            styleSheet={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 50,
                                borderRadius: '5px',
                                padding: '6px',
                                marginBottom: '12px',
                                hover: {
                                    backgroundColor: appConfig.theme.colors.neutrals[700],
                                }
                            }}
                        >
                            <Box
                                styleSheet={{
                                    marginBottom: '8px',
                                }}
                            >
                                <Image
                                    styleSheet={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                        marginRight: '8px',
                                    }}
                                    src={`https://github.com/${message.de}.png`} />

                                <Text tag="strong">
                                    {message.de}
                                </Text>

                                <Text
                                    styleSheet={{
                                        fontSize: '10px',
                                        marginLeft: '8px',
                                        color: appConfig.theme.colors.neutrals[300],
                                    }}
                                    tag="span"
                                >
                                    {date.toLocaleDateString()}

                                </Text>
                            </Box>

                            {/* Mensagens com várias linhas (shift+enter) */}
                            {message.texto.split('\n').map((linha) => linha == '' ? <br /> : <Text>{linha}</Text>)}


                        </Text>

                        <Box
                            styleSheet={{
                                flex: 1,
                                display: 'flex',
                                crossAxisAlignment: 'flex-start',
                                marginRight: '5px',
                                fontSize: '10px',
                            }}
                        >

                            <Button
                                onClick={() => {
                                    props.messages.splice(props.messages.indexOf(message), 1);
                                    props.setMessages([...props.messages]);
                                } }
                                label='[x]'
                                buttonColors={{
                                    contrastColor: '',
                                    mainColor: 'transparent',
                                }} />
                        </Box>
                    </Box>;
                }

            )}

        </Box>
    )
}