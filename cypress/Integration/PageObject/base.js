class Base {

    visitHome() {
        cy.visit('http://localhost:7080')
    }

    visitABTesting() {
        cy.visit('http://localhost:7080/abtest')
    }

    visitAddRemoveTesting() {
        cy.visit('http://localhost:7080/add_remove_elements/')
    }

    visitBrokenImagesTesting() {
        cy.visit('http://localhost:7080/broken_images')
    }

    visitChallengingDOMTesting() {
        cy.visit('http://localhost:7080/challenging_dom')
    }

    visitCheckboxesTesting() {
        cy.visit('http://localhost:7080/checkboxes')
    }

    visitContextMenuTesting() {
        cy.visit('http://localhost:7080/context_menu')
    }

    visitDigestAuthTesting() {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/digest_auth')
    }

    visitDisappearingElmntsTesting() {
        cy.visit('http://localhost:7080/disappearing_elements')
    }

    visitDragNDropTesting() {
        cy.visit('http://localhost:7080/drag_and_drop')
    }

    visitDropdownTesting() {
        cy.visit('http://localhost:7080/dropdown')
    }

    visitDynamicContent() {
        cy.visit('http://localhost:7080/dynamic_content')
    }

    visitDynamicContentStatically() {
        cy.visit('http://localhost:7080/dynamic_content?with_content=static')
    }

    visitDynamicControlsTesting() {
        cy.visit('http://localhost:7080/dynamic_controls')
    }

    visitDynamicLoadingTesting() {
        cy.visit('http://localhost:7080/dynamic_loading')
    }

    visitEntryAdTesting() {
        cy.visit('http://localhost:7080/entry_ad')
    }

    visitExitIntentTesting() {
        cy.visit('http://localhost:7080/exit_intent')
    }

    visitFileDownloadTesting() {
        cy.visit('http://localhost:7080/download')
    }

    visitFileUploadTesting() {
        cy.visit('http://localhost:7080/upload')
    }

    visitFloatingMenuTesting() {
        cy.visit('http://localhost:7080/floating_menu')
    }

    visitForgotPasswordTesting() {
        cy.visit('http://localhost:7080/forgot_password')
    }

    visitFormAuthenticationTesting() {
        cy.visit('http://localhost:7080/login')
    }

    visitFramesTesting() {
        cy.visit('http://localhost:7080/frames')
    }

    visitNestedFramesTesting() {
        cy.visit('http://localhost:7080/nested_frames')
    }

    visitGeolocationTesting() {
        cy.visit('http://localhost:7080/geolocation')
    }

    visitGeolocationTestingElectron(fakelocation) {
        cy.visit('http://localhost:7080/geolocation', fakelocation)
    }

    visitHorizontalSliderTesting() {
        cy.visit('http://localhost:7080/horizontal_slider')
    }

    visitHoverTesting() {
        cy.visit('http://localhost:7080/hovers')
    }

    visitInfiniteScrollTesting() {
        cy.visit('http://localhost:7080/infinite_scroll')
    }

    visitInputsTesting() {
        cy.visit('http://localhost:7080/inputs')
    }

    visitJQueryUIMenusTesting() {
        cy.visit('http://localhost:7080/jqueryui/menu')
    }

    visitJavascriptAlertsTesting() {
        cy.visit('http://localhost:7080/javascript_alerts')
    }

    visitJavascriptonloadTesting() {
        cy.visit('http://localhost:7080/javascript_error')
    }

    visitKeyPressesTesting() {
        cy.visit('http://localhost:7080/key_presses')
    }

    visitLargeNDeepDOMTesting() {
        cy.visit('http://localhost:7080/large')
    }

    visitMultipleWindowsTesting() {
        cy.visit('http://localhost:7080/windows')
    }


    visitNotificationMessageTesting() {
        cy.visit('http://localhost:7080/notification_message')
    }

    visitRedirectLinkTesting() {
        cy.visit('http://localhost:7080/redirector')
    }

    visitSecureFileDownloadTesting() {
        cy.visit('http://localhost:7080/download_secure')
    }

    visitShadowDomTesting() {
        cy.visit('http://localhost:7080/shadowdom')
    }

    visitShiftingContentTesting() {
        cy.visit('http://localhost:7080/shifting_content')
    }

    visitSlowResourcesTesting() {
        cy.visit('http://localhost:7080/slow')
    }

    visitSortableDataTablesTesting() {
        cy.visit('http://localhost:7080/tables')
    }

    visitStatusCodesTesting() {
        cy.visit('http://localhost:7080/status_codes')
    }

    visitTyposTesting() {
        cy.visit('http://localhost:7080/typos')
    }

    visitWYSIWYGEditorTesting() {
        cy.visit('http://localhost:7080/tinymce')
    }
}

export default Base