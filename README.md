# TCC - Fechamento do curso PUCRS
   ## Desenvolvimento de solução tecnológica

# Sistema para Conscientização e Descarte Correto de Alimentos

   ### 📝 Resumo da Ideia

   **Resumo:**  
   Esta plataforma visa unir diferentes atores da cadeia alimentar, promovendo o consumo consciente e o reaproveitamento, tornando o combate ao desperdício de alimentos mais colaborativo e eficiente. 🍎🤝👨‍🌾🌱

   Este projeto é um sistema que conecta três principais perfis: quem compra (e pode desperdiçar), quem vende (e descarta grandes volumes) e quem recebe (através de doações ou aproveitamento de restos). O objetivo é criar um ciclo de **conscientização, reaproveitamento** e **redução do desperdício de alimentos**.

   ### Problema a ser trabalhado 
   Produção responsável e consumo verde
   
   Esta plataforma é uma solução para todos: agricultores, comerciantes ou a população em geral. O objetivo é criar uma ferramenta que possibilite a correspondência entre alimento e quem precisa dele, seja para consumo próprio, para ração animal ou para fertilizantes. Com isso, conseguimos reduzir o desperdício de alimentos e, consequentemente, a emissão de dióxido de carbono.

   ### O que será desenvolvido?
   O sistema visa classificar alimentos por meio de imagens e data de validade e identificar potenciais usuários interessados nos alimentos. Em um único aplicativo, o usuário pode doar, pedir doação de alimentos e ver suas estatísticas de desperdício e sustentabilidade.

![Logo](/images/Logo1.png)
![Logo](/images/Logo2.png)

  ### 🎯  Objetivo

  - **Geral:**  
    Criar uma plataforma que incentive e facilite o descarte correto e a doação de alimentos, reduzindo o desperdício.

  - **Específicos:**
    - Conscientizar compradores sobre consumo responsável.
    - Oferecer aos vendedores uma forma de cadastrar excedentes.
    - Conectar excedentes a pessoas ou empresas que possam reaproveitar esses alimentos.

### Contents:

- [Descrição](#Descrição)
- [Descrição Detalhada](#Descrição-detalhada)
- [App](#app)
- [Protótipo](#Protótipo)
- [Arquitetura](#Arquitetura)
- [Tecnologia](#Tecnologia)


### Descrição

Resolver o problema do desperdício de alimentos e incentivar o consumo consciente.

### Descrição detalhada

  #### O Problema
  Ter responsabilidade ambiental significa aplicar inovação em seus negócios. Com isso em mente, este projeto tem o propósito de diminuir o desperdício, a poluição e a emissão de gases decorrentes do descarte inadequado de alimentos.


  #### Descrição
  O sistema visa solucionar esses problemas relacionados à produção responsável e ao consumo sustentável, evitando o possível acúmulo de resíduos ou a emissão de gases pelos mesmos. Preenchendo a lacuna entre agricultores e doadores, que desejam descartar corretamente esses alimentos, e pessoas que podem precisar e utilizá-los para alguma finalidade, desde o autoconsumo até a fertilização. O sistema também fornecerá estatísticas sobre a quantidade de alimentos economizada e/ou desperdiçada. 


  #### Database
  Alguns dados para considerar sobre este tema:
  - 30% de todos os alimentos do mundo são desperdiçados - ONU
  - 45% de todas as frutas e vegetais cultivados são desperdiçados - ONU
  - O desperdício de alimentos é responsável por 8% das emissões de gases que desencadeiam o efeito estufa - ONU


  #### O que está sendo desenvolvido?
  Está sendo implementada uma aplicação com tais tecnologias:
  Frontend: React;
  Backend: Javascript;
  DB: MySQL;
  Infra: Docker + CI/CD;
  Serviços: geolocalização (mapa de doações próximas) , google cloud


  #### Como usar?
  Primeiro, é preciso criar uma conta para acessar os recursos e todas as informações sobre o processo.

  No menu principal, o aplicativo apresentará algumas informações sobre questões relacionadas ao desperdício, incentivando o usuário a aderir ao movimento sustentável.

  No perfil, o usuário seleciona qual tipo de doação será realizada e assim serão demonstrados pontos de coleta mais próximos a região cadastrada com possíveis alimentos a serem retirados ou pontos de coleta para doações. Como o cenário apresenta diferentes modalidades, foi necessário identificar personas para cada tipo de usuário para facilitar o processo. São elas:

      👥 Personas

      - Consumidor/Doador:  
      Busca dicas de consumo responsável e opções para doar pequenos volumes de alimentos.

      - Comerciante/Instituição: 
      Necessita cadastrar alimentos prestes a vencer, ofertando doações para evitar o descarte.

      - Recebedor: 
      Recebe notificações sobre alimentos disponíveis e pode buscar ou agendar a coleta de doações.


  #### Porque é importante?
  É responsabilidade social tomar medidas não apenas para controlar todos os tipos de resíduos, mas também para proteger os recursos naturais. Isso pode ser feito por meio de abordagens e iniciativas inovadoras com um propósito maior.



### App

Para simular o uso do aplicativo clique no link abaixo. Inicialmente o intuito era ser um aplicativo móvel, porém diante algumas dificuldades e pouco conhecimento em linguagens para IOS e Android, foi restringido o desenvolvimento para uma aplicação web como foi ensinado durante o curso. O projeto em sim foi desenvolvido em javascript e html.

Contudo, no protótipo o tamanho da tela será redimencionado para simular o funcionamento em um celular. O aplicativo ainda não está completo, mas é uma ótima maneira de experimentar e sentir como será no futuro.

Você tem duas opções para acessar o aplicativo: clicar em Entrar e criar suas próprias credenciais de acesso ou usar o exemplo:

e-mail: alex@mail.com e senha: 123@abc

Ao fazer login, agora você pode adicionar alimentos, fazer pedidos, ver seus pedidos mais recentes e suas estatísticas.

[Clique aqui para abrir o aplicativo em web](http://192.168.0.28:8080/auth) 

### Protótipo

As imagens abaixo mostram os protótipos das telas e suas funcionalidades:

![screens1](/images/TodasTelas.png)

### Arquitetura
![Architecture](/images/architecture.png)

1) O usuário acessa o aplicativo móvel
2) Carrega uma foto no celular e adiciona um alimento
3) O NodeRed recebe os dados e os envia para uma nuvem privada
4) A imagem é enviada para um modelo criado com Reconhecimento Visual e Watson Studio para ser classificada em consumo, ração animal e fertilizante. Em seguida, os dados serão armazenados no Cloud Object Storage.
5) O modelo de Aprendizado de Máquina preverá um potencial interesse no alimento e enviará a notificação para contribuir com a correspondência.



