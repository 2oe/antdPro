import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/models/setting.js').default) });
app.model({ namespace: 'shoplist', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/models/shoplist.js').default) });
app.model({ namespace: 'user', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/User/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'profile', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('D:/八维学习/实训/实训1/日常练习/日常技能/my-project/src/pages/Account/Settings/models/geographic.js').default) });
