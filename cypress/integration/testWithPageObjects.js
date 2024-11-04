import { onDatePickerPage } from "../support/page_objects/datePickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })
    
    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
       navigateTo.formLayoutsPage()
       onFormLayoutsPage.submitInlineFormWithNameAndEmail('Peter', 'peter@test.com')
       onFormLayoutsPage.submitBasicFormWithEmailAndPassword('peter@test.com', 'MyPassword')
       navigateTo.datePickerPage()
       onDatePickerPage.selectCommonDatepickerDateFromToday(1)
       onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
       navigateTo.smartTablePage()
       onSmartTablePage.updateAgeByFirstName('Jack', '35')
       onSmartTablePage.addNewRecordWithFirstAndLastName('Kobe', 'Bryant')
       onSmartTablePage.deleteRowByIndex(1)
    })




})