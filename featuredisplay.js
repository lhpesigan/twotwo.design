class FeatureDisplay {
  constructor(containerSelector, options) {
    console.log('Initializing FeatureDisplay');
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.error('Failed to find container:', containerSelector);
      return;
    }
    this.options = {
      animationType: "move-in",
      animationDuration: 500,
      ...options,
    };
    this.allImages = this.container.querySelectorAll(".feature-image-wrapper img");
    this.setupEventListeners();
    this.showImageForRadio("feature1");
  }

  hideAllImages() {
    console.log('Hiding all images');
    this.allImages.forEach((image) => {
      image.style.opacity = 0;
      image.style.visibility = "hidden";
      image.style.display = "none";
    });
  }

  showImageForRadio(radioId) {
    console.log('Showing image for:', radioId);
    const imageId = radioId.replace("feature", "image");
    const imageToShow = document.getElementById(imageId);
    this.hideAllImages();
    if (imageToShow) {
      imageToShow.style.display = "block";
      setTimeout(() => {
        imageToShow.style.visibility = "visible";
        imageToShow.style.opacity = 1;
        imageToShow.classList.add(this.options.animationType);
      }, 10);
    }
  }

  setupEventListeners() {
    console.log('Setting up event listeners');
    this.container.addEventListener("click", (event) => {
      console.log('Clicked inside container');
      const target = event.target.closest(".feature-radio, .feature-list-item");
      if (!target) {
        console.log('No valid target found');
        return;
      }
      const radioId = target.tagName === "LABEL" ? target.getAttribute("for") : target.id;
      if (radioId) {
        this.showImageForRadio(radioId);
      }
    });
  }
}

export default FeatureDisplay;
