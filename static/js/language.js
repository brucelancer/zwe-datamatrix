
// Copyright to GS1 Myanmar
function changeLanguage(lang) {
var greetingMessage = document.getElementById('greeting-message');

if (lang === 'en') {
greetingMessage.innerHTML = 'You can use our Data Matrix in your Product, Website, Marketing, Healthcare, Events etc. <br>If there is any issues related to "YOUR DISTRIBUTIONS" of Data Matrix produced by GS1 Myanmar, <br> we would like to inform you that we will not be responsible for solving it aspect an error of <br> GS1 Myanmar Data Matrix Generator(Bad resolution, ECC error, Quietzone Error). ';
} else if (lang === 'my') {
greetingMessage.innerHTML = 'GS1 Myanmar Data Matrix အား လူကြီးမင်းသုံးဆွဲလိုသည့် Product, Website, Marketing, Healthcare, Events etc. <br>အစရှိသည့်နေရာများတွင် အသုံးပြုနိုင်ပါသည်။ <br> GS1 Myanmar Generator မှ (Data Matrix ပုံမကောင်းခြင်း၊ ECC မှားခြင်း၊ Quiet Zone မှားခြင်းတို့ကြုံတွေ့ပါက GS1 Myanmar အားဆက်သွယ်ပါ။ <br>အကယ်၍ မိမိ​၏ ဖြန့်ဖြူးပြီးထုတ်ကုန်/ပစ္စည်းများတွင် အသုံးပြုပြီးသော Data Matrixများ ဖြင့်ပတ်သတ်၍ အကြောင်းကိစ္စတစုံတစ်ရာ ပေါ်ပေါက်လာပါက <br>GS1 Myanmar မှတာဝန်ယူဖြေရှင်းပေးမည် မဟုတ်ကြောင်းအသိပေးအပ်ပါသည်။ ';
}
}

// Function to close the popup section
function closePopup() {
var popupContainer = document.querySelector('.popup-container');
popupContainer.style.display = 'none';
}

// Function to handle clicks outside the popup section
function handleClickOutside(event) {
var popupContent = document.querySelector('.popup-content');
if (!popupContent.contains(event.target)) {
closePopup();
}
}

// Show the popup section on page load
window.addEventListener('DOMContentLoaded', function () {
var popupContainer = document.querySelector('.popup-container');
popupContainer.style.display = 'flex';

// Set the default language to Myanmar (Burmese)
changeLanguage('my');

// Add event listener to handle clicks outside the popup section
document.addEventListener('click', handleClickOutside);
});


$(document).ready(function() {
    $('#change-language-button').click(function() {
        var currentLanguage = $(this).text();
        var englishText = "English";
        var burmeseText = "မြန်မာဘာသာ";

        if (currentLanguage === burmeseText) {
            $(this).text(englishText);
            $('#burmese-text').hide();
            $('#english-text').show();
        } else {
            $(this).text(burmeseText);
            $('#english-text').hide();
            $('#burmese-text').show();
        }
    });
});