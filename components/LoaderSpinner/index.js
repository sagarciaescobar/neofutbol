import React, { useEffect } from 'react';
import { spinner , path} from './index.module.css';

export default function SpinnerLoader() {

  return (
    <>
      <svg className={spinner} viewBox="0 0 100 100" height="150px" width="150px">
        <clipPath id="clip">
          <path d="M 77.831872,66.390587 77.287049,66.429503 77.209217,66.779746 77.325965,67.168906 76.119571,68.297468 75.107757,67.324569 V 67.168906 L 74.40727,67.324569 73.823531,68.025056 73.16196,68.842291 73.317624,69.737357 73.045212,70.788088 71.060499,71.683154 70.360012,70.827004 H 69.114703 V 70.593508 L 68.764459,70.632424 68.842291,71.021583 68.063972,71.683154 H 67.791561 L 67.519149,72.578221 V 73.16196 L 67.052158,73.35654 66.157091,72.850632 65.456605,73.006296 64.600454,72.772801 V 72.461473 L 63.432976,72.733885 63.160564,73.784615 62.070918,74.874261 59.580298,75.535832 59.346803,75.691496 58.801979,75.535832 57.478838,76.002823 57.011846,76.664394 55.9222,77.092469 54.949302,77.792956 53.470496,78.104284 52.225186,78.065368 50.473969,78.1432 49.267575,77.559461 46.738039,76.975722 43.352353,76.158487 40.667153,75.496916 40.12233,75.613664 38.838104,74.874261 37.981954,75.185589 37.125803,75.496916 37.164719,76.002823 37.865206,76.664394 V 77.014638 L 38.87702,77.676208 37.125803,77.209217 36.347484,76.664394 33.545537,75.107757 33.156378,74.679681 30.821421,72.889548 30.782505,73.16196 30.120935,72.383641 27.591399,70.087601 26.774164,68.492048 24.984031,66.857578 24.906199,66.079259 23.349562,63.783219 22.88257,61.409347 22.143168,60.125121 V 59.307887 L 21.131353,57.478838 20.508698,53.470496 20.236287,53.198085 20.58653,49.812398 V 47.555274 L 21.170269,43.780428 21.481597,43.352353 21.792924,41.095229 22.726907,39.577507 22.687991,38.87702 23.816553,37.709542 24.633788,36.425316 25.178611,34.401688 26.073677,32.300227 27.163323,30.74359 28.447549,30.276598 V 29.887439 L 29.342616,29.692859 29.731775,29.3037 29.848523,27.630315 30.626842,26.929828 32.84505,24.984031 35.14109,23.427394 37.865206,22.454495 39.499675,21.909672 40.900649,21.63726 41.717883,21.053521 42.107043,21.014605 43.85826,20.275203 47.243946,20.080623 49.345407,20.391951 49.69565,20.236287 50.512885,21.170269 H 51.874943 L 52.925673,21.325933 53.470496,20.703278 54.560142,20.002791 55.649789,19.652548 55.961116,20.002791 58.840895,20.897858 60.436449,21.209185 61.214767,20.936774 63.004901,22.259915 64.172379,22.804739 66.507335,23.583057 67.947224,25.139695 70.087601,26.423921 71.644238,28.214054 75.068841,32.027815 76.158487,34.28494 77.248133,36.347484 78.610191,39.460759 79.310678,42.184875 79.271762,43.585848 79.466342,45.29815 79.38851,48.683836 79.855501,51.096624 79.660921,51.641447 78.99935,57.867997 79.777669,59.813794 79.622005,61.059104 78.493443,63.666471 78.532359,64.055631 79.933333,65.028529 H 80.594904 L 81.567802,65.378773 H 83.396851 L 81.87913,64.600454 81.645634,63.744303 82.112625,63.082732 82.385037,63.238396 82.92986,62.032002 83.863842,60.942356 83.747094,60.125121 84.758909,60.086205 85.264816,60.164037 85.809639,60.553197 86.66579,61.020188 87.016033,60.786692 87.054949,60.280785 86.354462,59.619214 85.770723,59.969458 85.459396,60.202953 85.070236,59.85271 84.836741,60.047289 83.669263,59.502466 83.902758,59.074391 84.291918,58.763064 84.214086,56.622687 83.163355,55.338461 81.567802,54.637974 81.87913,54.209899 H 82.346121 L 82.813112,51.252288 83.046608,50.979876 82.92986,49.617819 83.630347,48.8395 83.863842,47.59419 84.291918,47.321778 84.603245,47.633106 85.109152,47.321778 84.992404,46.854787 84.719993,46.54346 H 84.447581 L 84.253002,46.387796 84.097338,47.282862 83.824926,47.516358 V 46.582376 L 83.007692,46.193216 82.073709,44.364167 81.801298,44.286335 81.178643,40.667153 80.166828,37.748458 79.155014,35.53025 78.104284,33.312041 76.781142,31.40516 75.65258,29.731775 74.601849,28.25297 72.578221,26.151509 71.566406,24.945115 71.332911,25.139695 69.23145,23.116066 68.920123,23.310646 67.207822,22.337747 65.651184,20.820026 64.016715,20.197371 63.549724,19.73038 62.693573,19.691464 62.109834,19.224472 61.175852,18.796397 59.113307,18.368322 57.984745,17.590003 56.700519,17.23976 56.038948,17.395423 53.62616,16.928432 51.213372,16.500357 49.968062,17.200844 47.282862,17.278676 46.193216,17.706751 43.118857,17.901331 39.849919,19.029893 H 39.344011 L 39.149432,19.34122 36.697728,20.353035 35.180006,21.403765 34.557351,21.481597 34.129276,22.143168 31.521908,23.621973 H 31.171665 L 30.587926,24.283544 29.692859,24.945115 28.992372,24.906199 27.708147,25.412106 27.591399,25.76235 25.956929,27.163323 24.906199,27.474651 23.388478,27.046576 23.310646,28.369717 23.07715,28.992372 23.310646,29.459364 23.777637,29.653943 23.816553,31.210581 22.687991,32.922882 22.143168,33.428789 21.987504,34.246024 H 21.325933 L 20.858942,35.102174 20.703278,35.257838 20.469782,36.347484 20.041707,36.853391 20.508698,37.670626 20.236287,38.332197 19.73038,38.293281 19.613632,38.68244 19.963875,38.87702 18.718565,39.538591 17.823499,40.783901 18.251574,42.068127 18.640733,43.352353 18.562902,44.169587 18.368322,45.142486 18.523986,45.687309 17.706751,48.177929 17.862415,48.683836 17.512171,49.462155 17.590003,53.470496 17.940247,55.883284 18.523986,57.245342 18.757481,57.089678 19.263388,58.763064 19.068809,58.801979 19.302304,59.46355 18.913145,59.268971 18.757481,60.475365 19.146641,62.109834 19.963875,62.421161 20.353035,63.549724 22.298831,66.312755 23.388478,68.219636 24.555956,70.321097 26.540668,71.877734 27.085492,72.150146 27.280071,73.084128 27.708147,73.317624 28.719961,74.21269 30.510094,75.65258 32.105647,76.586562 35.024342,78.610191 35.257838,78.376695 38.526777,79.816585 39.966666,80.63382 40.939565,80.555988 41.756799,81.100811 42.457286,80.906231 44.013924,81.87913 45.414897,81.762382 46.504544,82.190457 47.983349,82.423953 49.072995,82.385037 49.189743,82.5407 51.018792,81.801298 52.419766,81.918045 54.988218,81.061895 56.155696,81.295391 56.817267,80.828399 58.685232,80.166828 63.666471,78.571275 65.767932,78.454527 67.98614,76.353067 69.192534,75.185589 69.153618,75.65258 69.464946,75.963907 70.126517,76.119571 70.515676,75.691496 70.47676,75.068841 70.321097,74.679681 69.62061,74.640765 70.243265,74.173774 71.410743,73.239792 71.488575,72.539305 71.177247,72.383641 71.138331,71.605322 73.239792,70.710256 73.862447,71.410743 74.835345,71.527491 75.691496,71.332911 76.041739,71.138331 76.50873,71.449659 76.781142,71.255079 76.236319,70.67134 76.391983,69.581694 76.469814,68.803375 76.119571,68.219636 77.403797,67.207822 H 77.831872 L 78.065368,66.974326 78.104284,66.74083 Z" />
        </clipPath>
        <path
          className={path}
          clip-path="url(#clip)"
          d="M 67.757283,59.202113 C 62.675098,69.009189 50.604962,72.839469 40.797887,67.757283 30.990811,62.675098 27.160531,50.604962 32.242717,40.797887 37.324902,30.990811 49.395038,27.160531 59.202113,32.242717 69.009189,37.324902 72.839469,49.395038 67.757283,59.202113"
        />
      </svg>
    </>
  );
};

