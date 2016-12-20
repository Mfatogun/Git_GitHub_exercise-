package com.yahoo.mfatogun.BDDproject1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		//format = {"pretty", "html:target/html/"},
		
		features = "src/test/resource/com/yahoo/mfatogun/feature",
		glue={"com.yahoo.mfatogun.BDDproject1"},
		plugin={"pretty", "html:target/cucumber-html-report"})

		
		//tags = {"@signin, @newcustomer"})


 

public class TestRnner {

}
