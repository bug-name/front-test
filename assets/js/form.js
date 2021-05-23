
//form-group
$(document).on('focus', '.form-group.custom-dropdown', function () {
    $(this).addClass('focus');
});
$(document).on('blur', '.form-group.custom-dropdown', function () {
    $(this).removeClass('focus');
});
$(document).on('focus', '.form-group input', function () {
    $(this).closest('.form-group').addClass('focus');
});
$(document).on('blur', '.form-group input', function () {
    $(this).closest('.form-group').removeClass('focus');
});
$(document).on('focus', '.form-group textarea', function () {
    $(this).closest('.form-group').addClass('focus');
});
$(document).on('blur', '.form-group textarea', function () {
    $(this).closest('.form-group').removeClass('focus');
});

//placeholder
$(document).on('input', '.form-group textarea', function () {
    if($(this).val().length > 0){
        $(this).closest('.form-group').addClass('filled');
    } else {
        $(this).closest('.form-group').removeClass('filled');
    }
});

//input phone
$(document).on('focus', 'input[type="tel"]', function () {
    $(this).closest('.form-group').removeClass('filled');
});
$('input[type="tel"]').mask("+38 (999) 999-99-99", {
    completed: function(){
        $(this).closest('.form-group').addClass('filled');
    }
});

//custom dropdown
$('.custom-dropdown__header').click(function () {
    $(this).parent('.custom-dropdown').toggleClass('open');
});
$('.custom-dropdown').on('click', '.custom-dropdown__item', function () {
    let $item     = $(this);
    let $dropdown = $(this).closest('.custom-dropdown');
    let $input    = $dropdown.find('input');
    let itemValue = $item.data('value');

    $dropdown.find('.custom-dropdown__current').text(itemValue);
    $dropdown.find('.current').removeClass('current');
    $item.addClass('current');
    $input.val(itemValue);

    $dropdown.addClass('filled').removeClass('open').removeClass('focus');
});
$(document).mouseup(function (e){
    let $dropdown = $('.custom-dropdown');
    if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
        $dropdown.removeClass('open');
    }
});

//input file
let fileName = ''
let buttonUploadedHtml = ``;
$(document).on('input', 'input[type="file"]', function () {
    let files = $(this)[0].files;
    let formGroupFile = $(this).closest('.form-group');
    let statusBlock = formGroupFile.find('.input-file__status');
    statusBlock.find('.button-uploaded').remove();

    if (files.length > 0) {
        formGroupFile.addClass('filled');
        for (let i = 0; i < files.length; i++){
            fileName = files[i].name;
            buttonUploadedHtml = `<div class="button-uploaded">
                                            <span class="text-file js-filename">${fileName}</span>
                                            <i class="icon icon-close js-remove-file"></i>
                                        </div>`;
            statusBlock.append(buttonUploadedHtml);
        }
    }else{
        formGroupFile.removeClass('filled');
    }
});

$(document).on('click', '.js-remove-file', function () {
    let filesList = $(this).closest('.input-file__status');
    $(this).parent('.button-uploaded').remove();
    if (filesList.find('.js-remove-file').length === 0){
        filesList.closest('.form-group').removeClass('filled');
    }
});
//Validaate
$('.form').submit(function (event) {
    event.preventDefault();
    let valid = true;
    let requiredInputs = $(this).find('.form-group.required');
    requiredInputs.each(function () {
        console.log(this);
        if (!$(this).hasClass('filled')){
            $(this).addClass('error');
            valid = false;
        }
    });
    if (valid === true) {
        this.submit();
    }
});
$(document).on('click', '.form-group', function () {
    $(this).removeClass('error');
});
