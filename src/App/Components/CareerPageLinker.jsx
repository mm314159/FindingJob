import React from 'react';
import ReactDOM from 'react-dom';


var IndustrySection = React.createClass({
	    render: function() {
		var companies = [];
		this.props.companies.forEach(function(company) {		
			companies.push(<ProductRow companyName={company.name} dataUrl={company.link}/>);
        });
		
        return (
            <div className={this.props.name} >
                {companies}
            </div>
			
        );
    }
});

var ProductRow = React.createClass({
    render: function() {
        return (
            <div>
                <a href={this.props.dataUrl}>{this.props.companyName}</a>
            </div>
        );
    }
});

var ProductTable = React.createClass({
    render: function() {
        var rows = [];
		var industries = [];
		var names = [];
        var lastCategory = null;
		
        this.props.linkers.forEach(function(industry) {		
			industries.push(<IndustrySection companies={industry.companies} name={industry.name}/>);
        });

        return (
            <div className="industries">
				{industries}

            </div>
        );
    }
});

var Selection = React.createClass({
  handleValue: function(){
	$('.Consulting').toggleClass('hidden');
  },
  render: function() {
    return (
		<p>
			<input type="checkbox" name="Industry" value={this.props.test} onClick={this.handleValue} />
			{this.props.test}
		</p>
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
              <Selection test={"Consulting"}/>

              <ProductTable
              linkers={this.props.linkers}
              sortment={this.state.sortment}


               />

          </div>

        );
    }
});


var linkers = [{'name':"Consulting", 'companies': [{'name':'PWC', 'link':'http://jobs.pwc.com/'}, {'name':'Test', 'link':'http://jobs.pwc.com/'}]}, 
				{'name':"Accounting", 'companies': [{'name': 'CliftonLarsonAllen', 'link': 'https://rn11.ultipro.com/CLI1000/JobBoard/SearchJobs.aspx?Page=Search'}]}];

ReactDOM.render(
    <FilterableProductTable linkers={linkers} />,
    document.getElementById('container')
);

