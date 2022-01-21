# Seven-Segment-Display

O problema consiste em receber um número através de uma requisição e implementar um jogo para acertar este número através de palpites. Ao errar um palpite, irá ser informado se o número obtido é maior ou menor do que o palpite feito. O palpite realizado ou status code de erro de requisição devem ser exibidos na tela no formato de LED de 7 segmentos. O palpite será obtido como entrada em um campo de texto, que deverá ser processado apenas quando o botão ENVIAR for clicado.

# Resolução

## Visão Geral

Para esse desafio, optei por usar React.JS como framework principal da aplicação. Com o seu grande foco na criação de componentes genéricos, reutilizáveis e organizados. A biblioteca styled-components foi utilizada para a montagem do css da aplicação. Em termos de funcionalidade, optei por fazer a request do número a ser adivinhado por meio do ContextAPI. Com ele foi possível organizar a request de uma maneira clara, de fácil manutenção e permitindo a criação de estados globais com Provider. Seria possível fazer essa estrutura utilizando Redux Saga e Ducks também, mas por se tratar apenas de 1 endpoint, uma aplicação relativamente simples e o Redux demandar uma pré-estrutura muito complexa, optei pelo uso do Context.

## States

Algumas variáveis da aplicação foram escritas com uso do Hook useState(). Isso para o controle de quais componentes renderizar na tela, quais serão suas props específicas e quais deverão ser seus comportamentos na aplicação.

## Request

A request foi feita usando um helper desenvolvido, requestHelpers. Utilizando o axios create esse helper poderia ser reutilizado caso houvesse outros enpoints.
No arquivo de Context, onde a request é feita, há tratamentos para a request bem sucedida e caso ela dê error também, já retornando o seu resultado destruturado para um state global.

## Componentes

Os componentes foram montados com a intenção de serem os mais genéricos possíveis, mas que ao mesmo tempo fossem abertos a receber todas as props possíveis e se adaptar a elas. Seja uma mensagem que deva ser exibida, uma cor específica, um reposicionamento em tela, etc. Foram escritos testes unitários básicos para testar principalmente a renderização e recebimento de props desses componentes permitindo uma maior clareza de código, organização e facilidade do seu uso.

## Display

Para a montagem do display de sete segmentos utilizei o pensamento de monta-lo atravéz de uma lógica com tag svg. Cada segmento do display e identificado por uma letra (como na imagem a baixo) que vão ser montados pelo componente Digit, respeitando cada um o seu devido posicionamento e rotação em tela. Após isso, o componente Display identifica qual número foi passado de parâmetro para ele, separando-o de acordo com a sua quantidade de algorismos. Passando de 1 em 1, existe uma constante identificadora, digits.js, que vai comunicar quais segmentos de led devem ser acessos para cada número passado. A quantidade de leds que devem ser mostrados e sua respectiva cor também são passados por props pelo SegmentDisplay.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/7_segment_display_labeled.svg/450px-7_segment_display_labeled.svg.png"/>
