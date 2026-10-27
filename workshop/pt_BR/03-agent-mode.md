<!-- l10n-sync: source-file="workshop/03-agent-mode.md" -->
# Parte 3: Construa o jogo com fluxos de trabalho agênticos

---

Nesta parte, o Copilot passa de planejador a implementador. Em vez de escrever código linha por linha, você descreve o que precisa e deixa o Copilot trabalhar nos arquivos necessários.

## Tarefa 1: Conecte a batalha

<!-- track:vscode:start -->
1. Mude para o modo **Agent** no Copilot Chat.
2. Insira este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Volte ao fluxo normal de programação do Copilot CLI (ou continue no modo autopilot se quiser que ele prossiga até você pará-lo).
2. Se ajudar, informe o arquivo para dar mais contexto: `@src/pages/index.astro`
3. Insira este prompt:
<!-- track:cli:end -->

   > Adicione JavaScript do lado do cliente à página de batalha para que:
   > 1. Ao clicar no botão Battle, obtenha os dois nomes de usuário dos campos.
   > 2. Valide se ambos foram preenchidos e exiba um erro caso contrário.
   > 3. Busque em paralelo na nossa API os dados de contribuições dos dois usuários.
   > 4. Renderize os gráficos de contribuições como grades coloridas, com um quadrado colorido para cada dia usando a paleta do GitHub.
   > 5. Exiba um selo VS entre os dois usuários.
   > 6. Mostre o nome de usuário, o total de contribuições e o intervalo de datas de cada pessoa.
   > 7. Trate os estados de carregamento e os erros.
   > 8. Acione a ação também ao pressionar Enter nos campos de entrada.
   > 9. Por enquanto, use a interface simples que já está preparada.
   >
   > Use interfaces do TypeScript para a estrutura dos dados de contribuições.

<!-- track:vscode:start -->
3. Deixe o Agent Mode implementar as alterações em `index.astro`.
4. Revise as alterações propostas na visualização de diferenças antes de aceitá-las.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deixe o Copilot CLI implementar as alterações em `src/pages/index.astro`.
5. Use `/diff` para inspecionar as alterações geradas e depois aprove-as.
<!-- track:cli:end -->

## Tarefa 2: Teste a batalha

> **⚠️ Não está vendo as alterações?** Se a página de batalha não tiver sido atualizada, pare o servidor (`Ctrl+C`), reinicie com `npm run dev` e atualize o navegador.

1. Digite `octocat` e `torvalds` como os nomes de usuário e clique em **Battle**.
2. Você deverá ver os dois gráficos de contribuições lado a lado, com grades coloridas.
3. Teste os casos de erro:
   - Deixe um ou ambos os campos vazios e clique em Battle: deverá aparecer um erro de validação.
   - Digite um nome de usuário inválido: o app deverá exibir um erro da API.
4. Pressione **Enter** em qualquer campo; isso deverá iniciar a batalha como se você tivesse clicado no botão.

## Tarefa 3: Itere com o Copilot

Se algo não estiver como deveria, envie comentários diretamente ao Copilot. Por exemplo:

- *“Os quadrados de contribuições estão grandes demais; ajuste para 12x12 px.”*
- *“Adicione uma dica ao passar o cursor que mostre a data e a contagem de contribuições.”*
- *“O estado de carregamento precisa de uma animação pulsante.”*

<!-- track:vscode:start -->
O Agent Mode gerencia naturalmente alterações em vários arquivos e iterações. Cada prompt de acompanhamento aproveita o contexto da conversa anterior, permitindo refinar a implementação aos poucos sem recomeçar.
<!-- track:vscode:end -->

<!-- track:cli:start -->
As sessões do Copilot CLI mantêm o histórico, então cada prompt de acompanhamento aproveita o anterior. Use `/session` ou `/context` para inspecionar o contexto que o Copilot está mantendo e execute `/review` após uma iteração maior para buscar bugs ou pontos de melhoria.
<!-- track:cli:end -->

## Dicas para esta parte

- **Seja específico sobre o que você quer** — requisitos claros geram resultados melhores.
- **Divida tarefas grandes em prompts menores** se o Copilot sair do rumo.
- **Revise as alterações antes de aceitá-las** — inspecionar o diff é mais rápido do que refazer o trabalho.
- **Teste o app após cada etapa de implementação** para localizar os problemas.

## ✅ Parte 3 concluída

Você aprendeu a:

- Usar o Copilot para **implementação agêntica em vários arquivos**
- **Iterar nos resultados** com comentários específicos
- Seguir o **ciclo completo de uma funcionalidade**: implementação, revisão, testes e refinamento
