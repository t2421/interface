# -*- coding: utf-8 -*-  
import numpy as np
import sys,json

try:
    data = np.array(json.loads(sys.argv[1]))
    stdVal = np.std(data)
    avgVal = np.mean(data)
    result = {'std':stdVal,'avg':avgVal}
    print(json.dumps(result))
except Exception as e:
    print(str(e))