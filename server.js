const http = require("http");

// A plataforma de hospedagem define PORT automaticamente.
// NOME_SITE pode ser configurada no ambiente para personalizar o título.
const port = Number(process.env.PORT) || 3000;
const nomeSite = process.env.NOME_SITE || "ConectaTech";

function escapeHTML(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const server = http.createServer((req, res) => {
  const caminho = req.url || "/";
  console.log(`[${new Date().toISOString()}] ${req.method} ${caminho}`);

  if (req.method !== "GET" || (caminho !== "/" && caminho !== "/index.html")) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!DOCTYPE html><html lang="pt-br"><meta charset="UTF-8"><title>Não encontrado</title><body><h1>404 - Página não encontrada</h1><a href="/">Voltar ao início</a></body></html>`);
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Conheça a ConectaTech, uma feira escolar de inovação e tecnologia.">
  <title>${escapeHTML(nomeSite)} | Feira de Tecnologia</title>
  <style>
    :root {
      --fundo: #0b1020;
      --painel: #151e34;
      --texto: #f4f7ff;
      --suave: #b9c4d9;
      --destaque: #45d6c5;
      --destaque-2: #7c8cff;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      color: var(--texto);
      background: radial-gradient(circle at 85% 5%, #263b68 0, transparent 30%), var(--fundo);
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
    }
    .container { width: min(1080px, 92%); margin: 0 auto; }
    header { padding: 22px 0; border-bottom: 1px solid #ffffff1c; }
    .nav { display: flex; justify-content: space-between; align-items: center; gap: 18px; }
    .marca { font-weight: 800; letter-spacing: .08em; color: var(--destaque); }
    nav a { color: var(--suave); text-decoration: none; margin-left: 18px; font-size: .95rem; }
    nav a:hover { color: var(--destaque); }
    .hero { padding: 82px 0 70px; }
    .selo { display: inline-block; color: var(--destaque); border: 1px solid #45d6c577; border-radius: 999px; padding: 6px 13px; font-size: .82rem; font-weight: 700; }
    h1 { max-width: 760px; margin: 18px 0; font-size: clamp(2.5rem, 7vw, 4.8rem); line-height: 1.04; }
    h1 span { color: var(--destaque); }
    .intro { max-width: 680px; color: var(--suave); font-size: 1.12rem; }
    .botao { display: inline-block; margin-top: 18px; padding: 12px 20px; border-radius: 9px; color: #07131d; background: var(--destaque); text-decoration: none; font-weight: 800; }
    section { padding: 48px 0; }
    .sobre { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center; }
    h2 { margin: 0 0 12px; font-size: 2rem; }
    .texto-suave { color: var(--suave); }
    .painel { background: linear-gradient(145deg, #1a2947, var(--painel)); border: 1px solid #ffffff18; border-radius: 18px; padding: 25px; }
    .grade { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 24px; }
    .card { background: var(--painel); border: 1px solid #ffffff18; border-radius: 15px; padding: 22px; }
    .numero { color: var(--destaque); font-size: .85rem; font-weight: 800; letter-spacing: .1em; }
    .card h3 { margin: 10px 0 7px; }
    .card p { color: var(--suave); margin-bottom: 0; }
    .contato { display: flex; justify-content: space-between; gap: 24px; align-items: center; background: linear-gradient(100deg, #182c4c, #202b50); border-radius: 18px; padding: 28px; }
    .contato p { color: var(--suave); margin: 5px 0; }
    footer { margin-top: 45px; padding: 24px 0; border-top: 1px solid #ffffff1c; color: var(--suave); font-size: .9rem; }
    @media (max-width: 760px) {
      .nav { align-items: flex-start; flex-direction: column; }
      nav a { margin: 0 14px 0 0; }
      .sobre, .grade { grid-template-columns: 1fr; }
      .hero { padding-top: 58px; }
      .contato { align-items: flex-start; flex-direction: column; }
    }
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <div class="marca">CONECTATECH 2026</div>
      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#atracoes">Atrações</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero container">
      <span class="selo">IDEIAS QUE CONECTAM O FUTURO</span>
      <h1>Tecnologia para criar um <span>mundo melhor.</span></h1>
      <p class="intro">A ConectaTech é uma feira escolar dedicada à criatividade, à inovação e ao conhecimento. Um espaço para apresentar projetos, compartilhar descobertas e aproximar a tecnologia do dia a dia.</p>
      <a class="botao" href="#atracoes">Conheça as atrações</a>
    </section>

    <section class="container sobre" id="sobre">
      <div>
        <h2>Aprender, experimentar e compartilhar.</h2>
        <p class="texto-suave">O evento reúne estudantes interessados em transformar ideias em soluções. Durante a feira, o público poderá conhecer demonstrações práticas e conversar com os criadores de cada projeto.</p>
      </div>
      <div class="painel">
        <span class="numero">NOSSO PROPÓSITO</span>
        <h3>Inovação acessível a todos</h3>
        <p class="texto-suave">Incentivar o pensamento crítico, o trabalho em equipe e o uso responsável da tecnologia dentro e fora da escola.</p>
      </div>
    </section>

    <section class="container" id="atracoes">
      <span class="numero">PROGRAMAÇÃO</span>
      <h2>O que você vai encontrar</h2>
      <div class="grade">
        <article class="card">
          <span class="numero">01 / ROBÓTICA</span>
          <h3>Robôs em ação</h3>
          <p>Demonstrações de protótipos e desafios de automação desenvolvidos pelos estudantes.</p>
        </article>
        <article class="card">
          <span class="numero">02 / DESENVOLVIMENTO</span>
          <h3>Aplicativos para transformar a comunidade</h3>
          <p>Ideias de aplicações e sistemas criados para resolver problemas da comunidade escolar.</p>
        </article>
        <article class="card">
          <span class="numero">03 / SEGURANÇA</span>
          <h3>Internet consciente</h3>
          <p>Orientações sobre privacidade, senhas fortes e atitudes seguras no ambiente digital.</p>
        </article>
      </div>
    </section>

    <section class="container" id="contato">
      <div class="contato">
        <div>
          <span class="numero">FALE COM A ORGANIZAÇÃO</span>
          <h2>Participe da ConectaTech</h2>
          <p>Informações: equipe de organização da feira</p>
          <p>E-mail: contato@conectatech-escola.example</p>
          <p>Local: laboratório de informática da escola</p>
        </div>
        <a class="botao" href="mailto:contato@conectatech-escola.example">Enviar e-mail</a>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">© 2026 ConectaTech - Projeto acadêmico de Computação em Nuvem para Web II.</div>
  </footer>
</body>
</html>`);
});

server.listen(port, () => {
  console.log(`Servidor ativo na porta ${port}`);
});
