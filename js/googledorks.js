const keyword = document.querySelector('.keyword');
const specificdomain = document.querySelector('.specificdomain');
const filetype = document.querySelector('.filetype');
const excludekeyword = document.querySelector('.excludekeyword');
const result_btn = document.querySelector('#result_btn');
const result = document.querySelector('#result');

result_btn.addEventListener('click', function() {
    const keyword_value = keyword.value;
    const specificdomain_value = specificdomain.value;
    const filetype_value = filetype.value;
    const excludekeyword_value = excludekeyword.value;

    if (keyword_value.trim() === '' && specificdomain_value.trim() === '' && filetype_value.trim() === '' && excludekeyword_value.trim() === '') {
        return;
    }

    let searchQuery = '';
    
    if (keyword_value.trim() !== '') {
        searchQuery += `intitle:${keyword_value} `;
    }
    
    if (specificdomain_value.trim() !== '') {
        searchQuery += `site:${specificdomain_value} `;
    }
    
    if (filetype_value.trim() !== '') {
        searchQuery += `filetype:${filetype_value} `;
    }
    
    if (excludekeyword_value.trim() !== '') {
        searchQuery += `-${excludekeyword_value}`;
    }

    const resultLink = document.createElement('a');
    resultLink.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    resultLink.target = '_blank';
    resultLink.textContent = searchQuery;

    result.innerHTML = '';
    result.appendChild(resultLink);
});
