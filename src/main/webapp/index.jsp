<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio - Formulário</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Meu Portfólio</h1>
            <p>Formulário de Cadastro</p>
        </header>

        <main>
            <form action="resultado.jsp" method="POST" class="formulario">
                <div class="grupo">
                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required>
                </div>

                <div class="grupo">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="grupo">
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999">
                </div>

                <div class="grupo">
                    <label for="profissao">Profissão:</label>
                    <input type="text" id="profissao" name="profissao">
                </div>

                <div class="grupo">
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="5" placeholder="Conte um pouco sobre você..."></textarea>
                </div>

                <div class="grupo">
                    <label for="habilidades">Habilidades (separadas por vírgula):</label>
                    <input type="text" id="habilidades" name="habilidades" placeholder="Java, HTML, CSS, ...">
                </div>

                <button type="submit" class="btn-enviar">Enviar</button>
                <button type="reset" class="btn-limpar">Limpar</button>
            </form>
        </main>

        <footer>
            <p>&copy; 2026 - Portfólio Web com JSP</p>
        </footer>
    </div>
</body>
</html>
