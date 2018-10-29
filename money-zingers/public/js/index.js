new fullpage('#fullpage', {
  sectionsColor: ['#f07864', '#ffffff' ,'#8b59f3', '#f8d058', '#8da1a7'],
  anchors: ['landing','eightrules','about','weare','contact'],
  scrollOverflow: true,
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  menu: '#myMenu'
});

$(".js-modal-btn").modalVideo({
  channel:'vimeo',
  ratio: '4:3',
});

new needShareDropdown(document.getElementById('share-button'), {
});