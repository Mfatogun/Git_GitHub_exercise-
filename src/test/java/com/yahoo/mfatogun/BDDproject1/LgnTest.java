package com.yahoo.mfatogun.BDDproject1;

import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LgnTest {
	
		WebDriver driver=null;



@Given("^am on car wale stie$")
public void am_on_car_wale_stie() throws Throwable {

	
	System.setProperty("webdriver.chrome.driver","C://SoftwareTesting//Browsers//chromedriver.exe" );
	driver= new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	
	
driver.get("https://www.cargurus.com/");
driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

}

@When("^clcik to login$")
public void clcik_to_login() throws Throwable {
	driver.findElement(By.cssSelector("div.flag-icon.flag-icon-us")).click();

	WebDriverWait wait = new WebDriverWait(driver, 15);
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("United States")));

	driver.findElement(By.linkText("United States")).click();

	Thread.sleep(5000);

driver.findElement(By.linkText("My account")).click();
driver.findElement(By.linkText("Sign in")).click();

  
}

@And("^enter mail as \"([^\"]*)\" and passwd as \"([^\"]*)\"$")
public void enter_mail_as_and_passwd_as(String Myemail, String Mypassd) throws Throwable {

	driver.findElement(By.id("loginEmail")).sendKeys(Myemail);
	driver.findElement(By.id("loginPassword")).sendKeys(Mypassd);
    
}

@And("^clck sgn n bttn$")
public void clck_sgn_n_bttn() throws Throwable {
driver.findElement(By.id("loginButton")).click();
/*
}

@SuppressWarnings("deprecation")
@Then("^logn as my logn name \"([^\"]*)\"$")
public void logn_as_my_logn_name(String is) throws Throwable {

	driver.findElement(By.id("toolsMenu")).click();
	driver.findElement(By.linkText("My account")).click();
	try{
		//String title = (driver.findElement(By.cssSelector("h1..firepath-matching-node")).getText());
		
	
		//System.out.println("Title is : " + title);
		Assert.assertTrue(driver.getTitle().contains("is"));

	} catch (Error e) {
	 
	}
	*/
	
}


@And("^l logn out$")
public void l_logn_out() throws Throwable {
	driver.findElement(By.linkText("My account")).click();
	driver.findElement(By.linkText("Sign out")).click();
}

@Then("^l close browser$")
public void l_close_browser() throws Throwable {
	driver.close();
	driver.quit();
  
}

	}





