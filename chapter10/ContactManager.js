import { Contact } from './Contact.js';

// Định nghĩa class ContactManager để quản lý danh sách danh bạ
export class ContactManager {
  constructor() {
    this.contacts = [];
  }

  // Thêm một danh bạ vào danh sách
  addContact(contact) {
    this.contacts.push(contact);
  }

  // Xóa một danh bạ theo tên
  removeContact(name) {
    this.contacts = this.contacts.filter(contact => contact.name !== name);
  }

  // Hiển thị tất cả các danh bạ trong danh sách
  displayAllContacts() {
    return this.contacts.length > 0 
      ? this.contacts.map(contact => contact.displayContact()).join('\n')
      : 'No contacts available.';
  }
}
