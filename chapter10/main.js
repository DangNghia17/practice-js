import { Contact } from './Contact.js';
import { ContactManager } from './ContactManager.js';

// Tạo một đối tượng ContactManager
const contactManager = new ContactManager();

// Thêm các danh bạ
const contact1 = new Contact('Nghĩa', '0123456789', 'nghia@example.com');
const contact2 = new Contact('Hải', '0987654321', 'hai@example.com');

contactManager.addContact(contact1);
contactManager.addContact(contact2);

// Hiển thị tất cả các danh bạ
console.log('All Contacts:');
console.log(contactManager.displayAllContacts());

// Xóa một danh bạ
contactManager.removeContact('Nghĩa');

// Hiển thị lại danh sách sau khi xóa
console.log('\nContacts after removal:');
console.log(contactManager.displayAllContacts());
