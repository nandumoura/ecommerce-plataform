

# 🛒 Plataforma de E-commerce Modular

## 📋 **Descrição do Projeto**
Este é um projeto de estudo de uma **Plataforma de E-commerce** modular, criado para explorar e aplicar os **23 Padrões de Projeto GoF**. O projeto simula uma loja online, incluindo funcionalidades de catálogo de produtos, carrinho de compras e sistema de checkout, com um backend em Node.js e um frontend em React.

### 📚 **Objetivos do Projeto**
- Consolidar o conhecimento dos padrões de projeto, aplicando cada um em uma funcionalidade específica.
- Criar uma arquitetura extensível e modular para uma plataforma de e-commerce.
- Aprender a lidar com integrações e conceitos avançados, como caching, autenticação, e APIs de pagamento.

## 🛠️ **Tecnologias Utilizadas**
### Backend
- **Node.js** e **Express**
- **Cors** para controle de acesso
- **Dotenv** para gerenciamento de variáveis de ambiente

### Frontend
- **React** com **Vite**
- **Hooks** para controle de estado e chamadas à API
- **CSS Modules** ou **Styled Components** (a adicionar)

### Outros
- **Nodemon** para hot reload do backend
- **ESLint** para padronização de código (opcional)
- **Banco de Dados**: Singleton para simulação de cache (MongoDB ou Redis como opções avançadas)

## ⚙️ **Funcionalidades Planejadas**
- [x] Configuração inicial do projeto (frontend e backend)
- [x] Catálogo de produtos
- [ ] Carrinho de compras
- [ ] Sistema de checkout com integração de pagamentos
- [ ] Sistema de plugins para funcionalidades adicionais
- [ ] Painel administrativo para gerenciamento de produtos
- [ ] Implementação dos padrões de projeto GoF

## 🚀 **Como Rodar o Projeto**

### **Pré-requisitos**
- Node.js instalado (v18 ou superior)
- npm ou yarn para gerenciamento de pacotes

### **Instalação**
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Configuração do Backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Configuração do Frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Crie um arquivo `.env` na pasta `backend`**:
   ```
   PORT=5000
   ```

### **Rodando o Projeto**
1. **Inicie o backend**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Inicie o frontend**:
   ```bash
   cd ../frontend
   npm run dev
   ```

3. Acesse o frontend em [http://localhost:5173](http://localhost:5173) e o backend em [http://localhost:5000](http://localhost:5000).

## 🧩 **Estrutura do Projeto**

```bash
ecommerce-platform
├── backend
│   ├── controllers       # Controladores para manipulação de dados
│   ├── models            # Modelos de dados (futuros)
│   ├── routes            # Rotas da API
│   ├── services          # Serviços de negócio
│   ├── utils             # Utilitários e padrões de projeto
│   ├── app.js            # Configuração do app Express
│   └── server.js         # Inicialização do servidor
├── frontend
│   ├── src
│   │   ├── components    # Componentes React reutilizáveis
│   │   ├── pages         # Páginas da aplicação
│   │   ├── hooks         # Hooks customizados
│   │   ├── services      # Serviços para chamadas à API
│   │   └── App.jsx       # Componente principal
│   └── index.html        # Arquivo HTML inicial
├── config
│   └── config.js         # Arquivo de configurações globais
├── .env                  # Variáveis de ambiente
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto
```

## 🧑‍💻 **Desafios e Próximos Passos**
### Padrões de Projeto
1. **Singleton**: Implementar o Singleton para o cache de produtos e configuração global.
2. **Factory Method**: Criar uma fábrica para instanciar diferentes tipos de produtos (físicos, digitais).
3. **Decorator**: Adicionar um sistema de desconto para produtos usando o padrão Decorator.
4. **Observer**: Implementar notificações de pedido usando o padrão Observer.

### Funcionalidades Futuras
- Sistema de autenticação e autorização para o painel administrativo
- Integração com APIs de pagamento (Stripe, PayPal)
- Sistema de relatórios para análise de vendas

## 📦 **Contribuindo**
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, enviar PRs ou sugerir melhorias.

### Como contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça o commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 **Licença**
Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## 📞 **Contato**
- **Fernando Moura**: [Fernando Moura](https://www.linkedin.com/in/fernando-a-moura/)


---

### ✨ **Pronto para começar?**
Clone o repositório, configure o ambiente e vamos implementar juntos uma plataforma de e-commerce modular usando todos os padrões de projeto!

Se precisar de mais alguma coisa, estou à disposição!