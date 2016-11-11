<link rel="stylesheet" type="text/css" href="../css/CurrentCSS/Common.css"/>
<link rel="stylesheet" type="text/css" href="../css/CurrentCSS/dataAnalysis.css"/>
<link rel="stylesheet" type="text/css" href="../css/CurrentCSS/ct-NavBars.css"/>


<style>#mainright a.daSources {color: green;}</style>



<div id="mainLeft">

<p class="pageTitle">Data Sources</p>



<table class="terms" style="width:100%; margin-bottom:4em;">
	<tr class="Header" style="font-size:8pt;">
		
		<th width="10%">Data Type</th>
		<th width="20%">Datasets</th>
                <th width="20%">Inclusive Dates</th>
		<th width="40%">Remarks</th>
       	</tr>

	<tr>
       
		<td class="basictext">Inpatient</td>
		<td class="basictext">Standard Inpatient Data Records (SIDR)</td>
        <td class="basictext">Jan 1989 - Present</td>
		<td class="basictext">PASBA receives copies of the SIDR feeds from all ARMY MTFs. Inpatient MTFs are required to transmit the SIDR twice a month on the 5<sup>th.</sup>and the 20<sup>th.</sup></td>
	</tr>

	<tr>
		
		<td class="basictext">Outpatient</td>
		<td class="basictext">Standard Ambulatory Data Record (SADR)</td>
        	<td class="basictext">Oct. 1985 - Sept. 2012</td>
		<td class="basictext">PASBA received daily copies of the SADR feeds from all Army MTFs. The SADR has been replaced by the CAPER.</td>
        </tr>

	<tr>
		
		<td class="basictext">Outpatient</td>
		<td class="basictext">Comprehensive Ambulatory/Professional Encounter Record (CAPER)</td>
        	<td class="basictext">Oct. 2010 - Present</td>
		<td class="basictext">PASBA receives copies of the CAPER feeds from all ARMY MTFs daily.  The CAPER replaced the SADR and it is a more comprehensive set of data elements (256 vs. 64) for the outpatient encounter.</td>
	 </tr>

	<tr>
		
		<td class="basictext">Appointment</td>
		<td class="basictext">Daily Outpatient Workload Daily Report (DOWDR)</td>
        	<td class="basictext">&nbsp;</td>
		<td class="basictext">PASBA receives the DOWDR from all ARMY MTFs daily.</td>
	</tr>
	
	<tr>
		
		<td class="basictext">Theater</td>
		<td class="basictext">TMDS</td>
        	<td class="basictext">&nbsp;</td>
		<td class="basictext">PASBA receives daily outpatient files and weekly inpatient files.</td>
	</tr>

	<tr>
		
		<td class="basictext">Multiple</td>
		<td class="basictext">MHS MART (M2)</td>
        	<td class="basictext">2007 - Present</td>
		<td class="basictext">The M2 contains numerous data sets and it is accessed using Business Objects XI (BOXI).  This same data set is available to analysts at most locations.</td>
	</tr>

	<tr>
		<td class="basictext">Multiple</td>
		<td class="basictext">MHS Data Repository (MDR)</td>
        	<td class="basictext">Varies by file</td>
	    	<td class="basictext">The MDR is a SAS programming environment and access limited.  All MHS data is processed into the MDR before being put into M2.  Some data sets are only available in the MDR.</td>
	</tr>

    	
</table>

<div class="footer">

    <hr />

    <span class="update">Last update: 3/5/2013</span>
   <span class="review">Last review: 4/23/2014</span>

</div>



</div> <!-- close main left -->



<!--#include file="../includes/mainRight-DataAnalysis.aspx" --> 






</body>
</html>
