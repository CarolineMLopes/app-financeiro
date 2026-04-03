<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.time.LocalDateTime" %>
<%@ page import="java.time.format.DateTimeFormatter" %>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio - Resultado</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Meu Portfólio</h1>
            <p>Dados Processados</p>
        </header>

        <main class="resultado">
            <%
                // Obter parâmetros do formulário
                String nome = request.getParameter("nome");
                String email = request.getParameter("email");
                String telefone = request.getParameter("telefone");
                String profissao = request.getParameter("profissao");
                String mensagem = request.getParameter("mensagem");
                String habilidades = request.getParameter("habilidades");

                // Tratar valores null
                nome = (nome != null && !nome.trim().isEmpty()) ? nome : "Não informado";
                email = (email != null && !email.trim().isEmpty()) ? email : "Não informado";
                telefone = (telefone != null && !telefone.trim().isEmpty()) ? telefone : "Não informado";
                profissao = (profissao != null && !profissao.trim().isEmpty()) ? profissao : "Não informado";
                mensagem = (mensagem != null && !mensagem.trim().isEmpty()) ? mensagem : "Não informado";
                habilidades = (habilidades != null && !habilidades.trim().isEmpty()) ? habilidades : "Nenhuma";

                // Data/Hora do processamento
                LocalDateTime agora = LocalDateTime.now();
                DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
                String dataHora = agora.format(fmt);
            %>

            <div class="cartao-resultado">
                <h2>✓ Formulário Processado com Sucesso!</h2>

                <div class="informacoes">
                    <div class="campo">
                        <strong>Nome:</strong>
                        <p><%= nome %></p>
                    </div>

                    <div class="campo">
                        <strong>Email:</strong>
                        <p><a href="mailto:<%= email %>"><%= email %></a></p>
                    </div>

                    <div class="campo">
                        <strong>Telefone:</strong>
                        <p><%= telefone %></p>
                    </div>

                    <div class="campo">
                        <strong>Profissão:</strong>
                        <p><%= profissao %></p>
                    </div>

                    <div class="campo">
                        <strong>Sobre Você:</strong>
                        <p><%= mensagem %></p>
                    </div>

                    <div class="campo">
                        <strong>Habilidades:</strong>
                        <p>
                            <%
                                String[] skills = habilidades.split(",");
                                for (String skill : skills) {
                                    out.print("<span class='skill'>" + skill.trim() + "</span>");
                                }
                            %>
                        </p>
                    </div>

                    <div class="campo">
                        <strong>Processado em:</strong>
                        <p><%= dataHora %></p>
                    </div>
                </div>

                <div class="acoes">
                    <a href="index.jsp" class="btn-voltar">Voltar ao Formulário</a>
                </div>
            </div>
        </main>

        <footer>
            <p>&copy; 2026 - Portfólio Web com JSP</p>
        </footer>
    </div>
</body>
</html>
