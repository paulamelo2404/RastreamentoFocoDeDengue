# 🦠 Dengue-App: Sistema Auxiliar Identificador de Pontos Focais de Dengue

**STATUS:** MVP em Front-end (Teste Local)

Este projeto foi desenvolvido como Projeto Integrador para o **Curso de Tecnologia em Análise e Desenvolvimento de Sistemas** (SENAC) e tem como objetivo principal combater a Dengue através da tecnologia de georreferenciamento e vigilância epidemiológica.

---

## 🎯 Objetivo do Produto

O **Dengue-App** é uma ferramenta de apoio para **Agentes Comunitários de Saúde** e **voluntários** na região do **Jardim Ângela (São Paulo)**.

[cite_start]O objetivo é aperfeiçoar os métodos tradicionais de combate ao *Aedes aegypti*[cite: 57], oferecendo:
* [cite_start]**Agilidade** na coleta e análise de dados em campo[cite: 58].
* [cite_start]**Mapeamento** e monitoramento de pontos críticos (focos)[cite: 23].
* [cite_start]**Suporte** à tomada de decisão estratégica dos órgãos de saúde[cite: 58].

---

## ⚙️ Arquitetura e Tecnologias (Front-end MVP)

O Mínimo Produto Viável (MVP) do Front-end foi construído focando nos requisitos não funcionais de **Usabilidade** (RNF002) e **Confiabilidade** (RNF001).

### Tecnologias Principais

| Camada | Tecnologia | Propósito no Projeto |
| :--- | :--- | :--- |
| **Framework** | **React** (via Vite) | Desenvolvimento rápido de interface de usuário. |
| **Linguagem** | **TypeScript** | Garante a tipagem de dados (interfaces de Entidades) para maior segurança e integridade das informações de saúde. |
| **Estilização** | **Tailwind CSS** | [cite_start]Permite o desenvolvimento de uma interface **leve e intuitiva** (RNF002.1)[cite: 116]. |
| **Persistência (MVP)** | **LocalStorage** (Simulação) | [cite_start]Permite o **Funcionamento Offline** com sincronização posterior (RNF001.1)[cite: 112]. |

### Requisitos Funcionais Implementados no MVP

* **RF001.2:** Registro automático de coordenadas via GPS (simulado).
* **RF002.1:** Registro de focos com status e tipo de recipiente.
* **RNF001.1:** Persistência local (LocalStorage) para operação offline.

---

## 🚀 Como Rodar o Projeto (Ambiente de Teste)

### Pré-requisitos

* Node.js (versão LTS recomendada)
* npm (já instalado com o Node.js)

### Passos para Inicialização

1.  **Clone o Repositório:**
    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd dengue-app
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o Servidor de Desenvolvimento:**
    O script `dev` é encadeado para compilar o CSS do Tailwind antes de iniciar o servidor.

    ```bash
    npm run dev
    ```

4.  **Acesse:** Abra seu navegador em `http://localhost:5173`.

> **Teste de Funcionamento:** Use o formulário de registro e verifique se os dados aparecem na lista de visualização, confirmando o fluxo de dados local.

---

## 👥 Desenvolvedora 
Paula Melo 
