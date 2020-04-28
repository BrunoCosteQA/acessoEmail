# language: pt
# encoding UTF-8
@validamensagem
Funcionalidade: Consulta API
  

  Esquema do Cenario: Consulta com validacao de resultado
    Quando envio a requisicao
    E informa o codigo da Marca "<ID>"
    E informa o codigo do Modelo "<ModelID>"
    Entao informa a pagina  do veiculo "<Page>" e valida o retorno
    
    Exemplos:
    
    |ID|ModelID|Page|
    |2 |4			 |1		|
    
    