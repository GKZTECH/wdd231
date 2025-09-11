 // Simple script to display current date in footer
        document.addEventListener('DOMContentLoaded', function() {
            const lastModified = document.lastModified;
            const lastModElement = document.querySelector('.copyright p:last-child');
            if (lastModElement) {
                lastModElement.textContent = 'Last Modification: ' + lastModified;
            }
            
            // Update copyright year
            const yearElement = document.querySelector('.copyright p:nth-child(2)');
            if (yearElement) {
                yearElement.textContent = '© ' + new Date().getFullYear() + ' Timbuktu Chamber of Commerce';
            }
        });