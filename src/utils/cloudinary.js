import imageCompression from 'browser-image-compression'

const CLOUD_NAME = 'sndhwqgc'
const UPLOAD_PRESET = 'crochet_walididi'

export async function uploadImageToCloudinary(file) {

  const compressedFile = await imageCompression(file, {
    maxSizeMB: 0.7,
    maxWidthOrHeight: 1200,
    useWebWorker: true,
    initialQuality: 0.8,
  })

  // 👇 Add these logs here
  console.log(
    `Original: ${(file.size / 1024 / 1024).toFixed(2)} MB`
  )

  console.log(
    `Compressed: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`
  )

  const formData = new FormData()
  formData.append('file', compressedFile)
  formData.append('upload_preset', UPLOAD_PRESET)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )

  if (!response.ok) {
    throw new Error('Image upload failed')
  }

  const data = await response.json()

  return data.secure_url
}