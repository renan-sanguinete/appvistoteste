# Galeria de Fotos - React Native com Expo - Aplicativo teste prático para App Visto

Este aplicativo é parte de um desafio proposto para uma vaga de emprego no qual deve conter uma galeria de fotos. O app exibir uma lista das fotos capturadas, permitir visualizar os detalhes da foto como data e localização, salvar e excluir imagens.
O aplicativo foi desenvolvido em **React Native**, utilizando **Expo**, **TypeScript**, **Tailwind** e recursos nativos como câmera, armazenamento local de arquivos e geolocalização.

## Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente:  
  ```bash
  npm install -g expo-cli
  ```

## Instalação

```bash
git clone https://github.com/renan-sanguinete/appvistoteste.git
cd appvistoteste
```

### Instale as dependências

```bash
npm install
```

### Expo Prebuild - Necessário para gerar arquivos nativos 

```bash
npx expo prebuild
```

### Rodar no Android (Dispositivo ou Emulador)

```bash
npx expo run:android
```

## Testes

No momento, este projeto não contém testes automatizados. A implementação com o jest-expo causou muitos conflitos com as dependencias já existentes e retornou erros persistentes.

## Observações

Este projeto foi desenvolvido e testado para Android. Projeto feito utilizando o sistema operacional Windows 11 para desenvolvimento e sem acesso a um aparelho com sistema iOS para testes. É necessário configurações adicionais para rodar o projeto para iOS.