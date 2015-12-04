import React from 'react';
import ReactDOM from 'react-dom';



var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="1">{this.props.category}</th></tr>);
    }
});

var ProductRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.product.link}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.linkers.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var Selection = React.createClass({
  render: function() {
    return (
      <form>
          Consulting
          <input
            type="checkbox"
            checked={this.props.sortment}
            ref="checkOnly"
            onChange={this.handleChange}
           />
          {''}
          Insurance
          <input type="checkbox" />
          {''}
          Health Care
          <input type="checkbox" />
          {''}
          Federal Government
      </form>
    );
  }
});


var FilterableProductTable = React.createClass({
    getInitialState: function() {
      return {
        checkOnly: true
      };
    },

    handleUserInput: function(checkOnly) {
      this.setState({
        checkOnly: checkOnly
      });
    },


    render: function() {
        return (
          <div>
              <Selection />
              <ProductTable
              linkers={this.props.linkers}
              sortment={this.state.sortment}


               />

          </div>

        );
    }
});


var linkers = [
  {category: 'Consulting', name: 'PWC', link: <a href="http://jobs.pwc.com/" target="_blank">PWC</a>},
  {category: 'Consulting', name: 'GrantThorton', link: <a href="http://jobs.grantthornton.com/jobs-most-recent.aspx" target="_blank">Grant Thorton</a>},
  {category: 'Consulting', name: 'Boston Consulting Group', link: <a href="http://www.bcg.com/careers/join/apply-bst/default.aspx" target="_blank">Boston Consulting Group</a>},
  {category: 'Consulting', name: 'McKinsey & Company', link: <a href="http://www.mckinsey.com/careers/join_us/search_and_apply" target="_blank">McKinsey & Company</a>},
  {category: 'Consulting', name: 'Deloitte', link: <a href="https://jobs2.deloitte.com/us/en/" target="_blank">Deloitte</a>},
  {category: 'Consulting', name: 'Booz Allen Hamilton', link: <a href="http://careers.boozallen.com/search/" target="_blank">Booz Allen Hamilton</a>},
  {category: 'Consulting', name: 'Accenture', link: <a href="https://www.accenture.com/us-en/careers/jobsearch" target="_blank">Accenture</a>},
  {category: 'Accounting Firm', name: 'CliftonLarsonAllen', link: <a href="https://rn11.ultipro.com/CLI1000/JobBoard/SearchJobs.aspx?Page=Search">CliftonLarsonAllen</a>},
  {category: 'Insurance', name: 'Erie Insurance', link: <a href="https://careers-erieinsurance.icims.com/jobs/search?ss=1" target="_blank">Erie Insurance</a>},
  {category: 'Insurance', name: 'Progressive', link: <a href="https://www.progressive.com/jobs/" target="_blank">Progressive</a>},
  {category: 'Health Care', name: 'UPMC', link: <a href="http://careers.upmc.com/jobs/" target="_blank">UPMC</a>},
  {category: 'Federal Government', name: 'Coporation of the United States of America', link: <a href="https://www.usajobs.gov/Search/GetResults?RecentGrad=Yes" target="_blank">USAJOBS</a>},
  {category: 'Manufacturer', name: 'Sherwin-Willaims', link: <a href="https://sherwin.taleo.net/careersection/10/moresearch.ftl?lang=en&portal=10100120119" target="_blank">Sherwin-Williams</a>},
  {category: 'Manufacturer', name: 'Bayer', link: <a href='https://www.career.bayer.com/en/career/job-search/' target="_blank">Bayer</a>},
  {category: 'Civil Service', name: 'Pennsylvania-Civl', link: <a href="http://www.portal.state.pa.us/portal/server.pt/community/apply_now/17640/job_opportunities/613125" target="_blank">Pennsylvania</a>},
  {category: 'Non-Civil Service', name: 'Pennsylvania-Non-Civil', link: <a href="https://secure.scsc.state.pa.us/OnlineServices/ui/OnlineLogin.aspx" target="_blank">Pennsylvania</a>},
  {category: 'Aerospace', name: 'Wyle', link: <a href="http://careers.wyle.com/Careers.aspx?adata=EGId5AstmCR1ug7qR5GktTiEwd7GosINPQtsbi1sVbpEjTD0idLEqPoT3%2bZDFQb0K6qvQ2SEYAcP16yzKoE2NnWMHy5umFthF%2furvNlmC4kolSu%2bd2w%2fpzPsAWMkp7CgkXJFNrWTdiHOXlQpNYtg8IwsqQP2nYIyqHrxSFAUpEoi" target="_blank">Wyle</a>},
];

ReactDOM.render(
    <FilterableProductTable linkers={linkers} />,
    document.getElementById('container')
);