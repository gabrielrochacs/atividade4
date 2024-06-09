Passos para executar a aplicação:

1. Instalação do MariaDB:
   - Certifique-se de ter o MariaDB instalado na sua máquina ou em um contêiner Docker.
   - Se estiver usando um contêiner Docker, você pode usar o comando `docker run --name meu-mariadb -p 3010:3306 -e MYSQL_ROOT_PASSWORD=minha_senha -d mariadb:latest` para iniciar um contêiner MariaDB na porta 3010.

2. Criação do banco de dados e tabela:
   - Use o script SQL fornecido para criar o banco de dados e a tabela necessários.
   - Execute os comandos SQL abaixo no terminal ou no cliente MySQL/MariaDB:
     ```
     CREATE TABLE IF NOT EXISTS cadastro_pessoas (
         id INT AUTO_INCREMENT PRIMARY KEY,
         nome VARCHAR(100) NOT NULL,
         telefone VARCHAR(20),
         cidade VARCHAR(50),
         sexo ENUM('Masculino', 'Feminino', 'Outro') NOT NULL
     );

     INSERT INTO cadastro_pessoas (nome, telefone, cidade, sexo) VALUES
         ('Maria Silva', '(XX) XXXX-XXXX', 'São Paulo', 'Feminino'),
         ('João Santos', '(YY) YYYY-YYYY', 'Rio de Janeiro', 'Masculino'),
         ('Ana Souza', NULL, 'Salvador', 'Feminino');
     ```

3. Configuração e execução da aplicação Node.js:
   - Certifique-se de ter o Node.js e o npm instalados na sua máquina.
   - Copie todos os arquivos do projeto para um diretório local.
   - Execute `npm install` no terminal para instalar as dependências do projeto.
   - Certifique-se de que o MariaDB esteja em execução (se estiver usando um contêiner Docker).
   - Execute `npm start` no terminal para iniciar a aplicação.
   - Após iniciar a aplicação, você poderá acessar os endpoints:
     - `/liveness` para verificar se a aplicação está viva.
     - `/readiness` para verificar a prontidão da aplicação.
     - `/consulta-dados` para listar os dados da tabela `cadastro_pessoas`.

4. Acesso aos dados:
   - Você pode acessar os dados da tabela `cadastro_pessoas` através do endpoint `/consulta-dados` utilizando um navegador ou uma ferramenta de API como o Postman.
   - O URL de acesso será algo como: http://localhost:3010/consulta-dados.
