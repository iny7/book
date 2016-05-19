# About the dist folder
##这里是打包出的文件

* 注意！
    *  因为我为react router配置的history为 browser history
    *  所以本地并跑不起来，若需要本地运行，请进入src/index.js 对以下两行代码做修改
    *  import { Router, hashHistory } from 'react-router';
    *  <Router history={hashHistory} routes={routes} />

* 然后重新打包 
    * <pre><code>npm run --dev=dist</code></pre>
