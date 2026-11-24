(() => {
  const config = window.SYNC_LEGAL_CONFIG || {};
  document.querySelectorAll('[data-operator]').forEach((node) => {
    if (typeof config.operatorName === 'string' && config.operatorName.trim()) node.textContent = config.operatorName;
  });
  document.querySelectorAll('[data-effective]').forEach((node) => {
    if (typeof config.effectiveDate === 'string' && config.effectiveDate.trim()) node.textContent = `Effective ${config.effectiveDate}`;
  });
  const email = typeof config.supportEmail === 'string' ? config.supportEmail.trim() : '';
  if (/^[A-Za-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    document.querySelectorAll('[data-support]').forEach((node) => {
      const link = document.createElement('a');
      link.textContent = email;
      link.setAttribute('href', `mailto:${email}`);
      node.replaceChildren(link);
    });
  }
})();
