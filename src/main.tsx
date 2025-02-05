import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2025-01-25 10:00:00'),
        },

        {
          id: 2,
          title: 'New Phone',
          type: 'withdraw',
          category: 'Shopping',
          amount: 3000,
          createdAt: new Date('2025-01-15 10:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
