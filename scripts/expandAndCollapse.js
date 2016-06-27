function expandAll()
{
    $("span:contains('Feature')").parent().parent('.container').children(":not('.header')").show();
    $(".blockelement .scenario span:contains('Scenario')").parent().parent('.container').children(":not('.header')").show();
    $(".blockelement .background span:contains('Background')").parent().parent('.container').children(":not('.header')").show();  
    $('.expandAndCollapseAll').text('- Collapse All');
    $('.expandAndCollapseAll').attr("onclick","collapseAll()");
    $('.expand-signal-feature').text("- ");
    $('.expand-signal-feature').attr("onclick","collapseFeature(this)");
    $('.expand-signal-scenario').text("- ");
    $('.expand-signal-scenario').attr("onclick","collapseScenario(this)");
}
    
function collapseAll()
{
    $("span:contains('Feature')").parent().parent('.container').children(":not('.header')").hide();
    $('.expandAndCollapseAll').text('+ Expand All');
    $('.expandAndCollapseAll').attr("onclick","expandAll()");
    $('.expand-signal-feature').text("+ ");
    $('.expand-signal-feature').attr("onclick","expandFeature(this)");
}

function expandFeature(el)
{
    $(el).parent().parent().parent('.container').children(":not('.header')").show();          
    $(el).text("- ");
    $(el).attr("onclick","collapseFeature(this)");
    $('.expandAndCollapseAll').text('- Collapse All');
    $('.expandAndCollapseAll').attr("onclick","collapseAll()");
    $(".blockelement .scenario span:contains('Scenario')").parent().parent('.container').children(":not('.header')").hide();
    $(".blockelement .background span:contains('Background')").parent().parent('.container').children(":not('.header')").hide();
    $('.expand-signal-scenario').text("+ ");
    $('.expand-signal-scenario').attr("onclick","expandScenario(this)");
}

function collapseFeature(el)
{
    $(el).parent().parent().parent('.container').children(":not('.header')").hide();          
    $(el).text("+ ");
    $(el).attr("onclick","expandFeature(this)");
    $('.expandAndCollapseAll').text('+ Expand All');
    $('.expandAndCollapseAll').attr("onclick","expandAll()");
}

function expandScenario(el)
{
    $(el).parent().parent().parent('.container').children(":not('.header')").show();          
    $(el).text("- ");
    $(el).attr("onclick","collapseScenario(this)");
}

function collapseScenario(el)
{
    $(el).parent().parent().parent('.container').children(":not('.header')").hide();          
    $(el).text("+ ");
    $(el).attr("onclick","expandScenario(this)");
}