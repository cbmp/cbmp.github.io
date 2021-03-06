import React from 'react';
import Loadable from 'react-loadable';

const Plotly = Loadable({
    loader: () => import(`react-plotly.js`),
    loading: ({ timedOut }) =>
      timedOut ? (
        <blockquote>Error: Loading Plotly timed out.</blockquote>
      ) : (
        <div>Loading... </div>
      ),
    timeout: 10000,
});

const StatsPlot = (props) => {
  const { data, layout, className} = props;
    return (
        <Plotly
            data={[data]}
            layout={layout}
            config={{
                responsive: true,
                displayModeBar: false,
            }}
            className={className}
        />
    )
}

export default StatsPlot;