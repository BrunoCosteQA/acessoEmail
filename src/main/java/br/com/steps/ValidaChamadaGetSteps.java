package br.com.steps;

import static org.hamcrest.CoreMatchers.containsString;

import org.hamcrest.Matcher;
import org.hamcrest.Matchers;

import static org.hamcrest.Matchers.*;
import org.junit.Assert;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import static io.restassured.RestAssured.*;
import io.restassured.response.Response;

public class ValidaChamadaGetSteps {

	private Response responseGetPage;

	@Quando("^envio a requisicao")
	public void envio_a_requisicao() throws Throwable {
		Response validaURL = given().when().get("http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make");

		// Validando Status Code
		validaURL.then().statusCode(200);
	}

	@Entao("^informa o codigo da Marca \"([^\"]*)\"$")
	public void informa_o_codigo_da_Marca(String ID) throws Throwable {
		Response responseGetMarcasIds = given().param("MakeID", ID).when()
				.get("http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model");

		// Validando Status Code
		responseGetMarcasIds.then().statusCode(200).log().all();
	}

	@Entao("^informa o codigo do Modelo \"([^\"]*)\"$")
	public void informa_o_codigo_do_Modelo(String ModelID) throws Throwable {
		Response responseGetModelIds = given().param("ModelID", ModelID).when()
				.get("http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version");

		// Validando Status Code
		responseGetModelIds.then().statusCode(200).log().all();

	}

	@Entao("^informa a pagina  do veiculo \\\"([^\\\"]*)\\\" e valida o retorno$")
	public void informa_a_pagina_do_veiculo(String Page) throws Throwable {
		responseGetPage = given().param("Page", Page).when()
				.get("http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles");

		String validaMarca = responseGetPage.then().log().all().extract().path("Make").toString();

		if (validaMarca.contains("Honda"))
			System.out.println("A marca Honda esta aqui " + validaMarca);
		else {
			System.out.println("A marca Honda não esta aqui " + validaMarca);
			Assert.assertTrue(false);
		}

		String validaModelo = responseGetPage.then().log().all().extract().path("Model").toString();

		if (validaModelo.contains("City"))
			System.out.println("O Modelo City esta aqui " + validaModelo);
		else {
			System.out.println("O Modelo City esta aqui  " + validaModelo);
			Assert.assertTrue(false);
		}
		String validaVersao = responseGetPage.then().log().all().extract().path("Version").toString();

		if (validaVersao.contains("2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO"))
			System.out.println("A versão 2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO esta aqui " + validaVersao);
		else {
			System.out.println("A versão 2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO esta aqui " + validaVersao);
			Assert.assertTrue(false);
		}
	}
}
