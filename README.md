# Films API

### Api documentation

https://films.apitest.app/docs

---

### **Film registration**

- [x] Should be able to register a film

  - [x] Should not be able to register a film without a title, banner, description, director and producer

---

### **Search film and register**

- [x] Should be able search for films in external api and register in the application database

  - [x] Should not be able register movie already registered from external api

---

### **List all films**

- [x] Should be able list all films

  - [x] Should be able to list with pagination 10 out of 10

---

### **Run the application**

1. You must have node installed
2. You must have docker installed
3. Use the `npm install` command to install the dependencies
4. Create the `.env` file and configure the environment variables that are in the `.env.example` file
5. Use the `docker-compose up` command to start docker containers
6. Use the `npx prisma migrate dev` command to run migrations
