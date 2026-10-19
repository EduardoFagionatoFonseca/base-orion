# Base Órion — Fronteira Marciana

Tower defense 2D em português, sem dependências. Administre um posto marciano e sobreviva a seis ondas de máquinas autônomas.

## Jogar

Com Node.js 18 ou superior, execute `npm start` e abra http://127.0.0.1:4173. Também é possível abrir `index.html` diretamente. `npm run check` verifica a sintaxe.

## Controles

- Clique em um módulo na lateral e depois em um terreno livre para construir. Teclas 1–6 também selecionam módulos; Esc cancela.
- Clique em uma construção para reparar ou retirar/designar seu robô.
- Inicie cada onda quando sua defesa estiver pronta. Espaço pausa; o botão 1× alterna a velocidade.

## Sistemas

Sete robôs operam geradores solares, extratores, estufas e suporte de vida. Materiais constroem e reparam; energia alimenta lasers, cultivo e oxigênio; comida e oxigênio sustentam a colônia. Reservas esgotadas danificam o núcleo. Sucateiros priorizam produção, drenadores buscam geradores e demolidors priorizam torres. As ondas 3 e 6 incluem tempestades solares: geração cai a 25%, e um abrigo evita danos por radiação à tripulação representados na integridade do núcleo.

O jogo usa simplificações pedagógicas, sem pretensão de simular valores físicos reais. Arte vetorial original desenhada no Canvas, sem assets externos obrigatórios; fontes web têm alternativas locais. Nenhuma coleta de dados ou serviço externo de jogo.
