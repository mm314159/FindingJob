import React from 'react';
import ReactDOM from 'react-dom';

function isDefined(val) { return val != null; }

var ToggleDisplay = React.createClass({

	propTypes: {
		hide: React.PropTypes.bool,
		show: React.PropTypes.bool
	},

	shouldHide: function() {
		var shouldHide;
		if(isDefined(this.props.show)) {
			shouldHide = !this.props.show;
		}
		else if(isDefined(this.props.hide)) {
			shouldHide = this.props.hide;
		}
		else {
			shouldHide = false;
		}

		return shouldHide;
	},

	render: function() {
		var style = {};

		if(this.shouldHide()) {
			style.display = 'none';
		}

		return (
			<span style={style} {...this.props} />
		);
	}

});

var App = React.createClass({

    getInitialState: function() {
        return {
            show: true

        };
    },

    handleClick: function() {
        this.setState({ show: !this.state.show });
    },

    render: function() {
        return (
            <div>
                <ToggleDisplay show={this.state.show}>
                    <p>{consulting}</p>
                </ToggleDisplay>
                <ToggleDisplay hide={this.state.show}>
                    <p>Is it me you're looking for?</p>
                </ToggleDisplay>
                <input type="checkbox" onClick={ this.handleClick }>Toggle</input>
            </div>

        );
    }
});

var consulting = [
  {category: 'Consulting', name: 'PWC', link: <a href="http://jobs.pwc.com/" target="_blank">PWC</a>},
  {category: 'Consulting', name: 'GrantThorton', link: <a href="http://jobs.grantthornton.com/jobs-most-recent.aspx" target="_blank">Grant Thorton</a>},
  {category: 'Consulting', name: 'Boston Consulting Group', link: <a href="http://www.bcg.com/careers/join/apply-bst/default.aspx" target="_blank">Boston Consulting Group</a>},
  {category: 'Consulting', name: 'McKinsey & Company', link: <a href="http://www.mckinsey.com/careers/join_us/search_and_apply" target="_blank">McKinsey & Company</a>},
  {category: 'Consulting', name: 'Deloitte', link: <a href="https://jobs2.deloitte.com/us/en/" target="_blank">Deloitte</a>},
  {category: 'Consulting', name: 'Booz Allen Hamilton', link: <a href="http://careers.boozallen.com/search/" target="_blank">Booz Allen Hamilton</a>},
  {category: 'Consulting', name: 'Accenture', link: <a href="https://www.accenture.com/us-en/careers/jobsearch" target="_blank">Accenture</a>},
  {category: 'Consulting', name: 'KPMG', link: <a href="http://us-jobs.kpmg.com/job-search/job-search-results/?" target="_blank">KPMG</a>},
],

var AccountingFirm = [
  {category: 'Accounting Firm', name: 'CliftonLarsonAllen', link: <a href="https://rn11.ultipro.com/CLI1000/JobBoard/SearchJobs.aspx?Page=Search" target="_blank">CliftonLarsonAllen</a>},
  {category: 'Accounting Firm', name: 'BDO', link: <a href="https://www.bdo.com/careers" target="_blank">BDO</a>},
],

var Insurance = [
  {category: 'Insurance', name: 'Erie Insurance', link: <a href="https://careers-erieinsurance.icims.com/jobs/search?ss=1" target="_blank">Erie Insurance</a>},
  {category: 'Insurance', name: 'NationWide', link: <a href="https://careers.nationwide.com/hcm/Nationwide-jobs-apply.html" target="_blank">NationWide</a>},
  {category: 'Insurance', name: 'Progressive', link: <a href="https://www.progressive.com/jobs/" target="_blank">Progressive</a>},
],

var HealthCare = [
  {category: 'Health Care', name: 'UPMC', link: <a href="http://careers.upmc.com/jobs/search" target="_blank">UPMC</a>},
],

var FederalGovernment = [
  {category: 'Federal Government', name: 'Coporation of the United States of America', link: <a href="https://www.usajobs.gov/Search/GetResults?RecentGrad=Yes" target="_blank">USAJOBS</a>},
],

var Manufactuere = [
  {category: 'Manufacturer', name: 'Sherwin-Willaims', link: <a href="https://sherwin.taleo.net/careersection/10/moresearch.ftl?lang=en&portal=10100120119" target="_blank">Sherwin-Williams</a>},
  {category: 'Manufacturer', name: 'Bayer', link: <a href='https://www.career.bayer.com/en/career/job-search/' target="_blank">Bayer</a>},
],

var NonCivilService = [
  {category: 'Non-Civil Service', name: 'Pennsylvania-Civl', link: <a href="http://www.portal.state.pa.us/portal/server.pt/community/apply_now/17640/job_opportunities/613125" target="_blank">Pennsylvania</a>},
],
  {category: 'Civil Service', name: 'Pennsylvania-Non-Civil', link: <a href="https://secure.scsc.state.pa.us/OnlineServices/ui/OnlineLogin.aspx" target="_blank">Pennsylvania</a>},
  {category: 'Aerospace', name: 'Wyle', link: <a href="http://careers.wyle.com/Careers.aspx?adata=EGId5AstmCR1ug7qR5GktTiEwd7GosINPQtsbi1sVbpEjTD0idLEqPoT3%2bZDFQb0K6qvQ2SEYAcP16yzKoE2NnWMHy5umFthF%2furvNlmC4kolSu%2bd2w%2fpzPsAWMkp7CgkXJFNrWTdiHOXlQpNYtg8IwsqQP2nYIyqHrxSFAUpEoi" target="_blank">Wyle</a>},
  {category: 'Retail', name: 'Walmart', link: <a href="https://jobs.walmart.com/us/jobs" target="_blank">Walmart</a>}






ReactDOM.render(<App />, document.getElementById('container'));
