function getInformations()
{
    var listFeature = [];
    var featuresObject =
            {
                name: "",
                lengthScenarios: 0,
                status: "",
                scenarios: [{ steps: [{}] }]


            };

    var scenariosObject =
            {
                name: "",
                lengthSteps: 0,
                status: ""
            };

    var stepsObject =
            {
                name: "",
                status: ""
            };


    var features = $("span:contains('Feature')").parent('.header').parent();

    for (var i = 0; i < features.length; i++)
    {
        featuresObject = new Object();
        featuresObject.scenarios = new Array();

        // Features:

        featuresObject.name = $("span:contains('Feature')").parent('.header')[i].querySelectorAll('.name')[0].innerText;

        var totalFailed = features[i].querySelectorAll('.blockelement.scenario.failed,.background.failed').length;
        var totalPassed = features[i].querySelectorAll('.blockelement.scenario.passed,.background.passed').length;
        var totalSkipped = features[i].querySelectorAll('.blockelement.scenario.skipped,.background.skipped').length;
        var totalPending = features[i].querySelectorAll('.blockelement.scenario.pending,.background.pending').length;
        var totalUndefined = features[i].querySelectorAll('.blockelement.scenario.undefined,.background.undefined').length;

        if (totalFailed > 0)
            featuresObject.status = "failed";
        else if (totalFailed <= 0 && totalPassed > 0)
            featuresObject.status = "passed";
        else if (totalFailed <= 0 && totalSkipped > 0)
            featuresObject.status = "skipped";
        else if (totalFailed <= 0 && (totalPending > 0 || totalUndefined > 0))
            featuresObject.status = "pending";

        featuresObject.lengthScenarios = features[i].querySelectorAll('.blockelement.scenario,.background').length;

        // Scenarios:

        scenarios = features[i].querySelectorAll('.blockelement.scenario,.background');

        for (var j = 0; j < scenarios.length; j++)
        {
            scenariosObject = new Object();

            scenariosObject.name = scenarios[j].querySelector('.header .name').innerText;
            totalFailed = scenarios[j].querySelectorAll('.step.failed').length;
            totalPassed = scenarios[j].querySelectorAll('.step.passed').length;
            totalSkipped = scenarios[j].querySelectorAll('.step.skipped').length;
            totalPending = scenarios[j].querySelectorAll('.step.pending').length;
            totalUndefined = scenarios[j].querySelectorAll('.step.undefined').length;

            if (totalFailed > 0)
                scenariosObject.status = "failed";
            else if (totalFailed <= 0 && (totalPending > 0 || totalUndefined > 0))
                scenariosObject.status = "pending";
            else if (totalFailed <= 0 && totalSkipped > 0)
                scenariosObject.status = "skipped";
            else if (totalFailed <= 0 && totalPassed > 0)
                scenariosObject.status = "passed";

            scenariosObject.lengthSteps = scenarios[j].querySelectorAll('.step').length;

            featuresObject.scenarios[j] = scenariosObject;

            // Steps:

            steps = scenarios[j].querySelectorAll('.step');

            featuresObject.scenarios[j].steps = new Array();

            for (var k = 0; k < steps.length; k++)
            {
                stepsObject = new Object();

                stepsObject.name = steps[k].querySelector('.name').innerText;

                if(steps[k].className === "step passed")
                    stepsObject.status = "passed";
                else if(steps[k].className === "step failed")
                    stepsObject.status = "failed";
                else if(steps[k].className === "step skipped")
                    stepsObject.status = "skipped";
                else if(steps[k].className === "step pending" || steps[k].className === "step undefined")
                    stepsObject.status = "pending";

                featuresObject.scenarios[j].steps[k] = stepsObject;
            }
        }

        listFeature[i] = featuresObject;
    }

    return listFeature;
}

function getTotals()
{
    var listFeature = getInformations();
    var totalFeatures = listFeature.length;
    var totalScenarios = 0;
    var totalSteps = 0;

    for(var i = 0; i < totalFeatures; i++)
    {
        totalScenarios += listFeature[i].scenarios.length;

        for(var j = 0; j < listFeature[i].scenarios.length; j++)
        {
            totalSteps += listFeature[i].scenarios[j].steps.length;
        }
    }

    var totalObject = {
        totalFeatures: totalFeatures,
        totalScenarios: totalScenarios,
        totalSteps: totalSteps,
        totalFeaturesPassed: 0,
        totalFeaturesFailed: 0,
        totalScenariosPassed: 0,
        totalScenariosFailed: 0,
        totalStepsPassed: 0,
        totalStepsFailed: 0,
        totalStepsSkipped: 0,
        totalStepsPending: 0
    };

    for(var i=0; i<totalFeatures; i++)
    {
        var totalScenariosPassed = 0;
        var totalScenariosFailed = 0;
        var totalScenariosSkipped = 0;
        var totalScenariosPending = 0;
        var totalStepsPassed = 0;
        var totalStepsFailed = 0;
        var totalStepsSkipped = 0;
        var totalStepsPending = 0;

        var status = listFeature[i].status;

        if(status === "passed")
            totalObject.totalFeaturesPassed++;
        else if(status === "failed")
            totalObject.totalFeaturesFailed++;

        for(var j=0; j<listFeature[i].scenarios.length; j++)
        {
            status = listFeature[i].scenarios[j].status;

            if(status === "passed")
            {
                totalScenariosPassed++;
                totalObject.totalScenariosPassed++;
            }
            else if(status === "failed")
            {
                totalScenariosFailed++;
                totalObject.totalScenariosFailed++;
            }
            else if(status === "skipped")
                totalScenariosSkipped++;
            else if(status === "pending")
                totalScenariosPending++;

            for(var k=0; k<listFeature[i].scenarios[j].steps.length; k++)
            {
                status = listFeature[i].scenarios[j].steps[k].status;

                if(status === "passed")
                {
                    totalObject.totalStepsPassed++;
                    totalStepsPassed++;
                }
                else if(status === "failed")
                {
                    totalObject.totalStepsFailed++;
                    totalStepsFailed++;
                }
                else if(status === "skipped")
                {
                    totalObject.totalStepsSkipped++;
                    totalStepsSkipped++;
                }
                else if(status === "pending")
                {
                    totalObject.totalStepsPending++;
                    totalStepsPending++;
                }
            }
        }

        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .scenario-passed .info-scenario-passed').text(totalScenariosPassed);
        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .scenario-failed .info-scenario-failed').text(totalScenariosFailed);
        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .scenario-skipped .info-scenario-skipped').text(totalScenariosSkipped);
        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .scenario-pending .info-scenario-pending').text(totalScenariosPending);

        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .step-passed .info-step-passed').text(totalStepsPassed);
        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .step-failed .info-step-failed').text(totalStepsFailed);
        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .step-skipped .info-step-skipped').text(totalStepsSkipped);
        $('.name:contains("' + listFeature[i].name + '")').parent().find('.information-feature .step-pending .info-step-pending').text(totalStepsPending);

        if(totalScenariosFailed > 0)
             $('.name:contains("' + listFeature[i].name + '")').parent().children('.keyword').css("color", "#E08283");
        else if(totalScenariosSkipped === 0 && totalScenariosPending === 0)
             $('.name:contains("' + listFeature[i].name + '")').parent().children('.keyword').css("color", "#87D37C");
        else if(totalScenariosPending === 0)
             $('.name:contains("' + listFeature[i].name + '")').parent().children('.keyword').css("color", "#52B3D9");
        else
             $('.name:contains("' + listFeature[i].name + '")').parent().children('.keyword').css("color", "#F9BF3B");

        $('.steps').find('.keyword').css('color', '#000');
    }

    return totalObject;
}


function buildStatistics()
{
    var totals = getTotals();

    $('#totalFeatures').val(totals.totalFeatures);
    $('#totalScenarios').val(totals.totalScenarios);
    $('#totalSteps').val(totals.totalSteps);
    $('#featuresPassed').val(totals.totalFeaturesPassed);
    $('#featuresFailed').val(totals.totalFeaturesFailed);
    $('#scenariosPassed').val(totals.totalScenariosPassed);
    $('#scenariosFailed').val(totals.totalScenariosFailed);
    $('#stepsPassed').val(totals.totalStepsPassed);
    $('#stepsFailed').val(totals.totalStepsFailed);
    $('#stepsSkipped').val(totals.totalStepsSkipped);
    $('#stepsPending').val(totals.totalStepsPending);

    var pieData01 = [
        {
            value: totals.totalFeaturesPassed,
            color: "#87D37C",
            highlight: "#1E824C",
            label: "Passed"
        },
        {
            value: totals.totalFeaturesFailed,
            color:"#E08283",
            highlight: "#96281B",
            label: "Failed"
        }
    ];

    var pieData02 = [
        {
            value: totals.totalScenariosPassed,
            color: "#87D37C",
            highlight: "#1E824C",
            label: "Passed"
        },
        {
            value: totals.totalScenariosFailed,
            color:"#E08283",
            highlight: "#96281B",
            label: "Failed"
        }
    ];

    var pieData03 = [
        {
            value: totals.totalStepsPassed,
            color: "#87D37C",
            highlight: "#1E824C",
            label: "Passed"
        },
        {
            value: totals.totalStepsFailed,
            color:"#E08283",
            highlight: "#96281B",
            label: "Failed"
        },
        {
            value: totals.totalStepsSkipped,
            color:"#52B3D9",
            highlight: "#446CB3",
            label: "Skipped"
        },
        {
            value: totals.totalStepsPending,
            color:"#F9BF3B",
            highlight: "#F5AB35",
            label: "Pending"
        }
    ];

    var ctx01 = document.getElementById("chart-area-first").getContext("2d");
    var ctx02 = document.getElementById("chart-area-second").getContext("2d");
    var ctx03 = document.getElementById("chart-area-third").getContext("2d");

    window.myPie01 = new Chart(ctx01).Pie(pieData01);
    window.myPie02 = new Chart(ctx02).Pie(pieData02);
    window.myPie03 = new Chart(ctx03).Pie(pieData03);
}
