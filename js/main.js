function goToOpeningStatement() {
    var container = $('main');
    var scrollTo = $(".statement");
    var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
    container.animate({
        scrollTop: position
    }, 1800);
};

$( document ).ready(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var trace1 = {
        x: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
        y: [82, 119, 112, 67, 77, 48,28],
        type: 'scatter',
        name: 'Pilot error'
      };
      
      var trace2 = {
        x: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
        y: [43,62,45,36,35,22,10],
        type: 'scatter',
        name: 'Mechanical'
      };
      var trace3 = {
        x: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
        y: [25,15,22,22,10,8,5],
        type: 'scatter',
        name: 'Weather'
      };
      
      var trace4 = {
        x: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
        y: [6,9,20,20,13,9,4],
        type: 'scatter',
        name: 'Sabotage'
      };
      
      var trace5 = {
        x: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
        y: [9,21,31,16,22,10,2],
        type: 'scatter',
        name: 'Other'
      };
      var trace6 = {
        x: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
        y: [9,21,31,16,22,10,2],
        type: 'scatter',
        name: 'Other'
      };
      
      var data = [trace1, trace2, trace3, trace4, trace5];
      var layout = {
        displayModeBar: false,
        title: {
          text:'Causes of fatal accidents by decade',
          position: 'middle center',
          font: {
            family: 'Lato, sans-serif',
            size: 32,
            color: 'rgb(119, 119, 119)',
          },
          xref: 'paper',
          x: 0.5,
          xanchor:'center'
        },
        xaxis: {
          title: {
            text: 'Period between crashes',
            font: {
              family: 'Lato, sans-serif',
              size: 25,
              color: 'rgb(119, 119, 119)',
            },
          },

        },
        yaxis: {
          title: {
            text: 'Number of crashes',
            font: {
              family: 'Lato, sans-serif',
              size: 25,
              color: 'rgb(119, 119, 119)',
            }
          }
        }
      };

      gsap.fromTo(".glow-button", {
        boxShadow: "0 0 0 0px rgba(0, 0, 0, 0.4)"
      }, {
        boxShadow: "0 0 0 20px rgba(0, 0, 0, 0)",
        repeat: -1,
        duration: 1
      });
      
      
      Plotly.newPlot('crash-reasons', data, layout);
      
});