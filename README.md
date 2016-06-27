# Cucumber Report
A pretty beautiful report to cucumber

**If you have any doubt or trouble, please ping me eduardogheinen@gmail.com**

## How to use
First of all, choose a directory for your report inside your machine and clone this project to there.
In the next step, setup your report output on your cucumber. For example:

```
@RunWith(Cucumber.class)
@CucumberOptions(
    plugin = {"pretty", "html:/Users/eheinen/Workspace/qa/cucumber/cucumber-report/report/"},
    features = {"src/com/abff/features/specs/"},
    tags = "@login"
)
public class RunCukies {}
```

Be careful! You need to generate the report inside the directory **/report/**

Now just click twice on **report.html** inside the project. And have some fun!

## Screenshots

![alt tag](https://github.com/eheinen/cucumber-report/blob/master/screenshots/screen01.png)
![alt tag](https://github.com/eheinen/cucumber-report/blob/master/screenshots/screen02.png)
![alt tag](https://github.com/eheinen/cucumber-report/blob/master/screenshots/screen03.png)
![alt tag](https://github.com/eheinen/cucumber-report/blob/master/screenshots/screen04.png)
![alt tag](https://github.com/eheinen/cucumber-report/blob/master/screenshots/screen05.png)
![alt tag](https://github.com/eheinen/cucumber-report/blob/master/screenshots/screen06.png)
