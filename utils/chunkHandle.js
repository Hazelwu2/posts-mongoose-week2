const handleBuffer = async (req) => {
  try {
    const buffers = []

    for await (const chunk of req) {
      buffers.push(chunk)
    }
    return JSON.parse(Buffer.concat(buffers).toString())

  } catch (error) {
    throw error
  }
}

module.exports = {
  handleBuffer
}