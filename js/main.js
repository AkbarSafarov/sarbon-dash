$(function(){

	$('select').styler({
        selectSearch: false,
    });

    $('.dropdown_select .dropdown_select_name').on('click', function(){
        $('.dropdown_select').removeClass('opened');
        $(this).parent().toggleClass('opened');
    });

    $('.login_arrow').on('click', function(){
        $('.card_list_drop').toggleClass('active');
    });

    $('.dropdown_select .item').on('click', function(){
        const parent = $(this).parents('.dropdown_select');
        const name = $(this).text();

        $(this).addClass('active');
        parent.find('.dropdown_select_name').text(name);
        parent.removeClass('opened');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest('.dropdown_select').length) 
          return;
        if ($('.dropdown_select').hasClass('opened')){
            $('.dropdown_select').removeClass('opened');
        }
    });
	
	var $body = $(document.body),
      	$html = $(document.documentElement);

    function formPopup($btn,$wrap, clear){

        var closeForm = $('.formExtraWrapper .close-form'),
            cancel = $('.formExtraWrapper .cancel'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
            $('.form_btns .delete_btn').hide();
        });
        cancel.on('click', function(event) {
            event.preventDefault();
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
            $('.form_btns .delete_btn').hide();
        });

        formBtn.on('click', function(event) {
            if(clear) {
                formWrap.find('form')[0].reset();
                const $selectElement = $($wrap + ' .field select');
                const $optionToSelect = $selectElement.find('option[value=""]');

                if ($optionToSelect.length > 0) {
                    $selectElement.val(null);
                    $optionToSelect.prop('selected', true);
                    $selectElement.trigger('refresh');
                }
            }
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
                $('.form_btns .delete_btn').hide();
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
                $('.form_btns .delete_btn').hide();
            }
        });
    }

    //formPopup('.create_event,.edit_btn_event','.event_popup', true);
    formPopup('.create_supplier,.edit_btn_supplier','.supplier_popup', true);
    formPopup('.create_item,.edit_btn_item','.item_popup', true);
    formPopup('.add_new_dish','.new_dish_popup', true);
    formPopup('.create_user,.edit_btn_user','.users_popup', true);
    
    
    // formPopup('.create_coupon,.edit_btn_coupon','.coupon_popup', true);
    // formPopup('.set_cashbacks','.set_cashbacks_popup');
    // formPopup('.set_discounts','.set_discounts_popup');
    // formPopup('.set_withdraws','.set_withdraws_popup');
    // formPopup('.set_membership','.set_membership_popup');

    $('.edit_btn_user').on('click', function(){
        const parent = $(this).closest('tr');
        const fullName = parent.find('.full-name').text();
        const userName = parent.find('.username').text();
        const type = parent.find('.type').text();
        const status = parent.find('.status').text();

        $('.users_popup .field input[name="full-name"]').val(fullName);
        $('.users_popup .field input[name="username"]').val(userName);

        const $selectElement = $('.users_popup .field select[name="type"]');
        const $optionToSelect = $selectElement.find('option[value="' + type + '"]');
        
        if ($optionToSelect.length > 0) {
            $selectElement.val(null);
            $optionToSelect.prop('selected', true);
            $selectElement.trigger('refresh');
        }

        const $selectElementC = $('.users_popup .field select[name="status"]');
        const $optionToSelectC = $selectElementC.find('option[value="' + status + '"]');
        
        if ($optionToSelectC.length > 0) {
            $selectElementC.val(null);
            $optionToSelectC.prop('selected', true);
            $selectElementC.trigger('refresh');
        }
    });

    $('.edit_btn_event').on('click', function(){
        const parent = $(this).closest('tr');
        const firstName = parent.find('.first-name').text();
        const phoneNumber = parent.find('.phone-number').text();
        const eventDate = parent.find('.event-date').text();
        const numberGuests = parent.find('.number-guests').text();
        const selectMenu = parent.find('.select-menu').text();

        $('.event_popup .field input[name="first-name"]').val(firstName);
        $('.event_popup .field input[name="phone-number"]').val(phoneNumber);
        $('.event_popup .field input[name="event-date"]').val(eventDate);
        $('.event_popup .field input[name="number-guests"]').val(numberGuests);

        const $selectElement = $('.event_popup .field select[name="select-menu"]');
        const $optionToSelect = $selectElement.find('option[value="' + selectMenu + '"]');
        
        if ($optionToSelect.length > 0) {
            $selectElement.val(null);
            $optionToSelect.prop('selected', true);
            $selectElement.trigger('refresh');
        }
    });

    $('.edit_btn_item').on('click', function(){
        const parent = $(this).closest('tr');
        const title = parent.find('.item-title').text();
        const price = parent.find('.item-price').text();
        const measurement = parent.find('.select-measurement').text();
        const category = parent.find('.select-category').text();

        $('.item_popup .field input[name="item-title"]').val(title);
        $('.item_popup .field input[name="item-price"]').val(price);

        const $selectElement = $('.item_popup .field select[name="select-measurement"]');
        const $optionToSelect = $selectElement.find('option[value="' + measurement + '"]');
        
        if ($optionToSelect.length > 0) {
            $selectElement.val(null);
            $optionToSelect.prop('selected', true);
            $selectElement.trigger('refresh');
        }

        const $selectElementC = $('.item_popup .field select[name="select-category"]');
        const $optionToSelectC = $selectElementC.find('option[value="' + category + '"]');
        
        if ($optionToSelectC.length > 0) {
            $selectElementC.val(null);
            $optionToSelectC.prop('selected', true);
            $selectElementC.trigger('refresh');
        }

        $('.item_popup .delete_btn').show();
    });

    $('.edit_btn_supplier').on('click', function(){
        const parent = $(this).closest('tr');
        const supplierName = parent.find('.supplier-name').text();
        $('.supplier_popup .field input[name="supplier-name"]')

        $('.supplier_popup .delete_btn').show();
    });

    function alertPopup($btn,$wrap){

        var closeForm = $('.alertExtraWrapper .cancel'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
        });
        formBtn.on('click', function(event) {
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
            $(this).closest('.dropdown_select').removeClass('opened');
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.alertExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
    }

    alertPopup('.deactivate_btn','.deactivate_popup');
    alertPopup('.delete_btn','.delete_popup');
    alertPopup('.log_out_btn','.log_out_popup');

    $('.notifications_alert .close').on('click', function(){
        $(this).closest('.notifications_alert').removeClass('opened');
    });

    var menuBtn = $('.burger'),
        menuWrapper = $('.dashboard_menu'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
        }
    });
});

