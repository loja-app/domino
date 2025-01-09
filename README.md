# Placar Dominó

O **Placar Dominó** é um aplicativo simples e eficiente para registrar as pontuações de partidas de dominó. Feito para uso pessoal, o app é projetado para ser rápido, sem precisar de internet, e com uma interface limpa, onde você pode ver o placar de duas duplas em tempo real. Além disso, ele usa algumas tecnologias modernas, como o **Wake Lock**, que mantém a tela ligada enquanto você usa o app.

## Funcionalidades

- **Placar de Duplas**: O app permite que você registre a pontuação de duas duplas ao mesmo tempo.
- **Botões de Pontuação**: Cada dupla pode adicionar 5, 10 ou 20 pontos ao placar com apenas um toque.
- **Desfazer**: Se você cometer um erro, não se preocupe! É só apertar o botão de desfazer para voltar atrás na última ação.
- **Responsividade**: O design do app se adapta a diferentes tamanhos de tela, seja no celular ou no computador.
- **Wake Lock**: A tela não desliga enquanto você está utilizando o app, para garantir que você não precise ficar tocando na tela o tempo todo.
- **Modo Offline**: O app foi desenvolvido para funcionar sem internet, e pode ser usado até mesmo em lugares sem sinal.

## Como Usar

### 1. **Abrir o Aplicativo**
Para começar a usar o **Placar Dominó**, basta abrir o arquivo `index.html` em qualquer navegador de sua preferência (Google Chrome, Firefox, etc.).

### 2. **Registrar a Pontuação**
- Cada dupla tem seu próprio placar, visível na tela.
- Para adicionar pontos ao placar, basta clicar em um dos botões de **5**, **10** ou **20 pontos**.
- O placar será automaticamente atualizado com a pontuação que você escolher.

### 3. **Desfazer uma Ação**
- Se você errar ao adicionar pontos, clique no botão de **Desfazer**. Ele vai remover a última pontuação registrada para aquela dupla.

### 4. **Reiniciar o Placar**
- Para reiniciar o placar, basta atualizar a página. Você pode fazer isso de duas maneiras:
  - **Arraste o dedo de cima para baixo** na tela (se estiver no celular) para atualizar.
  - Ou, no navegador de desktop, basta clicar no botão de **atualizar**.

### 5. **Tela Sempre Ligada**
- Enquanto você estiver usando o **Placar Dominó**, a tela do seu dispositivo vai continuar ligada, sem necessidade de interação adicional. Isso é feito automaticamente pelo recurso **Wake Lock**, para garantir que você possa usar o app sem se preocupar com o desligamento da tela.

## Como Instalar no Navegador (PWA)

Para usar o **Placar Dominó** como uma Progressive Web App (PWA) no seu dispositivo, basta seguir os passos abaixo:

### No Celular (Android):

1. **Abrir o App**: Abra o site do **Placar Dominó** no navegador **Google Chrome** (ou outro navegador compatível).
2. **Instalar**: Quando você abrir o app, um banner ou notificação irá aparecer pedindo para **Adicionar à tela inicial**.
   - Toque na opção **Adicionar à tela inicial**.
   - Se não aparecer o banner, toque no ícone de três pontinhos no canto superior direito do navegador e selecione **Instalar** ou **Adicionar à tela inicial**.
3. **Confirmar**: O app será instalado na sua tela inicial, e você poderá usá-lo como se fosse um aplicativo normal, sem precisar abrir o navegador.

### No Computador (Chrome/Edge/Firefox):

1. **Abrir o App**: Abra o site do **Placar Dominó** no navegador **Google Chrome**, **Edge** ou **Firefox**.
2. **Instalar**:
   - **Chrome**: Se o navegador detectar que é um PWA, você verá um botão **Instalar** no canto superior direito, próximo à barra de endereços. Clique nele para adicionar o app à sua tela inicial.
   - **Edge**: Clique no ícone de três pontinhos no canto superior direito e escolha **Apps** > **Instalar este site como um aplicativo**.
   - **Firefox**: O Firefox não possui a função de instalar PWA diretamente, mas você pode usar o app normalmente em uma aba, sem a barra de endereço.

Agora o **Placar Dominó** estará instalado e disponível para você acessar diretamente da sua tela inicial ou do menu de aplicativos.

## Tecnologias Utilizadas

- **HTML5**: Estrutura e semântica da página.
- **CSS3**: Estilo moderno, usando variáveis e recursos de design responsivo.
- **JavaScript**: Lógica do placar, controle de pontuação e desfazer.
- **Service Worker**: Para garantir o funcionamento offline.
- **Wake Lock API**: Mantém a tela ativa enquanto o usuário está no app.
