import { WHATSAPP_NUMBER } from './placeOrder'
import { uploadImageToCloudinary } from './cloudinary'

function formatCustomRequestMessage(productName) {
  return [
    'Hi Crochet Wali Didi 🌸',
    'I would like to know if this crochet product can be made.',
    'Product Name:',
    productName?.trim() || 'Not specified',
    'I have attached the reference image.',
    'Please let me know:',
    '• Can this be made?',
    '• Price',
    '• Delivery time',
    'Thank you ❤️',
  ].join('\n')
}

export async function sendCustomRequestOnWhatsApp(productName, imageFile) {
  let imageUrl = ''

  try {
    imageUrl = await uploadImageToCloudinary(imageFile)
  } catch (error) {
    alert('Failed to upload image. Please try again.')
    return { success: false }
  }

  const message = [
    'Hi Crochet Wali Didi 🌸',
    '',
    "I'd like to know if this crochet product can be made.",
    '',
    `Product Name: ${productName?.trim() || 'Not specified'}`,
    '',
    `Reference Image: ${imageUrl}`,
    '',
    'Please let me know:',
    '• Can this be made?',
    '• Price',
    '• Delivery Time',
  ].join('\n')

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  window.open(whatsappUrl, '_blank')

  return { success: true }
}