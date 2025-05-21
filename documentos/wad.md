<div align="center">

<img src="../assets/docs/readme/inteli.png">

</div>

# WAD - Web Application Document - Reserva de Salas - Inteli

## Eduardo Alonso Casarini 

#### Sistema de Reserva de Salas

## Sumário

[1. Introdução](#c1)

[2. Diagrama do Banco de Dados](#c2)

[3. Projeto Técnico da Aplicação Web](#c3)

[4. Desenvolvimento da Aplicação Web](#c4)

[5. Testes da Aplicação Web](#c5)

[6. Estudo de Mercado e Plano de Marketing](#c6)

[7. Conclusões e trabalhos futuros](#c7)

[8. Referências](c#8)

[Anexos](#c9)

<br>

# <a name="c1"></a>1. Introdução

Este documento WAD (Web Application Documentation) tem como objetivo registrar as decisões técnicas, estruturais e funcionais adotadas no desenvolvimento do projeto individual.

O projeto consiste na construção de um sistema web de reserva de salas, que permite que usuários visualizem salas disponíveis, façam reservas com data e horário definidos, e acompanhem o status de suas solicitações. A proposta simula um cenário real de gestão de espaços compartilhados, como salas de reunião, auditórios ou ambientes acadêmicos. 

A aplicação foi desenvolvida utilizando _Node.js_ com o framework _Express.js_, empregando o padrão de arquitetura MVC (Model-View-Controller) para garantir uma separação clara de responsabilidades entre dados, interface e lógica de controle. As views foram construídas com o motor de template _EJS_, possibilitando a geração dinâmica de páginas _HTML_ com base nas informações do banco de dados.

O sistema utiliza um banco de dados _PostgreSQL_ hospedado no _Supabase_, responsável por armazenar as informações de usuários (client), salas (room) e reservas (booking). A integração com o banco foi feita por meio da biblioteca pg, com as credenciais de acesso gerenciadas de forma segura via variáveis de ambiente definidas em um arquivo .env.

Este WAD foi estruturado para servir como guia técnico do projeto, facilitando a compreensão do sistema por avaliadores, colaboradores e qualquer pessoa que deseje manter ou evoluir a aplicação.

# <a name="c2"></a>2. Diagrama do Banco de Dados

O diagrama do banco de dados é uma representação visual da estrutura lógica das informações que serão manipuladas pela aplicação. Ele é essencial para entender como os dados se organizam, se relacionam e sustentam as funcionalidades do sistema. Através da modelagem, é possível garantir a integridade, consistência e escalabilidade da base de dados desde as primeiras etapas do desenvolvimento.

No contexto deste projeto — um sistema web de reserva de salas — o diagrama foi planejado para representar de forma clara e eficiente os principais elementos da aplicação: usuários, salas e reservas. A proposta do sistema é permitir que usuários realizem reservas de salas com data e horário definidos, garantindo que os dados dessas interações fiquem devidamente registrados, rastreáveis e organizados.

A modelagem foi construída com base nas seguintes entidades:

**client**: representa os usuários da aplicação. Cada cliente pode ser um usuário comum ou um administrador, com acesso diferenciado no sistema.

**room**: representa as salas disponíveis para reserva, com informações como nome, capacidade, localização e disponibilidade.

**booking**: representa as reservas realizadas, ligando um usuário a uma sala em um intervalo de tempo específico, com status definido.

Essas entidades se relacionam por meio de chaves estrangeiras, compondo dois relacionamentos do tipo 1:N (um para muitos):

Um cliente pode ter múltiplas reservas;

Uma sala pode estar associada a múltiplas reservas.

Abaixo está o diagrama entidade-relacionamento (ER) criado para representar essas estruturas e relações:

<div align="center">

<sub>Figura 1: Diagrama-ER</sub>

<img src="../assets/docs/wad/diagrama-ER.svg">

<sub>Fonte: Autoria própria (2025)</sub>

</div>

## 2.1. Escopo do Projeto (sprints 1 e 4)

### 2.1.1. Modelo de 5 Forças de Porter

### Introdução

A análise das Cinco Forças de Porter é uma ferramenta estratégica utilizada para entender o nível de competitividade de um setor e os fatores que afetam sua atratividade. No contexto do Instituto Cactus, essa análise nos permite avaliar o ambiente em que a organização atua, identificar ameaças e oportunidades externas, e embasar decisões estratégicas para fortalecer seu impacto social, sustentabilidade financeira e posicionamento no ecossistema de educação e saúde mental no Brasil.

### Forças de Porter

#### Ameaça de novos entrantes

O setor é regulado por normas como a **Lei 13.019/2014**, que exige transparência, capacidade de execução e histórico de impacto para firmar parcerias públicas. Além disso, conquistar reputação e acesso a financiamentos é um processo demorado. Por isso, a ameaça de novos entrantes é **baixa**.

#### Poder de barganha dos fornecedores

O Instituto depende de **doações privadas, subsídios públicos, voluntariado qualificado e parcerias com instituições acadêmicas**. Esses agentes têm grande influência, especialmente na definição de prioridades e na exigência por resultados mensuráveis. Isso torna o poder de barganha dos fornecedores **alto**.

#### Poder de barganha dos clientes

Os “clientes” do Instituto incluem **financiadores, órgãos públicos e beneficiários finais**. Todos demandam **transparência, impacto mensurável** e **abordagens contextualizadas**. Esse público acompanha os resultados de perto e cobra excelência na entrega, o que gera um poder de barganha **moderado a alto**.

#### Ameaça de substitutos

Soluções como **aplicativos de meditação, plataformas de psicoterapia online** e **programas públicos (CAPS, RAPS)** têm ganhado espaço. Apesar disso, poucas dessas iniciativas conseguem unir impacto social com a **geração de dados confiáveis e atuação estratégica em políticas públicas**, como faz o Instituto Cactus. A ameaça é **moderada**.

#### Rivalidade entre concorrentes

Outras OSCs atuam na área (como CVV ou Instituto Vita Alere), mas poucas têm o mesmo nível de **sofisticação técnica, produção de evidências e influência em políticas públicas**. O diferencial do Cactus está na capacidade de transformar conhecimento em ação, o que mantém a **rivalidade em nível moderado**.

### 2.1.2. Análise SWOT da Instituição Parceira

O Instituto Cactus posiciona-se como referência em saúde mental no Brasil, destacando-se por sua abordagem gratuita e inclusiva, focada em populações vulneráveis.

<div align="center">
<sub>Figura 1 - Matriz SWOT</sub>

![Matriz SWOT](../assets/ImagensWAD/SWOT-Analise.svg)

<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

- _Forças (Strengths)_ incluem parceiros (exemplo: Inteli) e multissetorialidade (tecnologia, advocacy e ciência), além de visibilidade midiática.
- _Fraquezas (Weaknesses)_ envolvem equipe reduzida, dependência de financiamento externo e cobertura geográfica limitada.
- _Oportunidades (Opportunities)_ residem na integração ao SUS, uso de IA para triagem e expansão via parcerias globais.
- _Ameaças (Threats)_ abrangem concorrência de plataformas pagas (Zenklub, Vittude), instabilidade política e riscos legais (LGPD).

Sua diferenciação está na gratuidade e foco social, enfrentando desafios de escalabilidade em um mercado competitivo.

### 2.1.3. Solução

A seção Solução de um documento WAD apresenta, de forma detalhada, a resposta tecnológica proposta para o problema identificado. Nesta seção, são descritos a arquitetura da aplicação web, suas funcionalidades principais, interfaces de usuário, fluxos de navegação e integrações com outros sistemas. O objetivo é fornecer uma visão clara de como a solução funcionará na prática, estabelecendo as bases técnicas e funcionais que orientarão o desenvolvimento. A solução deve demonstrar como a tecnologia proposta atende diretamente às necessidades dos usuários-alvo e resolve os problemas apresentados na seção anterior.

#### Problema a ser resolvido

O adoecimento mental cresce globalmente, afetando principalmente jovens e mulheres. No Brasil, estigma e fragmentação dos serviços dificultam acesso e integração do cuidado. Investimentos insuficientes prejudicam prevenção, promoção e atenção à saúde mental. Necessita-se uma solução sistemática que conecte usuários, profissionais e serviços digitais para reduzir a lacuna de tratamento.

#### Dados disponíveisalise.svg"

30% das pessoas serão afetadas por transtornos mentais ao longo da vida[[1]](#fonte1), mas apenas 10% terão acesso a tratamento[[2]](#fonte2). Em 2019, 970 milhões de pessoas (~13% da população mundial) viviam com condições de saúde mental[[3]](#fonte3).
No Brasil, 60% dos recursos destinam-se a hospitais psiquiátricos, enquanto apenas 2% do orçamento de saúde é direcionado à saúde mental[[4]](#fonte4). O país lidera em ansiedade na América Latina e é o 5º em depressão mundial[[5]](#fonte5).

#### Solução proposta

Aplicação web que recomenda ações e rotinas saudáveis a pacientes, indicando locais e serviços para adoção desses hábitos (como grupos de caminhada, hortas comunitárias e aulas de relaxamento). Administradores acessam dashboard com dados agregados anônimos de uso e progresso, permitindo monitorar engajamento, identificar lacunas e ajustar intervenções em tempo real.

#### Forma de utilização da solução

O paciente acessa a aplicação via navegador, com suporte para dispositivos móveis e computadores. O sistema apresenta filtros de pesquisa para afunilar resultados, recomendando intervenções personalizadas baseadas nas preferências e necessidades do usuário. A interface intuitiva facilita a navegação e localização de recursos próximos à localidade do paciente.

#### Benefícios esperados

Fortalecimento da saúde mental pela adoção de hábitos saudáveis e conexão com serviços locais. Redução do gap de tratamento pela democratização do acesso a recursos de apoio. Fornecimento de dados aos gestores para aprimoramento contínuo de políticas públicas. Diminuição do estigma por meio da normalização do cuidado preventivo com a saúde mental.

#### Critério de sucesso e como será avaliado

O sucesso será medido por: engajamento dos usuários (número de acessos e interações); implementação das recomendações (taxa de visitas aos serviços indicados); feedback dos pacientes e profissionais (através de pesquisas de satisfação); e impacto na saúde mental (questionários de bem-estar pré e pós-uso). Análises trimestrais permitirão ajustes e melhorias contínuas na plataforma.

### 2.1.4. Value Proposition Canvas:

O Value Proposition Canvas é uma ferramenta estratégica criada por Alexander Osterwalder e Yves Pigneur com o objetivo de visualizar e estruturar o que um produto ou serviço deve oferecer em combinação com o que seus clientes desejam e precisam. Ele é dividido em dois blocos: o Segmento de Clientes, que identifica o que os clientes querem realizar, a frustração que sentem e as vantagens que desejam; e a Proposta de Valor, que descreve os bens, benefícios e soluções desenvolvidos para atender a essas demandas.

Na plataforma web proposta para o Instituto Cactus, o objetivo é oferecer uma solução gratuita, acessível e humanizada para expandir o acesso da população brasileira — especialmente adolescentes e mulheres em situação de risco — a informações confiáveis sobre serviços de promoção, prevenção e cuidado em saúde mental. A seguir, apresentamos o Canvas de Proposta de Valor, onde descrevemos como essa solução atende às necessidades de seus grupos-alvo e gera benefícios sociais concretos.

<div align="center">
<sub>Figura 2 - Canvas de proposta de valor</sub>

![Canva Proposta de valor](../assets/ImagensWAD/value_proposition_canvas.png)

<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>
<br>

## Segmento dos clientes

### Tarefas do cliente

Os usuários da plataforma desejam conhecer serviços gratuitos e locais de saúde mental, obter informações confiáveis sobre atividades no setor, decidir sobre recursos adequados aos seus perfis, compartilhar informações com outras pessoas e apoiar o autocuidado de forma segura.

### Dores do cliente

Entre os principais problemas enfrentados pelos usuários estão a falta de informações centralizadas sobre serviços de saúde mental, a indisponibilidade desses serviços, o estigma e o medo de buscar ajuda, a falta de transparência ou confiabilidade nas informações apresentadas e as plataformas existentes serem pouco intuitivas ou confusas.

### Ganhos do cliente

Os usuários esperam usufruir de serviços confiáveis de maneira prática, encontrar informações bem apresentadas e acessíveis, contar com um ambiente acolhedor para leitura em linguagem simples, serem incentivados ao autocuidado e à prevenção e tomarem conhecimento de atividades e iniciativas comunitárias.

## Proposta de valor

### Aliviadores de dor

Para facilitar a redução das dores reconhecidas, a plataforma oferece geolocalização de instituições próximas, filtros por perfil de usuário e tipo de serviço, credibilidade e transparência nas informações oferecidas, centralização das informações em um único ponto e instruções claramente definidas sobre quando e como acessar o suporte.

### Criadores de ganho

A plataforma disponibiliza uma interface fácil de usar e conteúdo centralizado, atualizado constantemente, validado por profissionais de saúde mental, apoio ao empoderamento individual e comunitário, e inclusão digital e social através do acesso gratuito.

### Produtos e serviços

Os principais serviços e produtos que a plataforma oferece incluem uma plataforma web gratuita para localizar serviços de saúde mental, lista e mapa interativo com detalhes completos dos serviços, seção educativa com conteúdo validado, destaques de boas práticas e histórias de sucesso reais, além de acesso sem necessidade de login ou registro.

Esta proposta de valor destaca o papel da plataforma na convergência entre tecnologia, compaixão e impacto social, oferecendo uma solução que não apenas educa, mas também acolhe, conecta e transforma. Ao proporcionar acesso ao conhecimento e aos serviços de saúde mental, o projeto contribui para a construção de uma rede de cuidado mais justa, inclusiva e eficiente no Brasil.

### 2.1.5. Matriz de Riscos do Projeto

A Matriz de Riscos é uma ferramenta que possibilita a análise de riscos de acordo com dois fatores: **probabilidade** e **impacto**. A probabilidade avalia o quanto é provável que um risco aconteça, comumente relacionada à frequência com que determinado risco pode ocorrer. O impacto está relacionado a quanto aquilo afetará o projeto e a empresa caso o risco se concretize.  
A partir dessa análise, é possível priorizar planos de mitigação e contingência, para evitar que os riscos comprometam o sucesso do projeto.

<div align="center">
<sup>Figura 3 - Matriz de Riscos</sup>

![Imagem da Matriz de Risco](../assets/ImagensWAD/MatrizDeRisco.svg)

<sub>Fonte: Autoria própria (2025)</sub>

</div>

---

## Sobre os riscos analisados na matriz:

### Falhas na integração da API

Possui impacto moderado e probabilidade média (50%), o que o classifica como um risco relevante para o desenvolvimento da plataforma.  
**Oportunidade:** Estabelecer testes de integração contínuos e validações automáticas entre os sistemas, garantindo que falhas sejam detectadas precocemente.

### Dificuldade em obter dados locais úteis

Apresenta impacto baixo e probabilidade baixa (30%), representando um risco mais controlável.  
**Oportunidade:** Construção de parcerias estratégicas com fornecedores de dados locais e uso de APIs públicas ou fontes alternativas.

### Baixa adesão por parte dos usuários

Com impacto alto e probabilidade alta (70%), esse risco é crítico e exige atenção especial.  
**Oportunidade:** Desenvolvimento de campanhas de comunicação focadas nos benefícios da plataforma, além de entrevistas com usuários-alvo para ajustar a experiência conforme suas necessidades.

### Má performance do sistema com grande volume de acessos

Apresenta impacto muito alto e probabilidade média (70%), o que pode comprometer seriamente a experiência dos usuários.  
**Oportunidade:** Implementação de testes de carga escaláveis, utilização de infraestrutura em nuvem e sistemas de autoescalabilidade.

### Dificuldade em manter dados atualizados

Possui impacto moderado e probabilidade média (50%).  
**Oportunidade:** Criar rotinas automatizadas de atualização de dados e adoção de fontes dinâmicas e integradas.

### Falta de engajamento de parceiros institucionais

Este risco tem impacto alto e probabilidade média (50%).  
**Oportunidade:** Desenvolvimento de pacotes de benefícios exclusivos para parceiros e campanhas de conscientização sobre a importância do projeto.

### Dificuldades com autenticação segura de usuários

Com impacto alto e probabilidade baixa (30%), esse risco pode ser mitigado com práticas de segurança reforçadas.  
**Oportunidade:** Implementação de autenticação multifator (MFA) e revisão contínua das políticas de segurança da informação.

### Integração falha entre front-end e back-end

Possui impacto moderado e probabilidade alta (70%).  
**Oportunidade:** Definição de contratos claros de APIs e uso de ferramentas de monitoramento contínuo de integrações.

### Performance ruim em dispositivos móveis

Apresenta impacto alto e probabilidade média (50%).  
**Oportunidade:** Desenvolvimento focado em "mobile first", testes de usabilidade em diferentes dispositivos e otimização contínua de recursos.

### APIs com má configuração de autenticação/autorização

Com impacto muito alto e probabilidade baixa (30%), trata-se de um risco crítico à segurança.  
**Oportunidade:** Aplicar auditorias regulares de segurança e revisão das práticas de OAuth e autenticação.

### Plataforma não ser intuitiva para públicos variados

Este risco apresenta impacto muito alto e probabilidade média (70%).  
**Oportunidade:** Desenvolvimento de jornadas de usuário adaptativas, realização de testes de UX e disponibilização de tutoriais interativos.

### Falta de material educativo atrativo para usuários

Com impacto baixo e probabilidade baixa (30%).  
**Oportunidade:** Produção de conteúdos dinâmicos, vídeos tutoriais curtos e exemplos práticos de uso da plataforma.

---

A análise realizada por meio da matriz de impacto e probabilidade permitiu identificar os riscos mais críticos que ameaçam o sucesso do projeto. A baixa adesão dos usuários, a má performance sob alta carga e os problemas de usabilidade para públicos diversos destacam-se como pontos de atenção prioritária. Esses riscos não apenas impactam diretamente os objetivos do projeto, como também comprometem a experiência e o engajamento dos usuários finais.

Diante disso, torna-se imprescindível a implementação de planos de ação específicos, contínuos e bem estruturados. Estratégias como campanhas de comunicação voltadas para o público-alvo, melhorias técnicas no desempenho da plataforma, e esforços voltados à acessibilidade e à inclusão digital são medidas essenciais para a mitigação dos riscos. Além disso, o treinamento de parceiros e a coleta de feedback recorrente contribuem para ajustes ágeis e eficazes ao longo do desenvolvimento.

Portanto, o enfrentamento desses riscos deve ser encarado não como uma etapa pontual, mas como parte integrante da governança do projeto, assegurando sua sustentabilidade, escalabilidade e impacto positivo no público atendido.

## 2.2. Personas

Personas são representações fictícias, porém realistas, de usuários típicos de um produto ou serviço. Elas são construídas com base em dados reais sobre o público-alvo, combinando características demográficas, comportamentais, emocionais e tecnológicas para sintetizar perfis que guiam as decisões de design e desenvolvimento. No contexto deste projeto, as personas ajudam a entender melhor as motivações, dores e expectativas de diferentes tipos de usuários que acessarão a plataforma como adolescentes em busca de acolhimento, adultos em crise emocional ou profissionais da saúde mental. Ao adotar personas, a equipe consegue alinhar funcionalidades, linguagem, interface e prioridades de usabilidade às necessidades concretas do público final, garantindo que o produto seja mais útil, inclusivo e eficaz desde a fase do MVP até futuras iterações.

Para este projeto, foram desenvolvidas três fichas de personas com o objetivo de compreender as principais necessidades, dores e comportamentos do público-alvo. Essa etapa é essencial para orientar o escopo funcional da aplicação e apoiar as decisões relacionadas à arquitetura do site. Cada persona representa um perfil distinto de usuário e reflete demandas centrais abordadas pelo projeto, oferecendo uma visão mais empática e abrangente para a equipe de desenvolvimento. A primeira persona é Laura Martins, uma adolescente com sintomas de ansiedade, que simboliza a importância do acolhimento e do acesso a informações confiáveis voltadas ao público jovem. A segunda é Pedro Henrique, um jovem que busca soluções gratuitas e acessíveis, evidenciando a necessidade de filtros eficientes e navegação simples. Por fim, temos Fátima da Silva, uma mulher adulta que representa a busca por sigilo e credibilidade, reforçando o valor do anonimato e da segurança das informações na plataforma.

<div align="center">
<sub>Figura 4 - Ficha de Laura Martins</sub>

![Ficha de Laura Martins](../assets/ImagensWAD/secao_2/ficha_Laura_Martins.png)
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>
<br>

<div align="center">
<sub>Figura 5 - Ficha de Pedro Henrique</sub>

![Ficha de Pedro Henrique](../assets/ImagensWAD/secao_2/ficha_Pedro_Henrique.png)
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>
<br>

<div align="center">
<sub>Figura 6 - Ficha de Fátima da Silva</sub>

![Ficha de Fátima da Silva](../assets/ImagensWAD/secao_2/ficha_Fatima_da_Silva.png)
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>
<br>

Em resumo, a definição de Personas, aliada à compreensão da estrutura da Rede de Atenção Psicossocial (RAPS) e ao planejamento da aplicação web, permite alinhar as funcionalidades da plataforma às reais necessidades dos usuários. Com foco em acessibilidade, confiança e usabilidade, o projeto busca promover o acesso qualificado à saúde mental, conectando diferentes públicos a serviços essenciais de forma simples, segura e eficaz.

## 2.3. User Stories

As user stories são pequenas descrições que mostram o que os usuários querem ou precisam fazer dentro da plataforma. Elas são criadas com base nas Personas definidas anteriormente pela equipe. Além disso, servem como uma ferramenta para a gente entender melhor quem são essas pessoas, o que esperam da experiência e como podemos criar soluções mais próximas da realidade delas. No nosso projeto, são essenciais para garantir que a plataforma seja útil, acessível e feita com foco nas necessidades e demandas fos futuros usuários. Abaixo, foram definidas todas as User Stories que construímos com base nas nossas Personas, tornando a construção do nosso projeto mais próxima da realidade do público-alvo que buscamos atender.

---

### US01 – Fátima: acesso discreto e simples

| Identificação            | US01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Persona**              | Fátima                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **User Story**           | Como mulher que realiza trabalho doméstico, posso encontrar de forma discreta locais que ofereçam atividades de promoção de saúde mental, para que eu possa cuidar da minha saúde emocional sem medo de julgamento e sem dificuldade de acesso.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Critério de aceite 1** | Dado que Fátima sente vergonha de procurar ajuda e tem dificuldade com tecnologia, quando ela acessar a plataforma pelo celular, então sua identidade não será revelada e o site será simples e intuitivo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Critérios INVEST**     | **Independente**: porque a funcionalidade pode ser desenvolvida independente de outros fatores técnicos.<br><br>**Negociável**: porque pode ser discutido qual será o nível de discrição dos dados e simplicidade da interface.<br><br>**Valiosa**: pois atende uma necessidade real da Persona, a qual representa diversas pessoas que ainda não se sentem à vontade em abordar o tema para as pessoas à sua volta.<br><br>**Estimável**: pois é possível definir e estimar o que será e o que não será, além de em quais proporções<br><br>**Pequena**: É uma tarefa com funcionalidades simples de serem implementadas, pois está intrinsecamente ligada com a diminuição da quantidade de dados e das etapas de navegação para o usuário.<br><br>**Testável**: Pois testes de usabilidade conseguem verificar se o usuário acessa sem precisar se identificar totalmente e se consegue navegar de maneira simples e intuitiva. |

---

### US02 – Fátima: alívio de tensão

| Identificação            | US02                                                                                                                                                                                                                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Persona**              | Fátima                                                                                                                                                                                                                                                                           |
| **User Story**           | Como mulher que enfrenta uma rotina estressante de trabalho, posso encontrar atividades para aliviar a tensão, com o intuito de melhorar meu equilíbrio emocional.                                                                                                               |
| **Critério de aceite 1** | Dado que Fátima sente-se sobrecarregada, quando acessar a plataforma, então o site deve listar atividades que funcionem como válvulas de escape de forma organizada e de fácil visualização, com descrições práticas daquele local, a fim de apontar benefícios e público-alvo.. |
| **Critérios INVEST**     | Independente, Negociável, Valiosa, Estimável, Pequena, Testável                                                                                                                                                                                                                  |

---

### US03 – Fátima: acessível via celular

| Identificação            | US03                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Persona**              | Fátima                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **User Story**           | Como mulher que só usa o celular, posso acessar a plataforma com facilidade, para conseguir ver as informações sem dificuldades técnicas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Critério de aceite 1** | Dado que Fátima usa apenas celular, quando entrar na plataforma, então tudo deve se adaptar à tela, com botões grandes e menus simples.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Critérios INVEST**     | **Independente**: Não depende de outras funcionalidades.<br><br>**Negociável**: Pode ser ajustado o nível de responsividade de acordo com os testes.<br><br>**Valiosa**: Garante que o usuário consiga de fato acessar a plataforma, com conforto visual.<br><br>**Estimável**: É possível estimar quanto tempo e esforço será necessário para adaptar a interface para mobile.<br><br>**Pequena**: É possível entregar essa funcionalidade de forma enxuta, mas que funcione muito bem para dispositivo mobile.<br><br>**Testável**: É possível testar em diferentes celulares se o conteúdo carrega bem e se é fácil de usar, por exemplo. |

---

### US04 – Fátima: linguagem simples

| Identificação            | US04                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Persona**              | Fátima                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **User Story**           | Como mulher com baixa escolaridade, posso entender os textos do site, para não depender de ninguém e me sentir confortável e independente.                                                                                                                                                                                                                                                                                           |
| **Critério de aceite 1** | Dado que Fátima tem dificuldade com textos longos, quando estiver lendo no site, então o conteúdo deve ter linguagem simples, frases curtas e diretas.                                                                                                                                                                                                                                                                               |
| **Critérios INVEST**     | **Independente**: A linguagem pode ser ajustada separadamente das outras funcionalidades.<br><br>**Negociável**: Pode ser definido junto com a equipe qual o nível de simplificação.<br><br>**Valiosa**: Facilita a inclusão digital e o empoderamento.<br><br>**Estimável**: É possível calcular quais partes do conteúdo precisam ser adaptadas.<br><br>**Testável**: Pode-se validar com usuários reais a compreensão dos textos. |

---

### US05 – Laura: grupos voltados para jovens

| Identificação            | US05                                                                                                                                                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Persona**              | Laura                                                                                                                                                                                                                                           |
| **User Story**           | Como estudante do ensino médio que sente ansiedade, posso encontrar grupos voltados para jovens, para conversar, desabafar e entender como decisões que respeitem meus limites.                                                                 |
| **Critério de aceite 1** | Dado que Laura busca espaços com pessoas da mesma faixa etária, quando acessar a plataforma, então deve ver uma lista com grupos pensados para adolescentes e linguagem acolhedora.                                                             |
| **Critérios INVEST**     | **Independente**: Não depende de outros recursos.<br><br>**Valiosa**: Ajuda adolescentes a lidarem com ansiedade em grupos.<br><br>**Testável**: É possível verificar se os grupos estão segmentados para jovens e se a comunicação é adequada. |

---

### US06 – Laura: criação de conta com privacidade

| Identificação            | US06                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Persona**              | Laura                                                                                                                                                  |
| **User Story**           | Como adolescente mais reservada, não quero ter minha identidade exposta, para ter privacidade quando acessar os serviços voltados para a saúde mental. |
| **Critério de aceite 1** | Dado que Laura quer manter sigilo, quando precisar se cadastrar, então poderá usar só o primeiro nome, sem foto ou informações pessoais visíveis.      |
| **Critérios INVEST**     | Valiosa, Testável                                                                                                                                      |

---

### US07 – Laura: indicações confiáveis

| Identificação            | US07                                                                                                                                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Persona**              | Laura                                                                                                                                                                                                     |
| **User Story**           | Como adolescente que já busca conteúdos em redes sociais, posso acessar indicações confiáveis sobre saúde mental, para estar segura de que a informação daquela fonte é verídica e tecnicamente embasada. |
| **Critério de aceite 1** | Dado que Laura busca fontes fidedignas, quando estiver navegando, então deve ver links que direcionam para conteúdos de parceiros confiáveis, organizados por tema.                                       |
| **Critérios INVEST**     | Independente, Valiosa                                                                                                                                                                                     |

---

### US08 – Pedro: conteúdos sobre emoções

| Identificação            | US08                                                                                                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Persona**              | Pedro                                                                                                                                                                                     |
| **User Story**           | Como adolescente que às vezes se sente triste e confuso, quero encontrar conteúdos simples sobre emoções, para compreender melhor o que estou sentindo e me sentir acolhido.              |
| **Critério de aceite 1** | Dado que Pedro se sente confuso com o que está sentindo, quando acessar o site, então deve encontrar explicações claras sobre emoções, com exemplos cotidianos e uma linguagem acessível. |
| **Critérios INVEST**     | Valiosa, Testável                                                                                                                                                                         |

---

### US09 – Pedro: ajuda com privacidade

| Identificação            | US09                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Persona**              | Pedro                                                                                                                                                  |
| **User Story**           | Como adolescente que sente vergonha de procurar atendimento, posso ver opções de ajuda próximas sem me identificar, para buscar ajuda com privacidade. |
| **Critério de aceite 1** | Dado que Pedro tem vergonha, quando buscar serviços, então poderá visualizar locais sem login completo, podendo informar só nome e bairro.             |
| **Critérios INVEST**     | **Valiosa**: Permite acesso à ajuda sem exposição pessoal.<br><br>**Testável**: Pode-se verificar se é possível ver os serviços sem cadastro completo. |

---

### US10 – Pedro: acessibilidade via celular

| Identificação            | US10                                                                                                                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Persona**              | Pedro                                                                                                                                                                                                 |
| **User Story**           | Como adolescente que possui muita afinidade com a tecnologia presente no smartphone, posso acessar o site com facilidade no celular, para facilitar o meu acesso mesmo quando estou mais desmotivado. |
| **Critério de aceite 1** | Dado que Pedro acessa apenas por celular, quando abrir o site, então a interface deve ser responsiva, com textos legíveis e menus simples.                                                            |
| **Critérios INVEST**     | Valiosa, Testável                                                                                                                                                                                     |

---

Em suma, a User Story é uma ferramente extremamente útil para traduzir as necessidades das pessoas em ideias concretas para o desenvolvimento da plataforma. Através delas, conseguimos manter o foco em quem realmente importa: os usuários. Com ela, podemos construir soluções dentro da nossa plataforma com base nas necessidades que nossas Personas possuem, orientando, ainda, decisões de design e fortalecendo o propósito do projeto, que é criar um espaço seguro, acessível e acolhedor para quem busca apoio em saúde mental.

# <a name="c3"></a>3. Projeto da Aplicação Web (sprints 1 a 4)

## 3.1. Arquitetura (sprints 3 e 4)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário_

## 3.2. Wireframes

Nesta seção será abordado o WireFrame do projeto. O Wireframe é uma representação visual simplificada da interface do usuário, que mostra a estrutura, layout e organização dos elementos em uma página ou tela sem se preocupar com cores, imagens ou detalhes estéticos. Trata-se de um esquema básico que define onde cada componente (botões, menus, campos de texto, etc.) estará posicionado na aplicação, servindo como um "esqueleto". Os wireframes são fundamentais no processo de desenvolvimento porque permitem validar a usabilidade e o fluxo de navegação antes da implementação visual final, garantindo que a experiência do usuário seja intuitiva e eficiente para os objetivos do projeto.

Logo abaixo, podemos analisar a estrutura do Wireframe desenvolvido pela equipe e como ele se relaciona com algumas das Users Stories antes definidas no projeto. Essa representação visual exibe tanto a estrutura geral quanto as páginas individuais, que estão enumeradas da seguinte forma: Página 1, Página 2.1, Página 2.2 e Página 3.
<br><br>

<div align="center">
<sub>Figura 7 - Página 1</sub>
<img src="../assets/ImagensWAD3.2/Página1.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

<br><br>

<div align="center">
<sub>Figura 8 - Página 2.1</sub>
<img src="../assets/ImagensWAD3.2/Pagina2.1.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

<br><br>

<div align="center">
<sub>Figura 9 - Página 2.2</sub>
<img src="../assets/ImagensWAD3.2/Pagina2.2 copy.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

<br><br>

<div align="center">
<sub>Figura 10 - Página 3</sub>
<img src="../assets/ImagensWAD3.2/Pagina3.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

<br><br>
---

<br><br>

<div align="center">
<sub>Figura 11 - Fluxo completo do Wireframe</sub>
<img src="../assets/ImagensWAD3.2/wireframe.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

<br><br>

[Clique aqui para acessar a documentação completa](https://www.figma.com/design/ulg2gGS3ECaiYFvH7yhXUz/Untitled?node-id=0-1&t=gwbMvJ2Kxp8V9yDA-1)!

---
<br><br>

No desenvolvimento do fluxo de navegação da aplicação, a equipe definiu duas trilhas principais que buscam atender, de maneira eficiente, às diferentes necessidades dos usuários: a trilha emergencial e a trilha preventiva.

### 1. Fluxo de navegação da trilha emergencial:


#### Etapa 1 - Página Principal (`Página 1`)

- O usuário acessa a plataforma.
- Visualiza o botão **"Buscar Ajuda"**.
- Ação: clica no botão.

#### Etapa 2 - Página Emergencial (`Página 2.2`)

- Exibição imediata de:
  - Dois blocos grandes, com os números de emergência do **CVV** e **SAMU**, por exemplo.
  - Três blocos menores que contém serviços, como **CAPS/UPAs mais próximos**, com base na geolocalização.
- Ação: o usuário seleciona uma unidade próxima (CAPS/UPA) ou resolve ligar para os números diponibilizados.

#### Etapa 3 - Página de Serviços (`Página 3`)

- Caso ele selecione, na página anterior, o serviço mais próximo, é exibido:
  - O mapa interativo com a localização da unidade escolhida, além de outras opções secundárias, com base na distância do usuário.
  - Uma lista de **serviços disponíveis** no CAPS/UPA selecionado.

#### Etapa 4 - Lista de Resultados (`Página 3`)

- Logo à esquerda do mapa, o usuário pode visualizar os **serviços em formato de lista**.
- Ação: o usuário clica em um serviço específico para buscar mais informações.

#### Etapa 5 - Página de Detalhes do Serviço (`Página 3`)

- Exibição das informações básicas do serviço selecionado.

#### Etapa 6 - Informações Completas (`Página 3`)

- Detalhamento do serviço:
  - Endereço completo
  - Telefone de contato
  - Horários de funcionamento
  - Especialidades oferecidas


### 2. Fluxo de navegação da trilha preventiva:

#### Etapa 1. Página Principal (Página 1)
- O usuário acessa o site.
- Visualiza o botão **“Ações Preventivas”**.
- Ação: clica no botão.


#### Etapa 2. Primeiro Filtro (Página 2.1)
- Exibição de um pop‑up solicitando:
  - **Faixa etária** e **gênero** do usuário e tipo de atividade que busca (lazer, acompanhamentos, clínicas, etc).
- Ação: O usuário preenche as informações, as confirma e é direcionado para a próxima página.


#### Etapa 3. Página de Serviços (Página 3)
- O sistema detecta a localização do usuário.
- Exibe um **mapa interativo** com os serviços próximos.
- Disponibiliza filtros mais específicos, com base nas informações coletadas.


#### Etapa 4. Lista de Resultados (Página 3)
- Apresentação dos serviços filtrados em **formato de lista**.
- Cada item deve conter um link para mais detalhes sobre cada serviço.
- O usuário seleciona um serviço específico.



#### Etapa 5. Informações Completas (Página 3)
- Exibição dos dados detalhados do serviço:
  - Endereço completo.
  - Telefone de contato.
  - Horários de funcionamento.
  - Especialidades oferecidas.



### Fluxo de navegação das Users Stories

  É de suma importância que toda a nossa estrutura seja construída levando em consideração o fluxo de navegação das User Stories criadas, anteriormente, a partir das Personas que o produto busca atingir. Por isso, a equipe escolheu quatro Users Stories dentre todas, que foram essenciais para guiar o desenvolvimento do Wireframe. Logo abaixo, é explicado com mais detalhes de que forma as necessidades das Users Stories são supridas no nosso Wireframe.
  <br><br>

- US02 (Fátima): o projeto supre as necessidades de Fátima por meio de uma trilha preventiva em que nele terá um sistema de busca intuitivo. Por exemplo, na página 3, o mapa que permite filtrar atividades específicas que devem servir como vávulas de escape para ela. Além disso, o site exibe de forma organizada e visualmente clara os locais registrados, exibindo informações essenciais como descrição detalhada do serviço, endereço, horários de funcionamento e avaliações de outros usuários.

- US04 (Fátima): o projeto atende às necessidades de Fátima ao implementar uma abordagem de texto simplificada e ordenação clara dos blocos em toda a aplicação. Por exemplo, na página 1, o site apresenta em seu cabeçalho o objetivo do projeto, com frases curtas e diretas que facilitam a compreensão e dois botões grandes que tornam o direcionamento de Fátima mais assertivo e sua tomada de decisão mais óbvia. Ademais, a equipe desenvolveu uma navegação intuitiva com linguagem acessível, evitando fluxos extensos e complexos. Especialmente na trilha emergencial, os textos são extremamente objetivos e claros, permitindo que usuários com qualquer nível de escolaridade obtenham rapidamente as informações necessárias sem depender de ajuda externa. Essa mesma filosofia de simplicidade e clareza é mantida em todas as seções do site, como por exemplo na página 3, onde é apresentado as informações dos lugares de forma simples e otimizada, garantindo um fluxo de navegação mais acessível para pessoas com dificuldade na leitura de textos longos.

- US09 (Pedro): o projeto atende às necessidades de Pedro ao oferecer uma experiência totalmente anônima, sem login. Por exemplo, na página 1 ele pode navegar livremente pelo site e acessar todas as funcionalidade sem a necessidade de identificação pessoal. Já na página 2.1, a aplicação apenas requere que o usuário informe no filtro dados não pessoais, mantendo sua privacidade e, assim, cumprindo a preferência de Pedro.

<br><br>
Em suma, o Wireframe e seus fluxos de navegação demonstram como a aplicação foi estruturada para atender diferentes necessidades dos usuários. A divisão entre trilha emergencial e preventiva garante acesso rápido a serviços críticos e, ao mesmo tempo, incentiva cuidados preventivos de forma acessível. Além disso, é perceptível, por exemplo, que o design visa priorizar a usabilidade e a rapidez — elementos essenciais em uma plataforma que aborda a saúde mental. Os filtros progressivos e a geolocalização, por sua vez, asseguram que os usuários encontrem serviços relevantes e próximos, reduzindo barreiras ao acesso.

Dessa forma, essa estrutura servirá como guia para o desenvolvimento, assegurando que a implementação final mantenha o foco na experiência do usuário e no objetivo de conectar pessoas a serviços qualificados de saúde mental de forma rápida, segura e acessível.

## 3.3. Guia de estilos


> Este guia de estilos foi desenvolvido para assegurar consistência visual e funcional em toda a plataforma de saúde mental. Para utilizá-lo adequadamente, recomendamos que desenvolvedores e designers consultem este documento antes de iniciar qualquer implementação ou modificação. Os componentes descritos nas seções seguintes representam os elementos fundamentais da interface e devem ser implementados conforme especificado.

> Ao aplicar os elementos deste guia, é importante manter fidelidade às especificações de cores, tipografia, espaçamentos e comportamentos interativos. Evite criar variações não documentadas, pois isso pode comprometer a experiência unificada que buscamos oferecer. Caso identifique necessidades não contempladas 
neste documento, sugerimos propor adições formais ao guia em vez de criar soluções isoladas.

> Lembre-se que a acessibilidade é prioridade em nossa plataforma. Todos os padrões visuais foram testados para garantir legibilidade e usabilidade para diferentes públicos, incluindo pessoas com necessidades específicas. Respeitar esses padrões é essencial para mantermos nosso compromisso com a inclusão.


### 3.3.1 Cores
---
**Cores Primárias**

| Amostra | Nome | Hexadecimal | RGB | HSL | Aplicação |
|:-------:|------|-------------|-----|-----|-----------|
|<div style="background-color: #3E7545; width: 30px; height: 30px; display: inline-block; border-radius: 5px;"></div> | Verde Escuro | #3E7545 | rgb(62, 117, 69) | hsl(125, 31%, 35%) | Cabeçalho principal, base da interface |
|<div style="background-color: #71B780; width: 30px; height: 30px; display: inline-block; border-radius: 5px;"></div> | Verde Médio | #71B780 | rgb(113, 183, 128) | hsl(132, 35%, 58%) | Fundo principal, áreas de conteúdo |
|<div style="background-color: #F1DDAB; width: 30px; height: 30px; display: inline-block; border-radius: 5px;"></div>| Bege Claro | #F1DDAB | rgb(241, 221, 171) | hsl(43, 73%, 81%) | Cards de conteúdo, botão "Início" |
---

**Cores Secundárias**

| Amostra | Nome | Hexadecimal | RGB | HSL | Aplicação |
|:-------:|------|-------------|-----|-----|-----------|
|<div style="background-color: #E84947; width: 30px; height: 30px; display: inline-block; border-radius: 5px;"></div> | Vermelho Coral | #E84947 | rgb(232, 73, 71) | hsl(1, 80%, 59%) | Botões de ação principal "Agendar" |
| <div style="background-color: #E5B855; width: 30px; height: 30px; display: inline-block; border-radius: 5px;"></div> | Dourado | #E5B855 | rgb(229, 184, 85) | hsl(41, 72%, 62%) | Banner principal, botões secundários "Explorar" |
|<div style="background-color: #20302F; width: 30px; height: 30px; display: inline-block; border-radius: 5px;"></div> | Verde Escuro Profundo | #20302F | rgb(32, 48, 47) | hsl(177, 20%, 16%) | Rodapé, elementos de contraste |
---
**Harmonia de Cores**

Esta paleta apresenta uma combinação harmoniosa que transmite os valores da plataforma:

- Os tons de verde (escuro e médio) evocam natureza, crescimento e bem-estar, criando uma base visual tranquilizante para um site de saúde mental.

- O bege claro e o dourado trazem acolhimento e calor, oferecendo espaços de respiro visual e destacando conteúdos importantes.

- O vermelho coral funciona como um acento estratégico para chamadas à ação prioritárias, criando um contraste efetivo sem comprometer a sensação de calma da interface.

- O verde escuro profundo no rodapé proporciona ancoragem visual e delimita claramente o fim da página.

### 3.3.2 Tipografia

A tipografia foi definida com base no manual de identidade visual do Instituto Cactus, priorizando clareza, acolhimento e legibilidade. Foram adotadas três variações tipográficas que compõem a hierarquia visual da aplicação:

**Gopher:** utilizada como fonte principal de destaque. Aplicada em títulos, chamadas principais e citações curtas, essa tipografia apresenta traços modernos e amigáveis, reforçando a abordagem acolhedora da plataforma.

**Gopher Thin:** versão mais leve da fonte principal, utilizada em subtítulos e trechos destacados de texto corrido. Sua leveza contribui para uma leitura mais suave, sem perder a consistência visual.

**Roboto Thin:** usada como fonte de apoio em textos corridos e blocos informativos. Roboto foi escolhida por sua alta legibilidade e por ser amplamente compatível com diferentes navegadores e tamanhos de tela.

Essa combinação tipográfica garante uma hierarquia clara entre os elementos da interface, contribuindo para a experiência do usuário e reforçando a identidade visual da solução.

### 3.3.3 Iconografia e imagens

_(esta subseção é opcional, caso não existam ícones e imagens, apague esta subseção)_

_posicione aqui imagens e textos contendo exemplos padronizados de ícones e imagens, com seus respectivos atributos de aplicação, utilizadas na solução_

## 3.4 Protótipo de alta fidelidade (sprint 3)

_posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)_

## 3.5. Modelagem do banco de dados (sprints 2 e 4)

### 3.5.1. Modelo Relacional (sprints 2 e 4)

O modelo relacional do sistema foi desenvolvido para armazenar informações sobre serviços voltados à saúde mental, com o objetivo de fornecer suporte de dados à aplicação web do módulo para o Instituto Cactus. Ele contempla entidades como instituições associadas, localizações, formas de contato, categorias, públicos-alvo e os relacionamentos entre essas informações.

Abaixo está o diagrama relacional que representa as tabelas e seus relacionamentos:

#### Diagrama Relacional

![Diagrama Relacional](../assets/ImagensWAD/diagrama-ER.png)

---

#### Descrição das Tabelas e Relacionamentos

- **categoria**
  - Armazena as categorias dos serviços (ex: atendimento psicológico, esporte, cultura).
  - **Atributos:** `id` (PK), `nome`.

- **localizacao**
  - Contém informações geográficas dos serviços, incluindo latitude e longitude.
  - **Atributos:** `id` (PK), `endereco`, `cidade`, `estado`, `latitude`, `longitude`.

- **contato**
  - Guarda dados de contato do serviço, como telefone, e-mail e site.
  - **Atributos:** `id` (PK), `telefone`, `email`, `site`.
  - **Restrições:** os campos `telefone`, `email` e `site` são únicos e obrigatórios.

- **instituicao**
  - Representa instituições responsáveis por ofertar os serviços.
  - **Atributos:** `id` (PK), `nome`, `descricao`.

- **publico_alvo**
  - Define o público que o serviço atende com base em faixa etária e gênero.
  - **Atributos:** `id` (PK), `faixa_etaria`, `genero`.

- **servico**
  - Representa o serviço em si, conectando diversas informações via chaves estrangeiras.
  - **Atributos:** `id` (PK), `nome`, `descricao`, `categoria_id`, `localizacao_id`, `contato_id`, `instituicao_id`, `emergencia`.
  - **Relacionamentos:**
    - `categoria_id` → referência à tabela `categoria`.
    - `localizacao_id` → referência à tabela `localizacao`.
    - `contato_id` → referência à tabela `contato`.
    - `instituicao_id` → referência à tabela `instituicao`.

- **servico_publico_alvo**
  - Tabela associativa que define o relacionamento muitos-para-muitos entre `servico` e `publico_alvo`.
  - **Atributos:** `servico_id`, `publico_alvo_id`.
  - Ambos os campos são FKs e juntos compõem a chave primária composta da tabela.

---

#### Resumo das Relações

- Um **serviço** pertence a **uma categoria**, **uma instituição**, e pode ter **uma localização** e **um contato** associados.
- Um **serviço** pode ser destinado a **vários públicos-alvo**, e cada **público-alvo** pode estar associado a vários **serviços** (relação N:N via `servico_publico_alvo`).
- A modelagem utiliza **UUIDs** como identificadores primários para todas as entidades, garantindo unicidade e escalabilidade.

### 3.5.2. Consultas SQL e lógica proposicional 
 Nesta seção, exploramos o uso de consultas SQL em conjunto com a lógica proposicional para resolver situações práticas no banco de dados da plataforma de saúde mental desenvolvida para o Instituto Cactus. Cada consulta apresentada aqui corresponde a uma necessidade real da aplicação, como listar serviços específicos, atualizar informações desatualizadas ou remover registros incompletos. O foco está em mostrar, de forma clara e fundamentada, como a lógica matemática se aplica diretamente na construção de filtros SQL.

 Para cada consulta, foram identificadas as condições envolvidas (também chamadas de átomos) e expressas em linguagem lógica. A combinação dessas condições foi representada por expressões com operadores lógicos. Além disso, incluímos as tabelas-verdade correspondentes para ilustrar como diferentes combinações de valores podem influenciar no resultado da consulta.

 Ao longo desta seção, fica evidente como a lógica formal estudada em matemática é aplicada diretamente no desenvolvimento de soluções computacionais, contribuindo para a clareza, precisão e confiabilidade dos sistemas que apoiam políticas públicas de saúde mental. As consultas a seguir ilustram essa abordagem interdisciplinar:

#### Consulta #1 – Serviços CAPS abertos aos sábados em São Paulo
**Contexto:**
Selecionar serviços da categoria "CAPS", localizados na cidade de São Paulo, que estejam explicitamente abertos aos sábados (i.e., a descrição menciona o sábado, mas não indica que está fechado nesse dia).

| Item                        | Conteúdo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Expressão SQL**           | `SELECT Servico.* FROM Servico JOIN Categoria ON Servico.categoria_id = Categoria.id JOIN Localizacao ON Servico.localizacao_id = Localizacao.id WHERE Categoria.nome = 'CAPS' AND Localizacao.cidade = 'São Paulo' AND Servico.descricao LIKE '%sábado:%' AND Servico.descricao NOT LIKE '%sábado: Fechado%'; `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Proposições lógicas**     | \$A\$: Categoria.nome = 'CAPS'  <br> \$B\$: Localizacao.cidade = 'São Paulo' <br> \$C\$: Servico.descricao LIKE '%sábado:%' <br> \$D\$: Servico.descricao NOT LIKE '%sábado: Fechado%'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Expressão proposicional** | \$A \land B \land C \land D\$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Tabela Verdade**          | <table><thead><tr><th>\$A\$</th><th>\$B\$</th><th>\$C\$</th><th>\$D\$</th><th>\$A \land B \land C \land D\$</th></tr></thead><tbody><tr><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>F</td><td>F</td><td>V</td><td>F</td></tr><tr><td>F</td><td>F</td><td>V</td><td>F</td><td>F</td></tr><tr><td>F</td><td>F</td><td>V</td><td>V</td><td>F</td></tr><tr><td>F</td><td>V</td><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>F</td><td>V</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td><td>V</td><td>F</td></tr><tr><td>V</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td>V</td><td>F</td><td>F</td><td>V</td><td>F</td></tr><tr><td>V</td><td>F</td><td>V</td><td>F</td><td>F</td></tr><tr><td>V</td><td>F</td><td>V</td><td>V</td><td>F</td></tr><tr><td>V</td><td>V</td><td>F</td><td>F</td><td>F</td></tr><tr><td>V</td><td>V</td><td>F</td><td>V</td><td>F</td></tr><tr><td>V</td><td>V</td><td>V</td><td>F</td><td>F</td></tr><tr><td>V</td><td>V</td><td>V</td><td>V</td><td>V</td></tr></tbody></table> |

---

#### Consulta #2 – Atualizar serviços com descrição de 2022 ou nula
**Contexto:**
Atualiza os nomes dos serviços que tenham a descrição contendo "2022" ou estejam sem descrição (NULL), indicando que são dados possivelmente desatualizados ou incompletos.

| Item                        | Conteúdo                                                                                                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Expressão SQL**           | `UPDATE Servico SET nome = CONCAT(nome, ' - Atualizado 2023') WHERE descricao LIKE '%2022%' OR descricao IS NULL; `                                                                                                                                             |
| **Proposições lógicas**     | \$A\$: descricao LIKE '%2022%' <br> \$B\$: descricao IS NULL                                                                                                                                                                                                        |
| **Expressão proposicional** | \$A \lor B\$                                                                                                                                                                                                                                                        |
| **Tabela Verdade**          | <table><thead><tr><th>\$A\$</th><th>\$B\$</th><th>\$A \lor B\$</th></tr></thead><tbody><tr><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>V</td></tr><tr><td>V</td><td>V</td><td>V</td></tr></tbody></table> |

---

#### Consulta #3 – Remover contatos sem telefone e sem site
**Contexto:**
Remove registros de serviços que estão vinculados a contatos totalmente incompletos — ou seja, que não têm nem telefone nem site preenchido.

| Item                        | Conteúdo                                                                                                                                                                                                                                                             |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Expressão SQL**           | `DELETE FROM Servico WHERE contato_id IN (SELECT id FROM Contato WHERE telefone = '' AND site = ''); `                                                                                                                                                           |
| **Proposições lógicas**     | \$A\$: telefone = '' <br> \$B\$: site = ''                                                                                                                                                                                                                           |
| **Expressão proposicional** | \$A \land B\$                                                                                                                                                                                                                                                        |
| **Tabela Verdade**          | <table><thead><tr><th>\$A\$</th><th>\$B\$</th><th>\$A \land B\$</th></tr></thead><tbody><tr><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>F</td></tr><tr><td>V</td><td>F</td><td>F</td></tr><tr><td>V</td><td>V</td><td>V</td></tr></tbody></table> |

---

#### Consulta #4 – Contatos com apenas um meio de comunicação (telefone ou site)
**Contexto:**
Seleciona os contatos que possuem exatamente um dos campos preenchidos (telefone ou site), o que pode indicar dados incompletos que precisam ser complementados.

| Item                        | Conteúdo                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Expressão SQL**           | `SELECT id, telefone, email, site FROM Contato WHERE (telefone IS NOT NULL OR site IS NOT NULL) AND NOT (telefone IS NOT NULL AND site IS NOT NULL); `                                                                                                                                                                                                                                                                                                       |
| **Proposições lógicas**     | \$A\$: telefone IS NOT NULL <br> \$B\$: site IS NOT NULL                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Expressão proposicional** | \$(A \lor B) \land \lnot(A \land B)\$                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Tabela Verdade**          | <table><thead><tr><th>\$A\$</th><th>\$B\$</th><th>\$A \lor B\$</th><th>\$A \land B\$</th><th>\$\lnot(A \land B)\$</th><th>Resultado</th></tr></thead><tbody><tr><td>F</td><td>F</td><td>F</td><td>F</td><td>V</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td><td>F</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>V</td><td>F</td><td>V</td><td>V</td></tr><tr><td>V</td><td>V</td><td>V</td><td>V</td><td>F</td><td>F</td></tr></tbody></table> |

---

#### Consulta #5: Verificação da possibilidade de contato telefonico com serviços emergenciais
**Contexto:**
Verificar se toda unidade que anuncia ‘emergencial’ na descrição oferece número de telefone.

| Item                                | ---                                                                                                                                                                                                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Expressão SQL**                  | SELECT Servico.\* FROM Servico LEFT JOIN Contato ON Servico.contato\_id = Contato.id WHERE Servico.emergencia = TRUE AND (Contato.telefone <> '');                                                                                                                         |
| **Proposições lógicas**            | \$A\$: Servico.emergencia = TRUE<br>\$B\$: Contato.telefone <> ''                                                                                                                                                                                                          |
| **Expressão lógica proposicional** | \$A \Rightarrow B\$                                                                                                                                                                                                                                                        |
| **Tabela Verdade**                 | <table><thead><tr><th>\$A\$</th><th>\$B\$</th><th>\$A \Rightarrow B\$</th></tr></thead><tbody><tr><td>F</td><td>F</td><td>V</td></tr><tr><td>F</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td></tr><tr><td>V</td><td>V</td><td>V</td></tr></tbody></table> |


---

#### Consulta #6: Selecionar locais classificados como "Museu"
**Contexto:**
O local é da categoria "Museu" se e somente se seu campo tipo contém "museum".

| Item                                 | ---                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Expressão SQL**                  | SELECT i.id, i.tipo AS tipos\_instituicao, c.nome AS categoria FROM Instituicao i LEFT JOIN Servico s ON i.id = s.instituicao\_id LEFT JOIN Categoria c ON s.categoria\_id = c.id WHERE (c.nome = 'Museu') = (i.tipo LIKE '%museum%');                                                                                                   |
| **Proposições lógicas**            | \$A\$: tipos LIKE '%museum%'<br>\$B\$: categoria = 'Museu'                                                                                                                                                                                                                                                                               |
| **Expressão lógica proposicional** | \$A \Leftrightarrow B\$<br>Forma equivalente: (\$A \land B\$) ∨ (¬\$A \land ¬B\$)                                                                                                                                                                                                                                                        |
| **Tabela Verdade**                 | <table><thead><tr><th>\$A\$</th><th>\$B\$</th><th>\$A \Leftrightarrow B\$</th></tr></thead><tbody><tr><td>V</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>F</td></tr><tr><td>F</td><td>F</td><td>V</td>></tr></tbody></table> |


---

#### Consulta #7: Deletar serviços fora de SP ou que não são CAPS
**Contexto:**
Limpar registros que não sejam de São Paulo ou que não sejam unidades CAPS.

| Item                                 | ---                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Expressão SQL**                  | DELETE FROM Servico USING Localizacao, Categoria WHERE (Servico.localizacao\_id = Localizacao.id AND (Localizacao.estado <> 'SP') OR (Servico.categoria\_id = Categoria.id AND Categoria.nome <> '%CAPS%'));                                                        |
| **Proposições lógicas**            | \$A\$: Localizacao.estado <> 'SP'<br>\$B\$: Categoria.nome <> '%CAPS%'                                                                                                                                                                                              |
| **Expressão lógica proposicional** | \$A \lor B\$                                                                                                                                                                                                                                                        |
| **Tabela Verdade**                 | <table><thead><tr><th>\$A\$</th><th>\$B\$</th><th>\$A \lor B\$</th></tr></thead><tbody><tr><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>V</td></tr><tr><td>V</td><td>V</td><td>V</td></tr></tbody></table> |

---

#### Consulta #8:  selecionar registros que têm cidade definida e têm coordenadas completas
**Contexto:**
Queremos selecionar registros que têm cidade definida e têm coordenadas completas. Ou seja, não podem estar sem localização nem com coordenadas incompletas.

| Item                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Expressão SQL**                  | SELECT \* FROM Localizacao WHERE (cidade IS NOT NULL OR estado IS NOT NULL) AND (latitude IS NOT NULL AND longitude IS NOT NULL);                                                                                                                                                                                                                                                                                                                                  |
| **Proposições lógicas**            | \$A\$: cidade IS NULL AND estado IS NULL<br>\$B\$: latitude IS NULL OR longitude IS NULL                                                                                                                                                                                                                                                                                                                                                                           |
| **Expressão lógica proposicional** | ¬(\$A \lor B\$) ≡ ¬A ∧ ¬B                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Tabela Verdade**                 | <table><thead><tr><th>\$A\$ (sem cidade e estado)</th><th>\$B\$ (coordenadas incompletas)</th><th>\$A \lor B\$</th><th>\$\lnot(A \lor B)\$</th></tr></thead><tbody><tr><td>V</td><td>V</td><td>V</td><td>F</td></tr><tr><td>V</td><td>F</td><td>V</td><td>F</td></tr><tr><td>F</td><td>V</td><td>V</td><td>F</td></tr><tr><td>F</td><td>F</td><td>F</td><td>V</td></tr></tbody></table> |


As consultas apresentadas mostram como a lógica proposicional pode ser aplicada para construir filtros SQL mais claros e precisos. Representar as condições com proposições e tabelas-verdade ajuda a entender o comportamento das consultas e evitar erros. Essa integração entre lógica e programação contribui para um sistema mais confiável e alinhado com o propósito da plataforma: facilitar o acesso a serviços de saúde mental de forma simples e segura.

## 3.6. WebAPI e endpoints (sprints 3 e 4)

_Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema._

_Cada endpoint deve conter endereço, método (GET, POST, PUT, PATCH, DELETE), header, body e formatos de response_

# <a name="c4"></a>4. Desenvolvimento da Aplicação Web

## 4.1. Primeira versão da aplicação web (sprint 3)

_Descreva e ilustre aqui o desenvolvimento da sua primeira versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos._

## 4.2. Segunda versão da aplicação web (sprint 4)

_Descreva e ilustre aqui o desenvolvimento da sua segunda versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos._

## 4.3. Versão final da aplicação web (sprint 5)

_Descreva e ilustre aqui o desenvolvimento da última versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos._

# <a name="c5"></a>5. Testes

## 5.1. Relatório de testes de integração de endpoints automatizados (sprint 4)

_Liste e descreva os testes unitários dos endpoints criados, automatizados e planejados para sua solução. Posicione aqui também o relatório de cobertura de testes Jest se houver (através de link ou transcrito para estrutura markdown)_

## 5.2. Testes de usabilidade (sprint 5)

_Posicione aqui as tabelas com enunciados de tarefas, etapas e resultados de testes de usabilidade. Ou utilize um link para seu relatório de testes (mantenha o link sempre público para visualização)_

# <a name="c6"></a>6. Estudo de Mercado e Plano de Marketing (sprint 4)

## 6.1 Resumo Executivo

_Preencher com até 300 palavras, sem necessidade de fonte_

_Apresente de forma clara e objetiva os principais destaques do projeto: oportunidades de mercado, diferenciais competitivos da aplicação web e os objetivos estratégicos pretendidos._

## 6.2 Análise de Mercado

_a) Visão Geral do Setor (até 250 palavras)_
_Contextualize o setor no qual a aplicação está inserida, considerando aspectos econômicos, tecnológicos e regulatórios. Utilize fontes confiáveis._

_b) Tamanho e Crescimento do Mercado (até 250 palavras)_
_Apresente dados quantitativos sobre o tamanho atual e projeções de crescimento do mercado. Utilize fontes confiáveis._

_c) Tendências de Mercado (até 300 palavras)_
_Identifique e analise tendências relevantes (tecnológicas, comportamentais e mercadológicas) que influenciam o setor. Utilize fontes confiáveis._

## 6.3 Análise da Concorrência

_a) Principais Concorrentes (até 250 palavras)_
_Liste os concorrentes diretos e indiretos, destacando suas principais características e posicionamento no mercado._

_b) Vantagens Competitivas da Aplicação Web (até 250 palavras)_
_Descreva os diferenciais da sua aplicação em relação aos concorrentes, sem necessidade de citação de fontes._

## 6.4 Público-Alvo

_a) Segmentação de Mercado (até 250 palavras)_
Descreva os principais segmentos de mercado a serem atendidos pela aplicação. Utilize bases de dados e fontes confiáveis.\*

_b) Perfil do Público-Alvo (até 250 palavras)_
_Caracterize o público-alvo com dados demográficos, psicográficos e comportamentais, incluindo necessidades específicas. Utilize fontes obrigatórias._

## 6.5 Posicionamento

_a) Proposta de Valor Única (até 250 palavras)_
_Defina de maneira clara o que torna a sua aplicação única e valiosa para o mercado._

_b) Estratégia de Diferenciação (até 250 palavras)_
_Explique como sua aplicação se destacará da concorrência, evidenciando a lógica por trás do posicionamento._

## 6.6 Estratégia de Marketing

_a) Produto/Serviço (até 200 palavras)_
_Descreva as funcionalidades, benefícios e diferenciais da aplicação_

_6.2 Preço (até 200 palavras)_
_Explique o modelo de precificação adotado e justifique com base nas análises anteriores._

_6.3 Praça (Distribuição) (até 200 palavras)_
_Apresente os canais digitais utilizados para distribuir e entregar a aplicação ao público._

_6.4 Promoção (até 200 palavras)_
_Descreva as estratégias digitais planejadas, como SEO, redes sociais, marketing de conteúdo e campanhas pagas._

# <a name="c7"></a>7. Conclusões e trabalhos futuros (sprint 5)

_Escreva de que formas a solução da aplicação web atingiu os objetivos descritos na seção 2 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral._

_Relacione os pontos de melhorias evidenciados nos testes com planos de ações para serem implementadas. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para ações futuras_

_Relacione também quaisquer outras ideias que o grupo tenha para melhorias futuras_

# <a name="c8"></a>8. Referências

<a name="fonte1"></a>1. WORLD HEALTH ORGANIZATION. _Mental disorders: fact sheet_. Geneva: WHO, 8 June 2022. Disponível em: <https://www.who.int/news-room/fact-sheets/detail/mental-disorders>. Acesso em: 28 abr. 2025.

<a name="fonte2"></a>2. KESSLER, R. C.; ANGERMEYER, M. C.; ANTHONY, J. C.; DE GRAAF, R.; DEMYTTENAERE, K.; GASQUET, I.; et al. Lifetime prevalence and age-of-onset distributions of mental disorders in the World Health Organization’s World Mental Health Survey Initiative. _World Psychiatry_, v. 6, n. 3, p. 168–176, 2007. Disponível em: <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2174588/>. Acesso em: 28 abr. 2025.

<a name="fonte3"></a>3. INSTITUTE FOR HEALTH METRICS AND EVALUATION. _Global Health Data Exchange (GHDx)_. Seattle: IHME, 2019. Disponível em: <https://vizhub.healthdata.org/gbd-results/>. Acesso em: 28 abr. 2025.

<a name="fonte4"></a>4. MOITRA, M.; SANTOMAURO, D.; COLLINS, P. Y.; VOS, T.; WHITEFORD, H.; SAXENA, S.; et al. The global gap in treatment coverage for major depressive disorder in 84 countries from 2000–2019: a systematic review and Bayesian meta-regression analysis. _PLoS Med._, v. 19, n. 2, e1003901, 2022. Disponível em: <https://doi.org/10.1371/journal.pmed.1003901>. Acesso em: 28 abr. 2025.

<a name="fonte5"></a>5. ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. _Saúde mental_. Washington, D.C.: OPAS/OMS, [s.d.]. Disponível em: <https://www.paho.org/pt/topicos/saude-mental>. Acesso em: 28 abr. 2025.

<a name="fonte6"></a>6. MORAES DE SOUZA, Ildebrando; MACHADO-DE-SOUSA, João Paulo. Brazil: world leader in anxiety and depression rates. _Brazilian Journal of Psychiatry_, v. 39, n. 4, p. 384, out.–dez. 2017. DOI: 10.1590/1516-4446-2017-2300. Disponível em: <https://pubmed.ncbi.nlm.nih.gov/29160532/>. Acesso em: 28 abr. 2025.

LUCK, Heloisa. Liderança em gestão escolar. 4. ed. Petrópolis: Vozes, 2010. <br>
SOBRENOME, Nome. Título do livro: subtítulo do livro. Edição. Cidade de publicação: Nome da editora, Ano de publicação. <br>

INTELI. Adalove. Disponível em: https://adalove.inteli.edu.br/feed. Acesso em: 1 out. 2023 <br>
SOBRENOME, Nome. Título do site. Disponível em: link do site. Acesso em: Dia Mês Ano

# <a name="c9"></a>Anexos

_Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)_
