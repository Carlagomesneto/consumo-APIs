# consumo-APIs
Repositório para as  demonstração e aprendiz sobre o consumo de APIs.

As APIs possuem alguns elementos que servem à sua utilização:

- **Ponto de entrada**: é o endereço do serviço hospedado e que pode ser acessado através de um navegador ou uma ferramenta de consumo de APIs.
Exemplo: <https://dadosabertos.camara.leg.br/api/v2>. 
- **Recursos**: são serviços de dados disponíveis para consumo.
Exemplo: **/deputados** -> <https://dadosabertos.camara.leg.br/api/v2/deputados>.
- **Parâmetros**: são informações ou filtros que servem para enviar
dados da consulta ou para serem processados pela API. Os parâmetros podem ser passados para a API através da URL ou no corpo (body) da
requisição. Exemplo: ?nome=bebeto -> <https://dadosabertos.camara.leg.br/api/v2/deputados?nome=bebeto>.
-**Métodos**: são os modos de consumo de uma API, que podem ser:
    - POST: inserção (CREATE)
    - GET: consulta/leitura (READ)
    - UPDATE: atualização (UPDATE)
    - DELETE: deleção (DELETE)

Para este projeto vamos usar o Node.js e o NPM (Node Package Manager):
- Node.js v20.13.0 LTS -> Long Term Suport

NPX -> Node Package eXecutable (Executador de pacote Node)