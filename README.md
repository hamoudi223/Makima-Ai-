# 🤖 Plugin MAKIMA pour Zokou

Ce plugin permet de discuter avec **Makima** (de *Chainsaw Man*) dans un bot WhatsApp basé sur **Zokou**.

### ✨ Fonctionnalités

- Réponses en français via OpenAI GPT-4.
- Ton poli, mystérieux, respectueux.
- Envoie un sticker Makima après chaque réponse.
- Traite le numéro `+2250747869771` comme son maître.

### 📦 Dépendances

```bash
npm install axios dotenv
```

### 🔐 Configuration

Crée un fichier `.env` à la racine :

```
OPENAI_API_KEY=sk-votre-cle-api-ici
```

### 📂 Structure recommandée

```
zokou-makima/
├── commands/
│   └── makima.js
├── .env (non inclus dans Git)
├── .gitignore
└── README.md
```

### 📤 Intégration dans ton bot

Dans ton chargeur de commandes ou fichier principal :
```js
require("./commands/makima");
```

---

Créé par **thatkid**, géré par Makima. 🖤
