exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};

exports.getErrorAPI = (req, res, next) => {
  res.status(500).render('500', { pageTitle: 'Issue with Connecting Zendesk API', path: '/500' });
};