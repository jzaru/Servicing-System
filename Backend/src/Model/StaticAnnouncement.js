function AnnouncementSchema(req) {
  const { Title, Content, Createdby } = req.body;
  return {
    title: `${Title}`,
    content: `${Content}`,
    createdby: `${Createdby}`
  }
}

export default AnnouncementSchema;