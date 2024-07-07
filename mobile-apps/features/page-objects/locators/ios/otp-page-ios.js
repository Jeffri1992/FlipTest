class OtpPageIos {

  async pageVerificationTitle() {
    const elem = 'name == "Pilih Metode Verifikasi"';
    return await $(`-ios predicate string:${elem}`);
  }

  async pageVerificationSubtitle() {
    const elem = 'name == "Kode OTP akan dikirim melalui salah satu metode di bawah."';
    return await $(`-ios predicate string:${elem}`);
  }

  async whatsappIcon() {
    const elem = 'name == "icon-otp-wa"';
    return await $(`-ios predicate string:${elem}`);
  }

  async whatsappButton() {
    const elem = 'name == "WhatsApp"';
    return await $(`-ios predicate string:${elem}`);
  }

  async gratisLabel() {
    const elem = 'name == "Gratis"';
    return await $(`-ios predicate string:${elem}`);
  }

  async smsIcon() {
    const elem = 'name == "icon-otp-sms"';
    return await $(`-ios predicate string:${elem}`);
  }

  async smsButton() {
    const elem = 'name == "SMS"';
    return await $(`-ios predicate string:${elem}`);
  }

  async pageTitle() {
    const elem = 'name == "Masukkan Kode OTP"';
    return await $(`-ios predicate string:${elem}`);
  }

  async pageSubtitle(maskedPhoneNumber, method) {
    const elem = method === 'Whatsapp' ? `name == "Kami telah mengirim kode OTP ke nomor ${maskedPhoneNumber} melalui WhatsApp."` : `name == "Kami telah mengirim SMS kode OTP ke nomor ${maskedPhoneNumber}"`;
    return await $(`-ios predicate string:${elem}`);
  }

  async otpPrefix() {
    const elem = 'name CONTAINS "-"';
    return await $(`-ios predicate string:${elem}`);
  }

  async inputOtpField() {
    const elem = 'name == "AuthFieldInput"';
    return await $(`-ios predicate string:${elem}`);
  }

  async resendOtpTitle() {
    const elem = 'name == "Tidak terima OTP?"';
    return await $(`-ios predicate string:${elem}`);
  }

  async kirimUlangButton() {
    const elem = 'label == "KIRIM ULANG" AND name == "KIRIM ULANG" AND value == "KIRIM ULANG"';
    return await $(`-ios predicate string:${elem}`);
  }

  async otpTimer() {
    const elem = 'name CONTAINS "Kirim ulang atau pilih ganti metode dalam"';
    return await $(`-ios predicate string:${elem}`);
  }


}
export default new OtpPageIos();
