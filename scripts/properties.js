var reportServer = true;
var reportPathLocal = "../../../../../../../../target/test_report/";
var reportPathServer = "report/";

function getReportPath()
{
    if(reportServer)
        return reportPathServer;
    else
        return reportPathLocal;
}
