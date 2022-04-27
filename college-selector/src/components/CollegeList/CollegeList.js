import { useState } from "react";
import axios from "axios";
import "./styles.css";
import * as React from "react";
// import Navbar from "../Navbar";
import { Nav, NavLinks, NavMenu } from "../Navbar/NavbarElements"
import { TextField, Select, MenuItem } from "@mui/material";
import About from "../../pages/about";
import { useNavigate } from "react-router";

function CollegeList() {
  const params = {
    //two things: info_ids & filters
    filters: {},
    offset: 100, //if want to load more info than 20 this is page index
    info_ids: [
      "website",
      "shortDescription",
      "longDescription",
      "campus_image",
      "logo_image",
      "fundingType",
      "TOEFLRequirement",
      "averageNetCost",
      "studentFacultyRatio",
      "primaryFaith",
    ], //returned object's content
  };


  const [netCost, setnetCost] = React.useState(null);
  const handlenetCost = (event) => {
    setnetCost(event.target.value);
    console.log(netCost);
  };

  const [Catholic, setCatholic] = React.useState(null);
  const handleCatholic = (event) => {
    setCatholic(event.target.value);
  };

  const [Ratio, setRatio] = React.useState(null);
  const handleRatio = (event) => {
    setRatio(event.target.value);
  };
  let navigate = useNavigate();
  const handleClick = (event) => {
    
    navigate("/about");
  }

  const [colleges, setColleges] = useState(null);

  const fetchData = async () => {
    params.filters = {};

    params.filters["primaryFaith"] = Catholic;
    console.log(params.filters);
    // console.log(Catholic);
    const response = await axios
      .get(
        "https://api.collegeai.com/v1/api/college-list?api_key=free_c2f12782a8449751c2c15f5891",
        { params }
        // "https://api.collegeai.com/v1/api/college-list?api_key=zPrUOEVtV86G&limit=25&sort_order=best-colleges&info_ids=name%2CmajorGraduates%2CentryProb%2CappliedDist%2CacceptedDist%2CclassSizeRangeOver100%2CclassSizeRange2To9%2CclassSizeRange10To19%2CclassSizeRange20To29%2CclassSizeRange30To39%2CclassSizeRange40To49%2CclassSizeRange50To99%2CnumberOfFullTimeFaculty%2CnumberOfPartTimeFaculty%2CtotalEnrolled%2CacceptanceRate%2CstudentsSubmittingACT%2CstudentsSubmittingSAT%2CtotalApplicants%2CmenApplicants%2CwomenApplicants%2CtotalAdmitted%2CmenAdmitted%2CwomenAdmitted%2CtotalEnrolled%2CmenEnrolled%2CwomenEnrolled%2ChsGPARequirement%2ChsRankRequirement%2CsecondarySchoolRecordRequirement%2CTOEFLRequirement%2CcompletionOfCollegePreparatoryProgram%2Crecommendations%2CformalDemonstrationOfCompetencies%2CadmissionTestScores%2CotherTest%2CsatMathPercentile25%2CsatMathPercentile75%2CsatReadingPercentile25%2CsatReadingPercentile75%2CactCumulativePercentile25%2CactCumulativePercentile75%2CactMathPercentile25%2CactMathPercentile75%2CactEnglishPercentile25%2CactEnglishPercentile75%2CactSciencePercentile25%2CactSciencePercentile75%2CactWritingPercentile25%2CactWritingPercentile75%2CfederalLoanRate%2CloanPrincipal%2CpercentStudentsReceivingFederalGrantAid%2CavgCostOfAttendance%2CaverageNetCost%2CavgNetPrice%2CinStateTuition%2CoutOfStateTuition%2CanyAlternativeTuitionPlansOfferedByInstitution%2CtuitionGuaranteePlan%2CprepaidTuitionPlan%2CtuitionPaymentPlan%2CotherAlternativeTuitionPlan%2CpercentOfStudentsWhoReceiveFinancialAid%2CstudentShareByIncomeLevel0To30000%2CstudentShareByIncomeLevel30001To48000%2CstudentShareByIncomeLevel480001To75000%2CstudentShareByIncomeLevel75001To110000%2CstudentShareByIncomeLevel110001Plus%2CnetPriceByIncomeLevel%2CnetPriceByIncomeLevel0To3000%2CnetPriceByIncomeLevel30001To48000%2CnetPriceByIncomeLevel48001To75000%2CnetPriceByIncomeLevel75001To110000%2CnetPriceByIncomeLevel110001Plus%2CpercentMale%2CpercentFemale%2CundergraduateSize%2CdemographicsMen%2CdemographicsWomen%2CdemographicsWhite%2CdemographicsBlack%2CdemographicsHisp%2CdemographicsAsian%2CdemographicsAian%2CdemographicsNhpi%2Cdemographics2mor%2CdemographicsNra%2CdemographicsUnkn%2CdemographicsAvgFamilyIncome%2CdemographicsMedianFamilyIncome%2CdemographicsMedianHouseholdIncome%2CpercentFirstGeneration%2CaverageAgeOfEntry%2ConCampusHousingAvailable%2CfreshmenRequiredToLiveOnCampus%2CsororitiesPercentParticipation%2CfraternitiesPercentParticipation%2CrotcOffered%2CrotcArmyOffered%2CrotcNavyOffered%2CrotcAirforceOffered%2Ccity%2CstateAbbr%2CstateName%2Czipcode%2Caddr%2ClocationLat%2ClocationLong%2Caliases%2Ccolors%2CisPrivate%2ClocaleClass%2ClocaleSize%2CstudentFacultyRatio%2CtypeYear%2Cregion%2CmenOnly%2CwomenOnly%2CcalendarSystem%2CreligiousAffiliation%2CprimaryFaith%2CstudentFacultyRatio%2CshortDescription%2ClongDescription%2CdescriptionCitation%2CfinancialAidWebsite%2CadmissionsWebsite%2CapplicationWebsite%2Cwebsite%2CnetPriceWebsite%2CvetMilitaryServiceWebsite%2CstudentRightToKnowAthleteWebsite%2CcampusImage%2CrankingsBestColleges%2CrankingsBestValueColleges%2CrankingsBestCollegeAcademics%2CrankingsTopPrivate%2CrankingsMostDiverseColleges%2CrankingsBestCollegeCampuses%2CrankingsBestCollegeAthletics%2CrankingsBestCollegesForBiology%2CrankingsBestCollegesForBusiness%2CrankingsBestCollegeFood%2CrankingsTopPartySchools%2CrankingsBestCollegeLocations%2CrankingsBestCollegeProfessors%2CrankingsBestStudentLife%2CrankingsHardestToGetIn%2CrankingsBestStudentAthletes%2CrankingsHottestGuys%2CrankingsBestCatholicColleges%2CrankingsCollegesThatAcceptTheCommonApp%2CrankingsBestCollegesForChemistry%2CrankingsBestCollegesForCommunications%2CrankingsBestCollegesForComputerScience%2CrankingsBestCollegesForEconomics%2CrankingsBestCollegesForHistory%2CrankingsBestCollegesForNursing%2CrankingsMostLiberalColleges%2CrankingsMostConservativeColleges%2CrankingsBestCollegesForArt%2CrankingsBestCollegesForEngineering%2CrankingsBestGreekLifeColleges%2CrankingsCollegesWithNoApplicationFee%2CrankingsBestCollegesForDesign%2CrankingsBestTestOptionalColleges%2CrankingsBestCollegesForPhysics%2Ctheprincetonreviewbest382colleges2018%2Ccollegesthatchangelivesfourthedition%2CgraduationRate%2CmedianEarningsSixYrsAfterEntry%2CmedianEarningsTenYrsAfterEntry&allowed_reason_ids=&filters=%7B%22schoolSize%22%3A%5B%5D%2C%22sex%22%3A%5B%5D%2C%22online%22%3A%5B%5D%2C%22maxNetCost%22%3Anull%2C%22fundingType%22%3A%5B%5D%2C%22major%22%3A%5B%5D%2C%22degreeLength%22%3A%5B%5D%2C%22primaryFaith%22%3A%5B%5D%7D"
      )
      .then(function (response) {
        console.log(response);
        setColleges(response.data.colleges);
      });
  };
  console.log(colleges);
  return (
    <div className="CollegeList">
      <Nav>
        <NavMenu>
          <NavLinks onClick={handleClick}>About</NavLinks>
        </NavMenu>
      </Nav>
      <br/><br/><br/><br/><br/>
      {/* <label className="label">Primary Faith  </label>
      <Select
        labelId="select"
        id="catholic"
        value="catholic"
        label="Primary Faith"
        onChange={handleCatholic}>
          <MenuItem value="catholic">Catholic</MenuItem>
          <MenuItem value="non-catholic">Non-Catholic</MenuItem>
      </Select>
 */}

      {/* <label className="label">Primary Faith  </label>
      <select className="select" onChange={handleCatholic}>
        <option className="option" value="catholic">Catholic</option>
        <option className="option" value="non-catholic">Non-Catholic</option>
      </select> */}
      <label className="label"> College-Faculty Ratio LE  </label>
      <TextField
          id="college-faculty"
          label="Number"
          type="number"
          variant="standard"
          size="small"
          onChange={handleRatio}
          InputLabelProps={{
            shrink: true,
          }}
        />      
      <label className="label"> | Net Cost of Attendance LE  </label>
      <TextField
          id="netCost"
          label="Number"
          type="number"
          defaultValue={20000}
          onChange={handlenetCost}
          variant="standard"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />      
      <br/><br/>
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Load Data
        </button>
        </div>
        <div className="colleges">
          {colleges &&
            colleges.map((college, index) => {
              if (
                college.studentFacultyRatio <= Ratio &&
                college.averageNetCost <= netCost
              ) {
                return (
                  <div className="college" key={index}>
                    <div>
                      <img
                        width="400px"
                        height="200px"
                        src={college.logoImage}
                      />
                      <br />
                      <a href={college.website}>{college.website}</a>
                      <div className="details">
                        <p>{college.shortDescription}</p>
                        <p>{college.fundingType}</p>
                        <p>{college.averageNetCost}</p>
                        <p>{college.primaryFaith}</p>
                        <p>Student-Faculty Ratio:{college.studentFacultyRatio}</p>
                        <p>Average Net Cost:{college.averageNetCost}</p>
                        <p>{netCost}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
  );
}

export default CollegeList;
