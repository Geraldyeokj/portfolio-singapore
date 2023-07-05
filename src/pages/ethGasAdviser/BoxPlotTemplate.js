import React from 'react';
import { useLocation } from "react-router-dom";
import { MyResponsiveBoxPlot } from '../charts/testBoxPlot';

const BoxPlotTemplate = (props) => {
    const locationState = useLocation();
	console.log("props", locationState);
    const testData = {
        "data": [
            {
                "group": "GAS",
                "value": 94.82
            },
            {
                "group": "GAS",
                "value": 87.44
            },
            {
                "group": "GAS",
                "value": 87.313
            },
            {
                "group": "GAS",
                "value": 87.121
            },
            {
                "group": "GAS",
                "value": 86.515
            },
            {
                "group": "GAS",
                "value": 94.294
            },
            {
                "group": "GAS",
                "value": 87.838
            },
            {
                "group": "GAS",
                "value": 87.868
            },
            {
                "group": "GAS",
                "value": 86.593
            },
            {
                "group": "GAS",
                "value": 86.083
            },
            {
                "group": "GAS",
                "value": 86.331
            },
            {
                "group": "GAS",
                "value": 85.695
            },
            {
                "group": "GAS",
                "value": 86.32900000000001
            },
            {
                "group": "GAS",
                "value": 86.505
            },
            {
                "group": "GAS",
                "value": 86.575
            },
            {
                "group": "GAS",
                "value": 86.055
            },
            {
                "group": "GAS",
                "value": 86.155
            },
            {
                "group": "GAS",
                "value": 87.27199999999999
            },
            {
                "group": "GAS",
                "value": 86.253
            },
            {
                "group": "GAS",
                "value": 86.089
            },
            {
                "group": "GAS",
                "value": 86.10900000000001
            },
            {
                "group": "GAS",
                "value": 86.28399999999999
            },
            {
                "group": "GAS",
                "value": 86.311
            },
            {
                "group": "GAS",
                "value": 86.042
            },
            {
                "group": "GAS",
                "value": 85.93299999999999
            },
            {
                "group": "GAS",
                "value": 85.95400000000001
            },
            {
                "group": "GAS",
                "value": 85.731
            },
            {
                "group": "GAS",
                "value": 102.20400000000001
            },
            {
                "group": "GAS",
                "value": 105.03999999999999
            },
            {
                "group": "GAS",
                "value": 107.14
            },
            {
                "group": "GAS",
                "value": 87.411
            },
            {
                "group": "GAS",
                "value": 86.072
            },
            {
                "group": "GAS",
                "value": 85.004
            },
            {
                "group": "GAS",
                "value": 85.211
            },
            {
                "group": "GAS",
                "value": 84.879
            },
            {
                "group": "GAS",
                "value": 84.564
            },
            {
                "group": "GAS",
                "value": 84.564
            },
            {
                "group": "GAS",
                "value": 84.60900000000001
            },
            {
                "group": "GAS",
                "value": 84.57900000000001
            },
            {
                "group": "GAS",
                "value": 84.649
            },
            {
                "group": "GAS",
                "value": 84.508
            },
            {
                "group": "GAS",
                "value": 84.485
            },
            {
                "group": "GAS",
                "value": 84.55799999999999
            },
            {
                "group": "GAS",
                "value": 84.47
            },
            {
                "group": "GAS",
                "value": 84.52799999999999
            },
            {
                "group": "GAS",
                "value": 84.309
            },
            {
                "group": "GAS",
                "value": 84.31700000000001
            },
            {
                "group": "GAS",
                "value": 87.694
            },
            {
                "group": "GAS",
                "value": 84.423
            },
            {
                "group": "GAS",
                "value": 84.268
            },
            {
                "group": "GAS",
                "value": 83.885
            },
            {
                "group": "GAS",
                "value": 84.025
            },
            {
                "group": "PER",
                "value": 96.2
            },
            {
                "group": "PER",
                "value": 88.982
            },
            {
                "group": "PER",
                "value": 87.504
            },
            {
                "group": "PER",
                "value": 88.126
            },
            {
                "group": "PER",
                "value": 86.524
            },
            {
                "group": "PER",
                "value": 87.28999999999999
            },
            {
                "group": "PER",
                "value": 85.606
            },
            {
                "group": "PER",
                "value": 85.718
            },
            {
                "group": "PER",
                "value": 86.187
            },
            {
                "group": "PER",
                "value": 86.563
            },
            {
                "group": "PER",
                "value": 87.438
            },
            {
                "group": "PER",
                "value": 87.376
            },
            {
                "group": "PER",
                "value": 86.839
            },
            {
                "group": "PER",
                "value": 86.626
            },
            {
                "group": "PER",
                "value": 86.229
            },
            {
                "group": "PER",
                "value": 86.21600000000001
            },
            {
                "group": "PER",
                "value": 86.499
            },
            {
                "group": "PER",
                "value": 86.162
            },
            {
                "group": "PER",
                "value": 86.136
            },
            {
                "group": "PER",
                "value": 87.306
            },
            {
                "group": "PER",
                "value": 86.197
            },
            {
                "group": "PER",
                "value": 86.096
            },
            {
                "group": "PER",
                "value": 86.583
            },
            {
                "group": "PER",
                "value": 85.822
            },
            {
                "group": "PER",
                "value": 85.83500000000001
            },
            {
                "group": "PER",
                "value": 85.81
            },
            {
                "group": "PER",
                "value": 85.615
            },
            {
                "group": "PER",
                "value": 101.911
            },
            {
                "group": "PER",
                "value": 105.59
            },
            {
                "group": "PER",
                "value": 108.25
            },
            {
                "group": "PER",
                "value": 85.708
            },
            {
                "group": "PER",
                "value": 84.251
            },
            {
                "group": "PER",
                "value": 84.133
            },
            {
                "group": "PER",
                "value": 84.101
            },
            {
                "group": "PER",
                "value": 83.77
            },
            {
                "group": "PER",
                "value": 84.106
            },
            {
                "group": "PER",
                "value": 84.515
            },
            {
                "group": "PER",
                "value": 84.082
            },
            {
                "group": "PER",
                "value": 84.28999999999999
            },
            {
                "group": "PER",
                "value": 84.23
            },
            {
                "group": "PER",
                "value": 84.031
            },
            {
                "group": "PER",
                "value": 84.09700000000001
            },
            {
                "group": "PER",
                "value": 84.007
            },
            {
                "group": "PER",
                "value": 83.98400000000001
            },
            {
                "group": "PER",
                "value": 84.781
            },
            {
                "group": "PER",
                "value": 84.78399999999999
            },
            {
                "group": "PER",
                "value": 84.035
            },
            {
                "group": "PER",
                "value": 84.014
            },
            {
                "group": "PER",
                "value": 83.971
            },
            {
                "group": "PER",
                "value": 84.089
            },
            {
                "group": "PER",
                "value": 83.917
            },
            {
                "group": "PER",
                "value": 84.105
            },
            {
                "group": "PER",
                "value": 84.23
            },
            {
                "group": "LEC",
                "value": 86.57300000000001
            },
            {
                "group": "LEC",
                "value": 85.194
            },
            {
                "group": "LEC",
                "value": 84.95400000000001
            },
            {
                "group": "LEC",
                "value": 84.949
            },
            {
                "group": "LEC",
                "value": 84.907
            },
            {
                "group": "LEC",
                "value": 84.9
            },
            {
                "group": "LEC",
                "value": 85.062
            },
            {
                "group": "LEC",
                "value": 85.024
            },
            {
                "group": "LEC",
                "value": 84.987
            },
            {
                "group": "LEC",
                "value": 85.01
            },
            {
                "group": "LEC",
                "value": 84.926
            },
            {
                "group": "LEC",
                "value": 84.682
            },
            {
                "group": "LEC",
                "value": 84.907
            },
            {
                "group": "LEC",
                "value": 84.975
            },
            {
                "group": "LEC",
                "value": 84.938
            },
            {
                "group": "LEC",
                "value": 84.896
            },
            {
                "group": "LEC",
                "value": 84.935
            },
            {
                "group": "LEC",
                "value": 84.9
            },
            {
                "group": "LEC",
                "value": 85.289
            },
            {
                "group": "LEC",
                "value": 88.84700000000001
            },
            {
                "group": "LEC",
                "value": 104.21600000000001
            },
            {
                "group": "LEC",
                "value": 84.499
            },
            {
                "group": "LEC",
                "value": 84.65899999999999
            },
            {
                "group": "LEC",
                "value": 84.121
            },
            {
                "group": "LEC",
                "value": 84.497
            },
            {
                "group": "LEC",
                "value": 83.532
            },
            {
                "group": "LEC",
                "value": 83.858
            },
            {
                "group": "LEC",
                "value": 83.739
            },
            {
                "group": "LEC",
                "value": 99.72399999999999
            },
            {
                "group": "LEC",
                "value": 83.848
            },
            {
                "group": "LEC",
                "value": 107.237
            },
            {
                "group": "LEC",
                "value": 83.865
            },
            {
                "group": "LEC",
                "value": 84.076
            },
            {
                "group": "LEC",
                "value": 83.614
            },
            {
                "group": "LEC",
                "value": 83.779
            },
            {
                "group": "LEC",
                "value": 84.04599999999999
            },
            {
                "group": "LEC",
                "value": 84.023
            },
            {
                "group": "LEC",
                "value": 83.705
            },
            {
                "group": "LEC",
                "value": 83.402
            },
            {
                "group": "LEC",
                "value": 83.777
            },
            {
                "group": "LEC",
                "value": 83.295
            },
            {
                "group": "LEC",
                "value": 83.723
            },
            {
                "group": "LEC",
                "value": 83.27
            },
            {
                "group": "LEC",
                "value": 83.273
            },
            {
                "group": "LEC",
                "value": 83.331
            },
            {
                "group": "LEC",
                "value": 83.349
            },
            {
                "group": "LEC",
                "value": 83.009
            },
            {
                "group": "LEC",
                "value": 83.205
            },
            {
                "group": "LEC",
                "value": 83.166
            },
            {
                "group": "LEC",
                "value": 83.679
            },
            {
                "group": "LEC",
                "value": 83.145
            },
            {
                "group": "LEC",
                "value": 83.426
            },
            {
                "group": "LEC",
                "value": 83.72200000000001
            },
            {
                "group": "STR",
                "value": 91.372
            },
            {
                "group": "STR",
                "value": 86.502
            },
            {
                "group": "STR",
                "value": 86.248
            },
            {
                "group": "STR",
                "value": 86.101
            },
            {
                "group": "STR",
                "value": 86.05
            },
            {
                "group": "STR",
                "value": 99.281
            },
            {
                "group": "STR",
                "value": 86.753
            },
            {
                "group": "STR",
                "value": 86.441
            },
            {
                "group": "STR",
                "value": 86.362
            },
            {
                "group": "STR",
                "value": 86.084
            },
            {
                "group": "STR",
                "value": 86.703
            },
            {
                "group": "STR",
                "value": 86.451
            },
            {
                "group": "STR",
                "value": 86.869
            },
            {
                "group": "STR",
                "value": 86.872
            },
            {
                "group": "STR",
                "value": 91.28
            },
            {
                "group": "STR",
                "value": 101.299
            },
            {
                "group": "STR",
                "value": 86.18299999999999
            },
            {
                "group": "STR",
                "value": 86.007
            },
            {
                "group": "STR",
                "value": 86.24
            },
            {
                "group": "STR",
                "value": 86.09
            },
            {
                "group": "STR",
                "value": 85.949
            },
            {
                "group": "STR",
                "value": 90.487
            },
            {
                "group": "STR",
                "value": 105.00399999999999
            },
            {
                "group": "STR",
                "value": 85.416
            },
            {
                "group": "STR",
                "value": 84.887
            },
            {
                "group": "STR",
                "value": 84.589
            },
            {
                "group": "STR",
                "value": 84.725
            },
            {
                "group": "STR",
                "value": 101.666
            },
            {
                "group": "STR",
                "value": 84.52199999999999
            },
            {
                "group": "STR",
                "value": 109.239
            },
            {
                "group": "STR",
                "value": 84.16499999999999
            },
            {
                "group": "STR",
                "value": 84.346
            },
            {
                "group": "STR",
                "value": 84.374
            },
            {
                "group": "STR",
                "value": 84.34100000000001
            },
            {
                "group": "STR",
                "value": 84.28399999999999
            },
            {
                "group": "STR",
                "value": 84.348
            },
            {
                "group": "STR",
                "value": 84.28999999999999
            },
            {
                "group": "STR",
                "value": 84.412
            },
            {
                "group": "STR",
                "value": 84.225
            },
            {
                "group": "STR",
                "value": 84.463
            },
            {
                "group": "STR",
                "value": 87.82
            },
            {
                "group": "STR",
                "value": 86.899
            },
            {
                "group": "STR",
                "value": 84.758
            },
            {
                "group": "STR",
                "value": 84.46600000000001
            },
            {
                "group": "STR",
                "value": 84.542
            },
            {
                "group": "STR",
                "value": 84.45
            },
            {
                "group": "STR",
                "value": 84.612
            },
            {
                "group": "STR",
                "value": 84.67099999999999
            },
            {
                "group": "STR",
                "value": 84.855
            },
            {
                "group": "STR",
                "value": 84.55199999999999
            },
            {
                "group": "STR",
                "value": 84.623
            },
            {
                "group": "STR",
                "value": 84.614
            },
            {
                "group": "MAG",
                "value": 93.363
            },
            {
                "group": "MAG",
                "value": 87.354
            },
            {
                "group": "MAG",
                "value": 86.926
            },
            {
                "group": "MAG",
                "value": 86.242
            },
            {
                "group": "MAG",
                "value": 86.45
            },
            {
                "group": "MAG",
                "value": 88.303
            },
            {
                "group": "MAG",
                "value": 86.476
            },
            {
                "group": "MAG",
                "value": 88.385
            },
            {
                "group": "MAG",
                "value": 87.726
            },
            {
                "group": "MAG",
                "value": 86.791
            },
            {
                "group": "MAG",
                "value": 87.387
            },
            {
                "group": "MAG",
                "value": 87.161
            },
            {
                "group": "MAG",
                "value": 86.775
            },
            {
                "group": "MAG",
                "value": 86.562
            },
            {
                "group": "MAG",
                "value": 86.469
            },
            {
                "group": "MAG",
                "value": 86.225
            },
            {
                "group": "MAG",
                "value": 86.322
            },
            {
                "group": "MAG",
                "value": 86.377
            },
            {
                "group": "MAG",
                "value": 86.287
            },
            {
                "group": "MAG",
                "value": 91.215
            },
            {
                "group": "MAG",
                "value": 105.229
            },
            {
                "group": "MAG",
                "value": 85.305
            },
            {
                "group": "MAG",
                "value": 85.53999999999999
            },
            {
                "group": "MAG",
                "value": 85.747
            },
            {
                "group": "MAG",
                "value": 85.261
            },
            {
                "group": "MAG",
                "value": 85.535
            },
            {
                "group": "MAG",
                "value": 85.48400000000001
            },
            {
                "group": "MAG",
                "value": 102.337
            },
            {
                "group": "MAG",
                "value": 85.406
            },
            {
                "group": "MAG",
                "value": 107.053
            },
            {
                "group": "MAG",
                "value": 90.114
            },
            {
                "group": "MAG",
                "value": 85.249
            },
            {
                "group": "MAG",
                "value": 85.568
            },
            {
                "group": "MAG",
                "value": 94.77199999999999
            },
            {
                "group": "MAG",
                "value": 105.637
            },
            {
                "group": "MAG",
                "value": 84.496
            },
            {
                "group": "MAG",
                "value": 84.908
            },
            {
                "group": "MAG",
                "value": 84.443
            },
            {
                "group": "MAG",
                "value": 84.97200000000001
            },
            {
                "group": "MAG",
                "value": 84.899
            },
            {
                "group": "MAG",
                "value": 85.431
            },
            {
                "group": "MAG",
                "value": 85.411
            },
            {
                "group": "MAG",
                "value": 92.919
            },
            {
                "group": "ALB",
                "value": 92.337
            },
            {
                "group": "ALB",
                "value": 86.843
            },
            {
                "group": "ALB",
                "value": 89.10300000000001
            },
            {
                "group": "ALB",
                "value": 86.238
            },
            {
                "group": "ALB",
                "value": 86.252
            },
            {
                "group": "ALB",
                "value": 88.691
            },
            {
                "group": "ALB",
                "value": 86.249
            },
            {
                "group": "ALB",
                "value": 86.492
            },
            {
                "group": "ALB",
                "value": 86.011
            },
            {
                "group": "ALB",
                "value": 85.555
            },
            {
                "group": "ALB",
                "value": 85.724
            },
            {
                "group": "ALB",
                "value": 85.387
            },
            {
                "group": "ALB",
                "value": 85.6
            },
            {
                "group": "ALB",
                "value": 85.846
            },
            {
                "group": "ALB",
                "value": 85.212
            },
            {
                "group": "ALB",
                "value": 85.594
            },
            {
                "group": "ALB",
                "value": 85.625
            },
            {
                "group": "ALB",
                "value": 85.958
            },
            {
                "group": "ALB",
                "value": 85.52799999999999
            },
            {
                "group": "ALB",
                "value": 85.761
            },
            {
                "group": "ALB",
                "value": 85.977
            },
            {
                "group": "ALB",
                "value": 85.97800000000001
            },
            {
                "group": "ALB",
                "value": 86.101
            },
            {
                "group": "ALB",
                "value": 85.886
            },
            {
                "group": "ALB",
                "value": 86.27799999999999
            },
            {
                "group": "ALB",
                "value": 90.275
            },
            {
                "group": "ALB",
                "value": 110.751
            },
            {
                "group": "ALB",
                "value": 102.644
            },
            {
                "group": "ALB",
                "value": 85.364
            },
            {
                "group": "ALB",
                "value": 103.888
            },
            {
                "group": "ALB",
                "value": 89.542
            },
            {
                "group": "ALB",
                "value": 84.714
            },
            {
                "group": "ALB",
                "value": 84.411
            },
            {
                "group": "ALB",
                "value": 84.396
            },
            {
                "group": "ALB",
                "value": 83.94800000000001
            },
            {
                "group": "ALB",
                "value": 83.969
            },
            {
                "group": "ALB",
                "value": 83.861
            },
            {
                "group": "ALB",
                "value": 83.77
            },
            {
                "group": "ALB",
                "value": 83.867
            },
            {
                "group": "ALB",
                "value": 83.61
            },
            {
                "group": "ALB",
                "value": 83.596
            },
            {
                "group": "ALB",
                "value": 83.672
            },
            {
                "group": "ALB",
                "value": 83.52
            },
            {
                "group": "ALB",
                "value": 83.435
            },
            {
                "group": "ALB",
                "value": 83.364
            },
            {
                "group": "ALB",
                "value": 83.39
            },
            {
                "group": "ALB",
                "value": 83.46600000000001
            },
            {
                "group": "ALB",
                "value": 83.804
            },
            {
                "group": "ALB",
                "value": 83.756
            },
            {
                "group": "ALB",
                "value": 83.803
            },
            {
                "group": "ALB",
                "value": 83.6
            },
            {
                "group": "ALB",
                "value": 83.654
            },
            {
                "group": "ALB",
                "value": 83.684
            },
            {
                "group": "KVY",
                "value": 93.839
            },
            {
                "group": "KVY",
                "value": 87.262
            },
            {
                "group": "KVY",
                "value": 87.708
            },
            {
                "group": "KVY",
                "value": 86.331
            },
            {
                "group": "KVY",
                "value": 86.412
            },
            {
                "group": "KVY",
                "value": 88.3
            },
            {
                "group": "KVY",
                "value": 86.374
            },
            {
                "group": "KVY",
                "value": 87.59100000000001
            },
            {
                "group": "KVY",
                "value": 85.931
            },
            {
                "group": "KVY",
                "value": 86.005
            },
            {
                "group": "KVY",
                "value": 85.996
            },
            {
                "group": "KVY",
                "value": 85.899
            },
            {
                "group": "KVY",
                "value": 85.968
            },
            {
                "group": "KVY",
                "value": 86.087
            },
            {
                "group": "KVY",
                "value": 85.836
            },
            {
                "group": "KVY",
                "value": 85.936
            },
            {
                "group": "KVY",
                "value": 86.045
            },
            {
                "group": "KVY",
                "value": 86.04599999999999
            },
            {
                "group": "KVY",
                "value": 85.77199999999999
            },
            {
                "group": "KVY",
                "value": 86.101
            },
            {
                "group": "KVY",
                "value": 86.062
            },
            {
                "group": "KVY",
                "value": 85.993
            },
            {
                "group": "KVY",
                "value": 85.789
            },
            {
                "group": "KVY",
                "value": 86.01
            },
            {
                "group": "KVY",
                "value": 85.949
            },
            {
                "group": "KVY",
                "value": 86.038
            },
            {
                "group": "KVY",
                "value": 86.188
            },
            {
                "group": "KVY",
                "value": 98.338
            },
            {
                "group": "KVY",
                "value": 106.39099999999999
            },
            {
                "group": "KVY",
                "value": -1
            },
            {
                "group": "HUL",
                "value": 89.232
            },
            {
                "group": "HUL",
                "value": 86.92
            },
            {
                "group": "HUL",
                "value": 86.026
            },
            {
                "group": "HUL",
                "value": 86.031
            },
            {
                "group": "HUL",
                "value": 86.743
            },
            {
                "group": "HUL",
                "value": 86.331
            },
            {
                "group": "HUL",
                "value": 86.09
            },
            {
                "group": "HUL",
                "value": 86.133
            },
            {
                "group": "HUL",
                "value": 86.024
            },
            {
                "group": "HUL",
                "value": 85.934
            },
            {
                "group": "HUL",
                "value": 85.681
            },
            {
                "group": "HUL",
                "value": 85.713
            },
            {
                "group": "HUL",
                "value": 85.721
            },
            {
                "group": "HUL",
                "value": 85.806
            },
            {
                "group": "HUL",
                "value": 85.67099999999999
            },
            {
                "group": "HUL",
                "value": 85.539
            },
            {
                "group": "HUL",
                "value": 85.565
            },
            {
                "group": "HUL",
                "value": 85.78999999999999
            },
            {
                "group": "HUL",
                "value": 85.58500000000001
            },
            {
                "group": "HUL",
                "value": 85.563
            },
            {
                "group": "HUL",
                "value": 85.797
            },
            {
                "group": "HUL",
                "value": 85.93
            },
            {
                "group": "HUL",
                "value": 87.736
            },
            {
                "group": "HUL",
                "value": 85.965
            },
            {
                "group": "HUL",
                "value": 85.862
            },
            {
                "group": "HUL",
                "value": 85.758
            },
            {
                "group": "HUL",
                "value": 85.726
            },
            {
                "group": "HUL",
                "value": 87.756
            },
            {
                "group": "HUL",
                "value": 103.757
            },
            {
                "group": "HUL",
                "value": 120.021
            },
            {
                "group": "HUL",
                "value": 93.76599999999999
            },
            {
                "group": "HUL",
                "value": 85.18
            },
            {
                "group": "HUL",
                "value": 85.322
            },
            {
                "group": "HUL",
                "value": 85.185
            },
            {
                "group": "HUL",
                "value": 84.757
            },
            {
                "group": "HUL",
                "value": 84.768
            },
            {
                "group": "HUL",
                "value": 84.89099999999999
            },
            {
                "group": "HUL",
                "value": 84.73
            },
            {
                "group": "HUL",
                "value": 84.291
            },
            {
                "group": "HUL",
                "value": 84.361
            },
            {
                "group": "HUL",
                "value": 84.351
            },
            {
                "group": "HUL",
                "value": 84.093
            },
            {
                "group": "HUL",
                "value": 83.813
            },
            {
                "group": "HUL",
                "value": 83.878
            },
            {
                "group": "HUL",
                "value": 83.943
            },
            {
                "group": "HUL",
                "value": 84.018
            },
            {
                "group": "HUL",
                "value": 84.007
            },
            {
                "group": "HUL",
                "value": 84.132
            },
            {
                "group": "HUL",
                "value": 84.061
            },
            {
                "group": "HUL",
                "value": 83.83500000000001
            },
            {
                "group": "HUL",
                "value": 83.742
            },
            {
                "group": "HUL",
                "value": 83.65899999999999
            },
            {
                "group": "HUL",
                "value": 83.64099999999999
            },
            {
                "group": "RIC",
                "value": 90.436
            },
            {
                "group": "RIC",
                "value": 86.483
            },
            {
                "group": "RIC",
                "value": 86.108
            },
            {
                "group": "RIC",
                "value": 85.549
            },
            {
                "group": "RIC",
                "value": 85.345
            },
            {
                "group": "RIC",
                "value": 86.246
            },
            {
                "group": "RIC",
                "value": 86.043
            },
            {
                "group": "RIC",
                "value": 85.887
            },
            {
                "group": "RIC",
                "value": 85.907
            },
            {
                "group": "RIC",
                "value": 85.695
            },
            {
                "group": "RIC",
                "value": 85.686
            },
            {
                "group": "RIC",
                "value": 85.705
            },
            {
                "group": "RIC",
                "value": 85.55799999999999
            },
            {
                "group": "RIC",
                "value": 85.509
            },
            {
                "group": "RIC",
                "value": 85.536
            },
            {
                "group": "RIC",
                "value": 85.426
            },
            {
                "group": "RIC",
                "value": 85.498
            },
            {
                "group": "RIC",
                "value": 85.327
            },
            {
                "group": "RIC",
                "value": 85.803
            },
            {
                "group": "RIC",
                "value": 85.538
            },
            {
                "group": "RIC",
                "value": 85.451
            },
            {
                "group": "RIC",
                "value": 85.42699999999999
            },
            {
                "group": "RIC",
                "value": 85.381
            },
            {
                "group": "RIC",
                "value": 85.47
            },
            {
                "group": "RIC",
                "value": 85.654
            },
            {
                "group": "RIC",
                "value": 87.263
            },
            {
                "group": "RIC",
                "value": 85.396
            },
            {
                "group": "RIC",
                "value": 85.763
            },
            {
                "group": "RIC",
                "value": 100.158
            },
            {
                "group": "RIC",
                "value": 90.457
            },
            {
                "group": "RIC",
                "value": 116.981
            },
            {
                "group": "RIC",
                "value": 84.432
            },
            {
                "group": "RIC",
                "value": 85.111
            },
            {
                "group": "RIC",
                "value": 85.368
            },
            {
                "group": "RIC",
                "value": 85.03399999999999
            },
            {
                "group": "RIC",
                "value": 85.193
            },
            {
                "group": "RIC",
                "value": 85.039
            },
            {
                "group": "RIC",
                "value": 84.904
            },
            {
                "group": "RIC",
                "value": 85.012
            },
            {
                "group": "RIC",
                "value": 84.864
            },
            {
                "group": "RIC",
                "value": 84.765
            },
            {
                "group": "RIC",
                "value": 84.667
            },
            {
                "group": "RIC",
                "value": 84.635
            },
            {
                "group": "RIC",
                "value": 84.223
            },
            {
                "group": "RIC",
                "value": 84.504
            },
            {
                "group": "RIC",
                "value": 85.363
            },
            {
                "group": "RIC",
                "value": 84.158
            },
            {
                "group": "RIC",
                "value": 83.524
            },
            {
                "group": "RIC",
                "value": 83.803
            },
            {
                "group": "RIC",
                "value": 83.919
            },
            {
                "group": "RIC",
                "value": 83.94800000000001
            },
            {
                "group": "RIC",
                "value": 83.562
            },
            {
                "group": "RIC",
                "value": 83.46600000000001
            },
            {
                "group": "VER",
                "value": 101.132
            },
            {
                "group": "VER",
                "value": 111.39500000000001
            },
            {
                "group": "VER",
                "value": 84.532
            },
            {
                "group": "VER",
                "value": 84.662
            },
            {
                "group": "VER",
                "value": 84.57900000000001
            },
            {
                "group": "VER",
                "value": 85.029
            },
            {
                "group": "VER",
                "value": 84.798
            },
            {
                "group": "VER",
                "value": 85.019
            },
            {
                "group": "VER",
                "value": 85.075
            },
            {
                "group": "VER",
                "value": 86.396
            },
            {
                "group": "VER",
                "value": 86.283
            },
            {
                "group": "VER",
                "value": 84.988
            },
            {
                "group": "VER",
                "value": 85.412
            },
            {
                "group": "VER",
                "value": 85.809
            },
            {
                "group": "VER",
                "value": 85.126
            },
            {
                "group": "VER",
                "value": 84.852
            },
            {
                "group": "VER",
                "value": 85.01599999999999
            },
            {
                "group": "VER",
                "value": 85.15299999999999
            },
            {
                "group": "VER",
                "value": 85.508
            },
            {
                "group": "VER",
                "value": 85.997
            },
            {
                "group": "VER",
                "value": 86.456
            },
            {
                "group": "VER",
                "value": 85.57900000000001
            },
            {
                "group": "VER",
                "value": 86.19200000000001
            },
            {
                "group": "VER",
                "value": 86.178
            },
            {
                "group": "VER",
                "value": 85.723
            },
            {
                "group": "VER",
                "value": 86.236
            },
            {
                "group": "VER",
                "value": 89.988
            },
            {
                "group": "VER",
                "value": 121.95
            },
            {
                "group": "VER",
                "value": 84.413
            },
            {
                "group": "VER",
                "value": 106.97800000000001
            },
            {
                "group": "VER",
                "value": 86.95
            },
            {
                "group": "VER",
                "value": 84.896
            },
            {
                "group": "VER",
                "value": 85.413
            },
            {
                "group": "VER",
                "value": 84.447
            },
            {
                "group": "VER",
                "value": 83.338
            },
            {
                "group": "VER",
                "value": 83.437
            },
            {
                "group": "VER",
                "value": 83.414
            },
            {
                "group": "VER",
                "value": 83.569
            },
            {
                "group": "VER",
                "value": 83.407
            },
            {
                "group": "VER",
                "value": 83.85900000000001
            },
            {
                "group": "VER",
                "value": 83.143
            },
            {
                "group": "VER",
                "value": 83.446
            },
            {
                "group": "VER",
                "value": 83.607
            },
            {
                "group": "VER",
                "value": 83.55199999999999
            },
            {
                "group": "VER",
                "value": 84.786
            },
            {
                "group": "VER",
                "value": 84.881
            },
            {
                "group": "VER",
                "value": 84.104
            },
            {
                "group": "VER",
                "value": 84.17699999999999
            },
            {
                "group": "VER",
                "value": 84.037
            },
            {
                "group": "VER",
                "value": 83.988
            },
            {
                "group": "VER",
                "value": 83.756
            },
            {
                "group": "VER",
                "value": 84.121
            },
            {
                "group": "VER",
                "value": 84.375
            },
            {
                "group": "NOR",
                "value": 96.586
            },
            {
                "group": "NOR",
                "value": 89.069
            },
            {
                "group": "NOR",
                "value": 88.408
            },
            {
                "group": "NOR",
                "value": 88.173
            },
            {
                "group": "NOR",
                "value": 88.004
            },
            {
                "group": "NOR",
                "value": 87.996
            },
            {
                "group": "NOR",
                "value": 87.731
            },
            {
                "group": "NOR",
                "value": 86.333
            },
            {
                "group": "NOR",
                "value": 86.309
            },
            {
                "group": "NOR",
                "value": 86.282
            },
            {
                "group": "NOR",
                "value": 86.307
            },
            {
                "group": "NOR",
                "value": 85.953
            },
            {
                "group": "NOR",
                "value": 85.91
            },
            {
                "group": "NOR",
                "value": 86.39099999999999
            },
            {
                "group": "NOR",
                "value": 86.47
            },
            {
                "group": "NOR",
                "value": 86.04599999999999
            },
            {
                "group": "NOR",
                "value": 86.102
            },
            {
                "group": "NOR",
                "value": 86.181
            },
            {
                "group": "NOR",
                "value": 85.877
            },
            {
                "group": "NOR",
                "value": 85.976
            },
            {
                "group": "NOR",
                "value": 86.64099999999999
            },
            {
                "group": "NOR",
                "value": 87.422
            },
            {
                "group": "NOR",
                "value": 90.637
            },
            {
                "group": "NOR",
                "value": 105.832
            },
            {
                "group": "NOR",
                "value": 85.082
            },
            {
                "group": "NOR",
                "value": 84.92099999999999
            },
            {
                "group": "NOR",
                "value": 85.07900000000001
            },
            {
                "group": "NOR",
                "value": 101.443
            },
            {
                "group": "NOR",
                "value": 84.696
            },
            {
                "group": "NOR",
                "value": 107.664
            },
            {
                "group": "NOR",
                "value": 86.986
            },
            {
                "group": "NOR",
                "value": 85.274
            },
            {
                "group": "NOR",
                "value": 85.434
            },
            {
                "group": "NOR",
                "value": 84.589
            },
            {
                "group": "NOR",
                "value": 85.595
            },
            {
                "group": "NOR",
                "value": 84.76
            },
            {
                "group": "NOR",
                "value": 84.38
            },
            {
                "group": "NOR",
                "value": 84.373
            },
            {
                "group": "NOR",
                "value": 84.712
            },
            {
                "group": "NOR",
                "value": 84.514
            },
            {
                "group": "NOR",
                "value": 84.5
            },
            {
                "group": "NOR",
                "value": 84.485
            },
            {
                "group": "NOR",
                "value": 84.265
            },
            {
                "group": "NOR",
                "value": 84.095
            },
            {
                "group": "NOR",
                "value": 84.42699999999999
            },
            {
                "group": "NOR",
                "value": 84.35900000000001
            },
            {
                "group": "NOR",
                "value": 84.238
            },
            {
                "group": "NOR",
                "value": 84.392
            },
            {
                "group": "NOR",
                "value": 84.379
            },
            {
                "group": "NOR",
                "value": 87.441
            },
            {
                "group": "NOR",
                "value": 84.322
            },
            {
                "group": "NOR",
                "value": 84.044
            },
            {
                "group": "HAM",
                "value": 87.298
            },
            {
                "group": "HAM",
                "value": 85.43299999999999
            },
            {
                "group": "HAM",
                "value": 85.0
            },
            {
                "group": "HAM",
                "value": 85.151
            },
            {
                "group": "HAM",
                "value": 85.23400000000001
            },
            {
                "group": "HAM",
                "value": 84.713
            },
            {
                "group": "HAM",
                "value": 84.91499999999999
            },
            {
                "group": "HAM",
                "value": 84.892
            },
            {
                "group": "HAM",
                "value": 85.122
            },
            {
                "group": "HAM",
                "value": 84.857
            },
            {
                "group": "HAM",
                "value": 84.999
            },
            {
                "group": "HAM",
                "value": 84.814
            },
            {
                "group": "HAM",
                "value": 85.021
            },
            {
                "group": "HAM",
                "value": 85.156
            },
            {
                "group": "HAM",
                "value": 84.97200000000001
            },
            {
                "group": "HAM",
                "value": 84.769
            },
            {
                "group": "HAM",
                "value": 84.888
            },
            {
                "group": "HAM",
                "value": 85.041
            },
            {
                "group": "HAM",
                "value": 89.456
            },
            {
                "group": "HAM",
                "value": 103.243
            },
            {
                "group": "HAM",
                "value": 84.723
            },
            {
                "group": "HAM",
                "value": 84.196
            },
            {
                "group": "HAM",
                "value": 84.924
            },
            {
                "group": "HAM",
                "value": 84.258
            },
            {
                "group": "HAM",
                "value": 84.22
            },
            {
                "group": "HAM",
                "value": 83.91499999999999
            },
            {
                "group": "HAM",
                "value": 83.724
            },
            {
                "group": "HAM",
                "value": 83.834
            },
            {
                "group": "HAM",
                "value": 99.524
            },
            {
                "group": "HAM",
                "value": 84.425
            },
            {
                "group": "HAM",
                "value": 106.845
            },
            {
                "group": "HAM",
                "value": 83.592
            },
            {
                "group": "HAM",
                "value": 84.164
            },
            {
                "group": "HAM",
                "value": 83.711
            },
            {
                "group": "HAM",
                "value": 83.65899999999999
            },
            {
                "group": "HAM",
                "value": 84.127
            },
            {
                "group": "HAM",
                "value": 84.027
            },
            {
                "group": "HAM",
                "value": 83.51
            },
            {
                "group": "HAM",
                "value": 83.756
            },
            {
                "group": "HAM",
                "value": 83.89099999999999
            },
            {
                "group": "HAM",
                "value": 83.36
            },
            {
                "group": "HAM",
                "value": 86.02799999999999
            },
            {
                "group": "HAM",
                "value": 83.813
            },
            {
                "group": "HAM",
                "value": 83.961
            },
            {
                "group": "HAM",
                "value": 83.574
            },
            {
                "group": "HAM",
                "value": 83.79599999999999
            },
            {
                "group": "HAM",
                "value": 84.125
            },
            {
                "group": "HAM",
                "value": 84.101
            },
            {
                "group": "HAM",
                "value": 88.687
            },
            {
                "group": "HAM",
                "value": 104.537
            },
            {
                "group": "HAM",
                "value": 81.779
            },
            {
                "group": "HAM",
                "value": 84.122
            },
            {
                "group": "HAM",
                "value": 85.982
            },
            {
                "group": "VET",
                "value": 89.463
            },
            {
                "group": "VET",
                "value": 85.527
            },
            {
                "group": "VET",
                "value": 85.122
            },
            {
                "group": "VET",
                "value": 84.93
            },
            {
                "group": "VET",
                "value": 85.118
            },
            {
                "group": "VET",
                "value": 111.038
            },
            {
                "group": "VET",
                "value": 114.863
            },
            {
                "group": "VET",
                "value": 85.412
            },
            {
                "group": "VET",
                "value": 85.08500000000001
            },
            {
                "group": "VET",
                "value": 84.982
            },
            {
                "group": "VET",
                "value": 84.854
            },
            {
                "group": "VET",
                "value": 89.446
            },
            {
                "group": "VET",
                "value": 112.76599999999999
            },
            {
                "group": "VET",
                "value": 85.07
            },
            {
                "group": "VET",
                "value": 85.179
            },
            {
                "group": "VET",
                "value": 85.088
            },
            {
                "group": "VET",
                "value": 85.61
            },
            {
                "group": "VET",
                "value": 84.924
            },
            {
                "group": "VET",
                "value": 84.857
            },
            {
                "group": "VET",
                "value": 84.793
            },
            {
                "group": "VET",
                "value": 85.883
            },
            {
                "group": "VET",
                "value": 85.508
            },
            {
                "group": "VET",
                "value": 85.30799999999999
            },
            {
                "group": "VET",
                "value": 85.69200000000001
            },
            {
                "group": "VET",
                "value": 84.773
            },
            {
                "group": "VET",
                "value": 84.719
            },
            {
                "group": "VET",
                "value": 84.786
            },
            {
                "group": "VET",
                "value": 101.176
            },
            {
                "group": "VET",
                "value": 85.18
            },
            {
                "group": "VET",
                "value": 108.076
            },
            {
                "group": "VET",
                "value": 85.64699999999999
            },
            {
                "group": "VET",
                "value": 87.703
            },
            {
                "group": "VET",
                "value": 85.32
            },
            {
                "group": "VET",
                "value": 84.60300000000001
            },
            {
                "group": "VET",
                "value": 86.686
            },
            {
                "group": "VET",
                "value": 84.383
            },
            {
                "group": "VET",
                "value": 84.343
            },
            {
                "group": "VET",
                "value": 84.549
            },
            {
                "group": "VET",
                "value": 84.982
            },
            {
                "group": "VET",
                "value": 85.743
            },
            {
                "group": "VET",
                "value": 89.492
            },
            {
                "group": "VET",
                "value": 104.643
            },
            {
                "group": "VET",
                "value": 83.45400000000001
            },
            {
                "group": "VET",
                "value": 84.031
            },
            {
                "group": "VET",
                "value": 83.307
            },
            {
                "group": "VET",
                "value": 83.587
            },
            {
                "group": "VET",
                "value": 83.30199999999999
            },
            {
                "group": "VET",
                "value": 83.255
            },
            {
                "group": "VET",
                "value": 83.025
            },
            {
                "group": "VET",
                "value": 82.799
            },
            {
                "group": "VET",
                "value": 82.958
            },
            {
                "group": "VET",
                "value": 82.912
            },
            {
                "group": "SAI",
                "value": 91.738
            },
            {
                "group": "SAI",
                "value": 86.935
            },
            {
                "group": "SAI",
                "value": 87.6
            },
            {
                "group": "SAI",
                "value": 85.858
            },
            {
                "group": "SAI",
                "value": 85.72800000000001
            },
            {
                "group": "SAI",
                "value": 86.85
            },
            {
                "group": "SAI",
                "value": 85.745
            },
            {
                "group": "SAI",
                "value": 85.828
            },
            {
                "group": "SAI",
                "value": 86.042
            },
            {
                "group": "SAI",
                "value": 85.637
            },
            {
                "group": "SAI",
                "value": 85.879
            },
            {
                "group": "SAI",
                "value": 86.004
            },
            {
                "group": "SAI",
                "value": 85.84100000000001
            },
            {
                "group": "SAI",
                "value": 85.944
            },
            {
                "group": "SAI",
                "value": 86.235
            },
            {
                "group": "SAI",
                "value": 85.862
            },
            {
                "group": "SAI",
                "value": 86.043
            },
            {
                "group": "SAI",
                "value": 86.19
            },
            {
                "group": "SAI",
                "value": 86.081
            },
            {
                "group": "SAI",
                "value": 86.342
            },
            {
                "group": "SAI",
                "value": 86.314
            },
            {
                "group": "SAI",
                "value": 86.116
            },
            {
                "group": "SAI",
                "value": 86.123
            },
            {
                "group": "SAI",
                "value": 85.955
            },
            {
                "group": "SAI",
                "value": 86.068
            },
            {
                "group": "SAI",
                "value": 86.04599999999999
            },
            {
                "group": "SAI",
                "value": 90.422
            },
            {
                "group": "RUS",
                "value": 95.318
            },
            {
                "group": "RUS",
                "value": 88.634
            },
            {
                "group": "RUS",
                "value": 88.19
            },
            {
                "group": "RUS",
                "value": 89.196
            },
            {
                "group": "RUS",
                "value": 89.715
            },
            {
                "group": "RUS",
                "value": 89.352
            },
            {
                "group": "RUS",
                "value": 88.102
            },
            {
                "group": "RUS",
                "value": 87.93299999999999
            },
            {
                "group": "RUS",
                "value": 88.485
            },
            {
                "group": "RUS",
                "value": 86.844
            },
            {
                "group": "RUS",
                "value": 88.076
            },
            {
                "group": "RUS",
                "value": 86.58
            },
            {
                "group": "RUS",
                "value": 87.045
            },
            {
                "group": "RUS",
                "value": 86.899
            },
            {
                "group": "RUS",
                "value": 87.121
            },
            {
                "group": "RUS",
                "value": 86.90899999999999
            },
            {
                "group": "RUS",
                "value": 86.613
            },
            {
                "group": "RUS",
                "value": 86.961
            },
            {
                "group": "RUS",
                "value": 86.84100000000001
            },
            {
                "group": "RUS",
                "value": 87.134
            },
            {
                "group": "RUS",
                "value": 86.925
            },
            {
                "group": "RUS",
                "value": 86.425
            },
            {
                "group": "RUS",
                "value": 90.435
            },
            {
                "group": "RUS",
                "value": 105.50200000000001
            },
            {
                "group": "RUS",
                "value": 86.739
            },
            {
                "group": "RUS",
                "value": 85.312
            },
            {
                "group": "RUS",
                "value": 85.235
            },
            {
                "group": "RUS",
                "value": 101.669
            },
            {
                "group": "RUS",
                "value": 85.928
            },
            {
                "group": "RUS",
                "value": 108.162
            },
            {
                "group": "RUS",
                "value": 85.559
            },
            {
                "group": "RUS",
                "value": 88.18299999999999
            },
            {
                "group": "RUS",
                "value": 87.199
            },
            {
                "group": "RUS",
                "value": 86.569
            },
            {
                "group": "RUS",
                "value": 85.3
            },
            {
                "group": "RUS",
                "value": 84.991
            },
            {
                "group": "RUS",
                "value": 85.291
            },
            {
                "group": "RUS",
                "value": 85.071
            },
            {
                "group": "RUS",
                "value": 85.057
            },
            {
                "group": "RUS",
                "value": 84.934
            },
            {
                "group": "RUS",
                "value": 84.876
            },
            {
                "group": "RUS",
                "value": 85.032
            },
            {
                "group": "RUS",
                "value": 85.24
            },
            {
                "group": "RUS",
                "value": 84.974
            },
            {
                "group": "RUS",
                "value": 85.30799999999999
            },
            {
                "group": "RUS",
                "value": 85.197
            },
            {
                "group": "RUS",
                "value": 87.134
            },
            {
                "group": "RUS",
                "value": 85.45
            },
            {
                "group": "RUS",
                "value": 85.741
            },
            {
                "group": "RUS",
                "value": 85.393
            },
            {
                "group": "RUS",
                "value": 84.842
            },
            {
                "group": "RUS",
                "value": 85.814
            },
            {
                "group": "RAI",
                "value": 97.44200000000001
            },
            {
                "group": "RAI",
                "value": 88.92
            },
            {
                "group": "RAI",
                "value": 87.777
            },
            {
                "group": "RAI",
                "value": 88.612
            },
            {
                "group": "RAI",
                "value": 88.658
            },
            {
                "group": "RAI",
                "value": 87.787
            },
            {
                "group": "RAI",
                "value": 88.554
            },
            {
                "group": "RAI",
                "value": 88.326
            },
            {
                "group": "RAI",
                "value": 86.205
            },
            {
                "group": "RAI",
                "value": 86.406
            },
            {
                "group": "RAI",
                "value": 86.825
            },
            {
                "group": "RAI",
                "value": 86.243
            },
            {
                "group": "RAI",
                "value": 86.672
            },
            {
                "group": "RAI",
                "value": 86.477
            },
            {
                "group": "RAI",
                "value": 87.418
            },
            {
                "group": "RAI",
                "value": 86.451
            },
            {
                "group": "RAI",
                "value": 86.51
            },
            {
                "group": "RAI",
                "value": 86.831
            },
            {
                "group": "RAI",
                "value": 91.093
            },
            {
                "group": "RAI",
                "value": 114.85
            },
            {
                "group": "RAI",
                "value": 87.889
            },
            {
                "group": "RAI",
                "value": 86.828
            },
            {
                "group": "RAI",
                "value": 86.911
            },
            {
                "group": "RAI",
                "value": 86.51599999999999
            },
            {
                "group": "RAI",
                "value": 86.439
            },
            {
                "group": "RAI",
                "value": 90.55199999999999
            },
            {
                "group": "RAI",
                "value": 114.053
            },
            {
                "group": "RAI",
                "value": 92.156
            },
            {
                "group": "RAI",
                "value": 92.525
            },
            {
                "group": "RAI",
                "value": 101.557
            },
            {
                "group": "RAI",
                "value": 84.863
            },
            {
                "group": "RAI",
                "value": 85.221
            },
            {
                "group": "RAI",
                "value": 86.332
            },
            {
                "group": "RAI",
                "value": 86.628
            },
            {
                "group": "RAI",
                "value": 85.868
            },
            {
                "group": "RAI",
                "value": 85.888
            },
            {
                "group": "RAI",
                "value": 85.744
            },
            {
                "group": "RAI",
                "value": 85.72800000000001
            },
            {
                "group": "RAI",
                "value": 85.374
            },
            {
                "group": "RAI",
                "value": 85.338
            },
            {
                "group": "RAI",
                "value": 85.293
            },
            {
                "group": "RAI",
                "value": 84.958
            },
            {
                "group": "RAI",
                "value": 85.048
            },
            {
                "group": "RAI",
                "value": 85.26599999999999
            },
            {
                "group": "RAI",
                "value": 84.642
            },
            {
                "group": "RAI",
                "value": 84.588
            },
            {
                "group": "RAI",
                "value": 86.637
            },
            {
                "group": "RAI",
                "value": 85.725
            },
            {
                "group": "RAI",
                "value": 84.483
            },
            {
                "group": "RAI",
                "value": 85.233
            },
            {
                "group": "RAI",
                "value": 85.106
            },
            {
                "group": "RAI",
                "value": 84.419
            },
            {
                "group": "BOT",
                "value": 88.001
            },
            {
                "group": "BOT",
                "value": 85.586
            },
            {
                "group": "BOT",
                "value": 85.135
            },
            {
                "group": "BOT",
                "value": 85.158
            },
            {
                "group": "BOT",
                "value": 85.315
            },
            {
                "group": "BOT",
                "value": 84.999
            },
            {
                "group": "BOT",
                "value": 85.063
            },
            {
                "group": "BOT",
                "value": 85.21000000000001
            },
            {
                "group": "BOT",
                "value": 84.941
            },
            {
                "group": "BOT",
                "value": 84.642
            },
            {
                "group": "BOT",
                "value": 84.818
            },
            {
                "group": "BOT",
                "value": 84.973
            },
            {
                "group": "BOT",
                "value": 84.971
            },
            {
                "group": "BOT",
                "value": 85.193
            },
            {
                "group": "BOT",
                "value": 85.28399999999999
            },
            {
                "group": "BOT",
                "value": 85.069
            },
            {
                "group": "BOT",
                "value": 84.673
            },
            {
                "group": "BOT",
                "value": 84.91499999999999
            },
            {
                "group": "BOT",
                "value": 84.989
            },
            {
                "group": "BOT",
                "value": 85.014
            },
            {
                "group": "BOT",
                "value": 85.128
            },
            {
                "group": "BOT",
                "value": 84.929
            },
            {
                "group": "BOT",
                "value": 84.84700000000001
            },
            {
                "group": "BOT",
                "value": 84.97
            },
            {
                "group": "BOT",
                "value": 85.115
            },
            {
                "group": "BOT",
                "value": 85.199
            },
            {
                "group": "BOT",
                "value": 89.67099999999999
            },
            {
                "group": "BOT",
                "value": 103.41499999999999
            },
            {
                "group": "BOT",
                "value": 98.33500000000001
            },
            {
                "group": "BOT",
                "value": 82.896
            },
            {
                "group": "BOT",
                "value": 106.262
            },
            {
                "group": "BOT",
                "value": 84.019
            },
            {
                "group": "BOT",
                "value": 83.537
            },
            {
                "group": "BOT",
                "value": 83.651
            },
            {
                "group": "BOT",
                "value": 83.494
            },
            {
                "group": "BOT",
                "value": 83.115
            },
            {
                "group": "BOT",
                "value": 83.371
            },
            {
                "group": "BOT",
                "value": 83.179
            },
            {
                "group": "BOT",
                "value": 83.173
            },
            {
                "group": "BOT",
                "value": 83.316
            },
            {
                "group": "BOT",
                "value": 83.01599999999999
            },
            {
                "group": "BOT",
                "value": 83.378
            },
            {
                "group": "BOT",
                "value": 83.011
            },
            {
                "group": "BOT",
                "value": 82.974
            },
            {
                "group": "BOT",
                "value": 83.078
            },
            {
                "group": "BOT",
                "value": 83.874
            },
            {
                "group": "BOT",
                "value": 82.85900000000001
            },
            {
                "group": "BOT",
                "value": 83.137
            },
            {
                "group": "BOT",
                "value": 83.07
            },
            {
                "group": "BOT",
                "value": 82.971
            },
            {
                "group": "BOT",
                "value": 83.816
            },
            {
                "group": "BOT",
                "value": 82.961
            },
            {
                "group": "BOT",
                "value": 83.78399999999999
            },
            {
                "group": "GRO",
                "value": 95.756
            },
            {
                "group": "GRO",
                "value": 88.943
            },
            {
                "group": "GRO",
                "value": 88.72200000000001
            },
            {
                "group": "GRO",
                "value": 88.378
            },
            {
                "group": "GRO",
                "value": 87.65299999999999
            },
            {
                "group": "GRO",
                "value": 87.51
            },
            {
                "group": "GRO",
                "value": 100.634
            },
            {
                "group": "GRO",
                "value": 109.75999999999999
            },
            {
                "group": "GRO",
                "value": 86.366
            },
            {
                "group": "GRO",
                "value": 86.394
            },
            {
                "group": "GRO",
                "value": 86.225
            },
            {
                "group": "GRO",
                "value": 86.465
            },
            {
                "group": "GRO",
                "value": 87.981
            },
            {
                "group": "GRO",
                "value": 86.735
            },
            {
                "group": "GRO",
                "value": 86.94800000000001
            },
            {
                "group": "GRO",
                "value": 86.396
            },
            {
                "group": "GRO",
                "value": 86.583
            },
            {
                "group": "GRO",
                "value": 86.813
            },
            {
                "group": "GRO",
                "value": 91.098
            },
            {
                "group": "GRO",
                "value": 86.73
            },
            {
                "group": "GRO",
                "value": 86.602
            },
            {
                "group": "GRO",
                "value": 86.445
            },
            {
                "group": "GRO",
                "value": 87.526
            },
            {
                "group": "GRO",
                "value": 86.82900000000001
            },
            {
                "group": "GRO",
                "value": 87.126
            },
            {
                "group": "GRO",
                "value": 86.735
            },
            {
                "group": "GRO",
                "value": 89.458
            },
            {
                "group": "GRO",
                "value": 100.815
            },
            {
                "group": "GRO",
                "value": 95.178
            },
            {
                "group": "GRO",
                "value": 117.856
            },
            {
                "group": "GRO",
                "value": 84.985
            },
            {
                "group": "GRO",
                "value": 85.435
            },
            {
                "group": "GRO",
                "value": 85.437
            },
            {
                "group": "GRO",
                "value": 85.411
            },
            {
                "group": "GRO",
                "value": 86.383
            },
            {
                "group": "GRO",
                "value": 87.702
            },
            {
                "group": "GRO",
                "value": 86.213
            },
            {
                "group": "GRO",
                "value": 87.249
            },
            {
                "group": "GRO",
                "value": 86.364
            },
            {
                "group": "GRO",
                "value": 87.788
            },
            {
                "group": "GRO",
                "value": 85.873
            },
            {
                "group": "GRO",
                "value": 87.306
            },
            {
                "group": "GRO",
                "value": 86.005
            },
            {
                "group": "GRO",
                "value": 85.389
            },
            {
                "group": "GRO",
                "value": 85.473
            },
            {
                "group": "GRO",
                "value": 85.203
            },
            {
                "group": "GRO",
                "value": 88.124
            },
            {
                "group": "GRO",
                "value": 85.43
            },
            {
                "group": "GRO",
                "value": 85.145
            },
            {
                "group": "GRO",
                "value": 85.514
            },
            {
                "group": "GRO",
                "value": 85.831
            },
            {
                "group": "GRO",
                "value": 86.52
            },
            {
                "group": "KUB",
                "value": 94.65899999999999
            },
            {
                "group": "KUB",
                "value": 88.801
            },
            {
                "group": "KUB",
                "value": 88.233
            },
            {
                "group": "KUB",
                "value": 88.618
            },
            {
                "group": "KUB",
                "value": 88.747
            },
            {
                "group": "KUB",
                "value": 89.07900000000001
            },
            {
                "group": "KUB",
                "value": 89.061
            },
            {
                "group": "KUB",
                "value": 88.457
            },
            {
                "group": "KUB",
                "value": 88.93
            },
            {
                "group": "KUB",
                "value": 89.432
            },
            {
                "group": "KUB",
                "value": 88.305
            },
            {
                "group": "KUB",
                "value": 87.788
            },
            {
                "group": "KUB",
                "value": 87.997
            },
            {
                "group": "KUB",
                "value": 87.748
            },
            {
                "group": "KUB",
                "value": 87.907
            },
            {
                "group": "KUB",
                "value": 88.537
            },
            {
                "group": "KUB",
                "value": 87.826
            },
            {
                "group": "KUB",
                "value": 87.628
            },
            {
                "group": "KUB",
                "value": 87.707
            },
            {
                "group": "KUB",
                "value": 87.43
            },
            {
                "group": "KUB",
                "value": 87.28399999999999
            },
            {
                "group": "KUB",
                "value": 87.307
            },
            {
                "group": "KUB",
                "value": 87.42
            },
            {
                "group": "KUB",
                "value": 87.61
            },
            {
                "group": "KUB",
                "value": 87.101
            },
            {
                "group": "KUB",
                "value": 87.512
            },
            {
                "group": "KUB",
                "value": 87.55199999999999
            },
            {
                "group": "KUB",
                "value": 102.81700000000001
            },
            {
                "group": "KUB",
                "value": 92.89
            },
            {
                "group": "KUB",
                "value": 128.219
            },
            {
                "group": "KUB",
                "value": 86.113
            },
            {
                "group": "KUB",
                "value": 88.32300000000001
            },
            {
                "group": "KUB",
                "value": 86.287
            },
            {
                "group": "KUB",
                "value": 86.741
            },
            {
                "group": "KUB",
                "value": 87.617
            },
            {
                "group": "KUB",
                "value": 87.053
            },
            {
                "group": "KUB",
                "value": 86.92
            },
            {
                "group": "KUB",
                "value": 86.709
            },
            {
                "group": "KUB",
                "value": 86.717
            },
            {
                "group": "KUB",
                "value": 87.613
            },
            {
                "group": "KUB",
                "value": 86.169
            },
            {
                "group": "KUB",
                "value": 87.245
            },
            {
                "group": "KUB",
                "value": 86.1
            },
            {
                "group": "KUB",
                "value": 99.22200000000001
            },
            {
                "group": "KUB",
                "value": 105.306
            },
            {
                "group": "KUB",
                "value": 85.367
            },
            {
                "group": "KUB",
                "value": 84.989
            },
            {
                "group": "KUB",
                "value": 85.261
            },
            {
                "group": "KUB",
                "value": 85.60300000000001
            },
            {
                "group": "KUB",
                "value": 85.01
            },
            {
                "group": "KUB",
                "value": 85.017
            },
            {
                "group": "GIO",
                "value": 92.702
            },
            {
                "group": "GIO",
                "value": 87.258
            },
            {
                "group": "GIO",
                "value": 87.15
            },
            {
                "group": "GIO",
                "value": 86.07300000000001
            },
            {
                "group": "GIO",
                "value": 85.90299999999999
            },
            {
                "group": "GIO",
                "value": 88.212
            },
            {
                "group": "GIO",
                "value": 85.907
            },
            {
                "group": "GIO",
                "value": 85.769
            },
            {
                "group": "GIO",
                "value": 85.911
            },
            {
                "group": "GIO",
                "value": 86.05199999999999
            },
            {
                "group": "GIO",
                "value": 86.148
            },
            {
                "group": "GIO",
                "value": 86.126
            },
            {
                "group": "GIO",
                "value": 86.038
            },
            {
                "group": "GIO",
                "value": 86.491
            },
            {
                "group": "GIO",
                "value": 87.033
            },
            {
                "group": "GIO",
                "value": 86.55
            },
            {
                "group": "GIO",
                "value": 86.099
            },
            {
                "group": "GIO",
                "value": 86.292
            },
            {
                "group": "GIO",
                "value": 86.107
            },
            {
                "group": "GIO",
                "value": 86.212
            },
            {
                "group": "GIO",
                "value": 90.616
            },
            {
                "group": "GIO",
                "value": 107.197
            },
            {
                "group": "GIO",
                "value": 85.94
            },
            {
                "group": "GIO",
                "value": 85.544
            },
            {
                "group": "GIO",
                "value": 85.327
            },
            {
                "group": "GIO",
                "value": 85.365
            },
            {
                "group": "GIO",
                "value": 85.477
            },
            {
                "group": "GIO",
                "value": 101.727
            },
            {
                "group": "GIO",
                "value": 86.59100000000001
            },
            {
                "group": "GIO",
                "value": 103.787
            },
            {
                "group": "GIO",
                "value": 90.151
            },
            {
                "group": "GIO",
                "value": 85.1
            },
            {
                "group": "GIO",
                "value": 86.813
            },
            {
                "group": "GIO",
                "value": 84.824
            },
            {
                "group": "GIO",
                "value": 84.843
            },
            {
                "group": "GIO",
                "value": 84.913
            },
            {
                "group": "GIO",
                "value": 85.01
            },
            {
                "group": "GIO",
                "value": 85.925
            },
            {
                "group": "GIO",
                "value": 85.12
            },
            {
                "group": "GIO",
                "value": 84.674
            },
            {
                "group": "GIO",
                "value": 85.59700000000001
            },
            {
                "group": "GIO",
                "value": 84.68
            },
            {
                "group": "GIO",
                "value": 84.631
            },
            {
                "group": "GIO",
                "value": 84.503
            },
            {
                "group": "GIO",
                "value": 84.759
            },
            {
                "group": "GIO",
                "value": 84.84700000000001
            },
            {
                "group": "GIO",
                "value": 84.59700000000001
            },
            {
                "group": "GIO",
                "value": 84.581
            },
            {
                "group": "GIO",
                "value": 84.93299999999999
            },
            {
                "group": "GIO",
                "value": 84.549
            },
            {
                "group": "GIO",
                "value": 84.819
            },
            {
                "group": "GIO",
                "value": 88.1
            }
        ]
    };
    
    console.log("testData", testData);
	return (
		<div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center py-10'>
                <div className="h-screen w-full">
                    {MyResponsiveBoxPlot(testData)}
                </div>
            </div>
		</div>
	);
};

export default BoxPlotTemplate;
