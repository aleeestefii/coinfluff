declare module 'react-plotly.js' {
    import { Component } from 'react';
    import { PlotParams } from 'react-plotly.js';
  
    class Plot extends Component<PlotParams> {}
    export default Plot;
  }