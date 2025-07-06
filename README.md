# 🛒 GameStore: Backend de E-commerce de Jogos com NestJS e TypeORM

Este repositório contém o backend de uma aplicação de e-commerce de jogos, desenvolvida com o poderoso framework **NestJS**. Este projeto demonstra uma aplicação robusta de **APIs RESTful**, **Programação Orientada a Objetos (POO)**, e a integração com banco de dados utilizando **TypeORM**. É um excelente exemplo de como construir uma aplicação escalável e bem estruturada, focando na gestão de produtos e suas categorias.

## ✨ Destaques e Aprendizados

* **Desenvolvimento de APIs RESTful:** Criação de endpoints claros e bem definidos para operações CRUD (`GET`, `POST`, `PUT`, `DELETE`).
* **NestJS Framework:** Utilização de um framework moderno e opinionado para TypeScript, que facilita a construção de aplicações corporativas.
    * **Módulos, Controladores e Serviços:** Aplicação da arquitetura modular do NestJS, separando responsabilidades.
    * **Injeção de Dependência:** Gerenciamento eficiente das dependências entre os componentes.
* **Programação Orientada a Objetos (POO):**
    * **Modelagem de Entidades:** Definição de classes como `Category` e `Product` com suas propriedades e relacionamentos.
    * **Relacionamento `OneToMany`:** Implementação de um relacionamento "Um para Muitos" entre Categoria e Produto (uma categoria possui muitos produtos), utilizando `@OneToMany` na entidade `Category` e `@ManyToOne` na entidade `Product`.
    * **Encapsulamento:** Proteção e organização dos dados através de classes bem definidas.
* **TypeORM:** ORM (Object-Relational Mapper) para interagir com o banco de dados de forma orientada a objetos, eliminando a necessidade de escrever SQL puro na camada de serviço.
    * **Entidades:** Mapeamento de classes TypeScript para tabelas de banco de dados (`@Entity`).
    * **`@PrimaryGeneratedColumn` e `@Column`:** Definição de chaves primárias e colunas.
    * **`@IsNotEmpty` (class-validator):** Validação de dados de entrada, garantindo a integridade dos dados recebidos pela API.
* **Operações CRUD Customizadas:** Além das operações CRUD básicas, a inclusão de buscas específicas que aprimoram a usabilidade:
    * `findAllByName` para `Product`: Permite buscar produtos por uma parte do nome, oferecendo uma funcionalidade de pesquisa flexível.
    * `findAllByCategory` para `Category`: Permite buscar categorias por uma parte do nome da categoria, o que pode ser utilizado para filtrar produtos por categoria.

## 🚀 Funcionalidades da API

A API da GameStore oferece os seguintes endpoints para gerenciar **Categorias** e **Produtos**:

### **Endpoints de Categoria (`/category`)**

* `GET /category`: Lista todas as categorias cadastradas.
* `GET /category/:id`: Busca uma categoria específica pelo ID.
* `GET /category/category/:category`: Busca categorias por uma parte do nome da categoria.
* `POST /category`: Cria uma nova categoria.
* `PUT /category`: Atualiza uma categoria existente.
* `DELETE /category/:id`: Exclui uma categoria pelo ID.

### **Endpoints de Produto (`/product`)**

* `GET /product`: Lista todos os produtos cadastrados.
* `GET /product/:id`: Busca um produto específico pelo ID.
* `GET /product/product/:name`: Busca produtos por uma parte do nome.
* `POST /product`: Cria um novo produto.
* `PUT /product`: Atualiza um produto existente.
* `DELETE /product/:id`: Exclui um produto pelo ID.

## 🛠️ Tecnologias Utilizadas

* **NestJS:** Framework progressivo de Node.js para construção de aplicações eficientes e escaláveis do lado do servidor.
* **TypeScript:** Linguagem de programação principal, oferecendo tipagem estática e recursos avançados.
* **TypeORM:** ORM para interagir com o banco de dados (geralmente PostgreSQL, MySQL, SQLite, etc., dependendo da configuração).
* **`class-validator`:** Biblioteca para validação de dados em entidades e DTOs (Data Transfer Objects).
* **`@nestjs/common`:** Módulo core do NestJS para funcionalidades HTTP, pipes, decorators, etc.
* **Node.js:** Ambiente de execução.

## 📁 Estrutura do Projeto

O projeto segue a estrutura modular e organizada do NestJS, promovendo a separação de responsabilidades:
