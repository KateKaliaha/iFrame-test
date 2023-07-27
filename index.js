(function () {

  var frame = document.createElement('iframe');
  frame.id = 'myIframe';
  frame.srcdoc = "<html><body><p id='p'>I am a new iframe</p></body></html>"
  frame.style.position = 'fixed';
  frame.style.top = '0px';
  frame.style.left = '0px';
  frame.style.height = '20vh';
  frame.style.background = 'grey';
  frame.style.width = '90vw';
  frame.style.border = 'none';
  frame.style.boxShadow = '0 20px 32px -8px rgba(9,20,66,0.25)';
  frame.style.zIndex = '9999';
  frame.style.transition = 'left 1s ease, bottom 1s ease, right 1s ease';
  frame.style.visibility = 'hidden';

  document.body.appendChild(frame);

  const actions = {
    showMenu: function (msg) {
      frame.style.visibility = 'visible';
      const elem = frame.contentWindow.document.createElement('script');
      elem.type = 'text/javascript';
      frame.contentWindow.document.body.appendChild(elem);
      elem.text = `func = ${msg}; func()`;
    }
  }

  window.nostrActions = actions;

  const btn = document.getElementById('btn')

  window.addEventListener('click', function (event) {
    const iFrameStyleDisplay = document.getElementById('myIframe').style.visibility;

    if (iFrameStyleDisplay === 'visible') {
      document.getElementById('myIframe').style.visibility = 'hidden';
    };

    if (event.target === btn) {
      const func = () => {
        const p = document.getElementById('p');
        p.innerHTML = p.innerHTML + ' ' + 'Show menu function done';
      };

      window.nostrActions.showMenu(func.toString());
    }
  });
})();


