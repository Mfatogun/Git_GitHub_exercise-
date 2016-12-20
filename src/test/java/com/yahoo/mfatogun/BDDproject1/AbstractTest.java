/*package com.yahoo.mfatogun.BDDproject1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AbstractTest {
	
	protected static WebDriver driver;
	protected WebDriver getDriver() {
		return null;
	
		//if(driver==null)
					
			
			
}
			

@Given("^lunch what <Browser>$")
public void lunch_what_Browser(String Browser ) throws Throwable {
		
		if(Browser.equalsIgnoreCase("firefox")){
   		 driver=new FirefoxDriver();
   	 }else{
   		 if(Browser.equalsIgnoreCase("Chrome")){
   			 System.setProperty("webdriver.chrome.driver","C://SoftwareTesting//Browsers//chromedriver.exe" );
   				driver= new ChromeDriver();
   		 }
   		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
   	 }		
		
	}
		//return driver;


@And("^am on car wale stie$")
public void am_on_car_wale_stie() throws Throwable {
	driver.get("https://www.carwale.com/");
    
}
@Then("^get  page title as <Title>$")
public void get_page_title_as_Title() throws Throwable {
	driver.getTitle().contains("New Cars");

}

}
*/