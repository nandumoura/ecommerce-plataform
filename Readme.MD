---

# 🛒 Plataforma de E-commerce Modular

## 📋 **Descrição do Projeto**
Este é um projeto de estudo de uma **Plataforma de E-commerce** modular, criado para explorar e aplicar os **23 Padrões de Projeto GoF**. O projeto simula uma loja online, incluindo funcionalidades de catálogo de produtos, carrinho de compras e sistema de checkout, com um backend em Node.js e um frontend em React.

### 📚 **Objetivos do Projeto**
- Consolidar o conhecimento dos padrões de projeto, aplicando cada um em uma funcionalidade específica.
- Criar uma arquitetura extensível e modular para uma plataforma de e-commerce.
- Implementar conceitos avançados, como caching, autenticação e integração com APIs de pagamento.

## 🛠️ **Tecnologias Utilizadas**
### Backend
- **Node.js** e **Express**
- **Cors** para controle de acesso
- **Dotenv** para gerenciamento de variáveis de ambiente
- **Nodemon** para hot reload do backend

### Frontend
- **React** com **Vite**
- **Hooks** para controle de estado e chamadas à API
- **CSS Modules** ou **Styled Components** (a adicionar)

### Outros
- **Cache com Singleton** para simulação de cache com TTL (opção de uso de MongoDB ou Redis para futuro aprimoramento)
- **ESLint** para padronização de código (opcional)

## ⚙️ **Funcionalidades Implementadas**
- [x] Configuração inicial do projeto (frontend e backend)
- [x] Catálogo de produtos
- [x] Gerenciamento de cache com TTL (Singleton)
- [x] Controle de estoque com notificações (Observer Pattern)
- [x] Estratégias de precificação (Strategy Pattern)
- [ ] Carrinho de compras
- [ ] Sistema de checkout com integração de pagamentos
- [ ] Painel administrativo para gerenciamento de produtos

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
│   ├── models            # Modelos de dados
│   ├── routes            # Rotas da API
│   ├── utils             # Padrões de projeto e utilitários
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

## 🧑‍💻 **Padrões de Projeto Implementados**
1. **Singleton**: Utilizado para gerenciamento de cache com TTL e configurações globais.
2. **Factory Method**: Implementado para criação de diferentes tipos de produtos.
3. **Observer**: Controle de estoque e notificações de baixa quantidade.
4. **Strategy**: Diferentes estratégias de precificação (preço fixo, desconto, promoção).
5. **Template Method** (Planejado): Para diferentes processos de checkout.
6. **Decorator** (Planejado): Para aplicar descontos adicionais em produtos.

### Exemplos de Uso:
- **Singleton - Cache**:
  ```javascript
  const ProductCache = require('./utils/patterns/ProductCache');
  ProductCache.setProduct(id, product);
  ```

- **Observer - Controle de Estoque**:
  ```javascript
  inventory.addObserver(new LowStockNotifier());
  inventory.updateStock(id, quantity);
  ```

- **Strategy - Precificação**:
  ```javascript
  const strategy = new DiscountStrategy(10);
  const finalPrice = strategy.calculate(product.price);
  ```

## 🧩 **Próximos Passos**
- **Carrinho de Compras**: Implementação do carrinho usando o padrão Composite para estrutura de itens.
- **Checkout**: Integrar com APIs de pagamento como Stripe e PayPal.
- **Autenticação**: Sistema de login e painel administrativo com JWT.
- **Sistema de Plugins**: Utilizar o padrão Observer para criar plugins customizáveis para a loja.

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
- **Fernando Moura**: [LinkedIn](https://www.linkedin.com/in/fernando-a-moura/)

---

### ✨ **Pronto para começar?**
Clone o repositório, configure o ambiente e vamos implementar juntos uma plataforma de e-commerce modular usando todos os padrões de projeto!

---
