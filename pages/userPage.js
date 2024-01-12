const { I } = inject();

module.exports = {

    txtName: 'h2[data-component="NameHeadingText"]',
    guestBook: '#guestbook-form',
    txtBoxGuestBookAdd: 'textarea[form="guest-book-add"]',
    txtBoxName: 'input[data-component="TextBoxField"]',
    txtBoxEmail: 'input[data-component="EmailField"]',
    btnSubmit: 'button[data-component="AffiliateGuestbookSubmitButton"]',

  fill_guest_book_and_submit(message, user, email) {
    I.fillField(this.txtBoxGuestBookAdd, message);
    I.fillField(this.txtBoxName, user);
    I.fillField(this.txtBoxEmail, email);
    I.click(this.btnSubmit);
  }
}