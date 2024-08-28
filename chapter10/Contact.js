// Định nghĩa class Contact để lưu thông tin của một người
export class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }

  // Phương thức để hiển thị thông tin của danh bạ
  displayContact() {
    return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`;
  }
}
