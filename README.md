# Front App

## Funcionalidades

- **Registro de Usuário**: Permite que novos usuários se cadastrem com nome, e-mail, senha e tipo de usuário.
- Para fins didáticos o tipo de usuario pode ser escolhido no próprio formulário. Mas esse controle dever ser feito de forma interna em caso de ambiente de produção.
- **Validação de Formulário**: Valida os dados do formulário de registro com feedback instantâneo usando Formik e Yup.
- **Mensagens de Sucesso e Erro**: Exibe mensagens ao usuário sobre o sucesso ou falha do registro.
- **Integração com API**: Conecta-se a uma API RESTful para registrar usuários, com tratamento de erros.
- A api para esse apricativo enconta-se no repositório [geisabitt/api-nestjs](https://github.com/geisabitt/api-nestjs) clique no link faça o clone e a configuração da api antes de iniciar o aplicativo.
- **Personalização de Estilo**: Permite personalização de cores e estilos para uma melhor experiência do usuário.

## Tecnologias Utilizadas

- **React Native**: Para desenvolvimento de aplicativos móveis.
- **Formik**: Para gerenciamento de formulários e validação.
- **Yup**: Para validação de esquemas.
- **Axios**: Para realizar requisições HTTP.

## Instalação

1. Clone o repositório:

 ```bash
 git clone https://github.com/geisabitt/app-react-native
 cd app-react-native
 ```

 2. Instale as dependências:

 ```bash
 npm install
 ```

 3. Configure a conexão com a API

- renomeie o arquivo *exemple.config.js* para *config.js* para se conectar a api

