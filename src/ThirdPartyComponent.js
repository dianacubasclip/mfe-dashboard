import React, { useEffect } from 'react';

  const ThirdPartyComponent = ({ window, name = 'LogisticsDrawer'}) => {
    const renderMFE = () => {
      window[`render${name}`](`${name}-container`, history);
    }

    const loadMFE = () => {
      const scriptId = `micro-frontend-script-${name}`;
      if (document.getElementById(scriptId)) {
        renderMFE()
        return;
      }

      const script = document && document.createElement('script')
      script.id = scriptId
      script.src = 'http://localhost:3007/bundle.js'
      script.crossOrigin = ''
      script.onload = renderMFE
      document.head.appendChild(script)
    }

    useEffect(() => {
      loadMFE()
      return () => {
        if (document.getElementById(`${name}-container`)) {
          window[`unmount${name}`](`${name}-container`);
        }
      }
    })

    return (
      <>
        <main id={`${name}-container`} className="" />
      </>
    )
  }

  ThirdPartyComponent.defaultProps = {
  document,
  window,
};
  
  export default ThirdPartyComponent;