setTimeout(()=>{
    const splineViewer = document.querySelector("spline-viewer");
    console.log(splineViewer);
    const splineLogo = splineViewer.shadowRoot.querySelector("#logo");
    console.log(splineLogo);
    splineLogo.style.display = "none";
}, 2000)
