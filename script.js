function showGrid(category, buttonId) {
    // Hide all categories
    document.getElementById('category1').classList.add('d-none');
    document.getElementById('category2').classList.add('d-none');
    document.getElementById('category3').classList.add('d-none');
  
    // Show selected category
    document.getElementById(category).classList.remove('d-none');
  
    // Remove 'active' class from all buttons
    document.getElementById('btn-category1').classList.remove('active');
    document.getElementById('btn-category2').classList.remove('active');
    document.getElementById('btn-category3').classList.remove('active');
  
    // Add 'active' class to the clicked button
    document.getElementById(buttonId).classList.add('active');
  }
  
  // Display 'Logo & Branding' by default
  document.addEventListener("DOMContentLoaded", function() {
    showGrid('category1', 'btn-category1');
  });
  