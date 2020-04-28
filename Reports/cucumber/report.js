$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChamadaGet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# encoding UTF-8"
    }
  ],
  "line": 4,
  "name": "Consulta API",
  "description": "",
  "id": "consulta-api",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@validamensagem"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Consulta com validacao de resultado",
  "description": "",
  "id": "consulta-api;consulta-com-validacao-de-resultado",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "envio a requisicao",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "informa o codigo da Marca \"\u003cID\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "informa o codigo do Modelo \"\u003cModelID\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "informa a pagina  do veiculo \"\u003cPage\u003e\" e valida o retorno",
  "keyword": "Entao "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "consulta-api;consulta-com-validacao-de-resultado;",
  "rows": [
    {
      "cells": [
        "ID",
        "ModelID",
        "Page"
      ],
      "line": 15,
      "id": "consulta-api;consulta-com-validacao-de-resultado;;1"
    },
    {
      "cells": [
        "2",
        "4",
        "1"
      ],
      "line": 16,
      "id": "consulta-api;consulta-com-validacao-de-resultado;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 16,
  "name": "Consulta com validacao de resultado",
  "description": "",
  "id": "consulta-api;consulta-com-validacao-de-resultado;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@validamensagem"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "envio a requisicao",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "informa o codigo da Marca \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "informa o codigo do Modelo \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "informa a pagina  do veiculo \"1\" e valida o retorno",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaChamadaGetSteps.envio_a_requisicao()"
});
formatter.result({
  "duration": 7303084900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "ValidaChamadaGetSteps.informa_o_codigo_da_Marca(String)"
});
formatter.result({
  "duration": 851357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 28
    }
  ],
  "location": "ValidaChamadaGetSteps.informa_o_codigo_do_Modelo(String)"
});
formatter.result({
  "duration": 1383268600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ValidaChamadaGetSteps.informa_a_pagina_do_veiculo(String)"
});
formatter.result({
  "duration": 7988096600,
  "status": "passed"
});
});