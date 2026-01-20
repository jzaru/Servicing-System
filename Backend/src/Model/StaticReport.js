export async function ReportSchema(
  userid,
  title,
  description,
) {
  return {
    User_id: `${userid}`,
    Title: `${title}`,
    Description: `${description}`,
    Status: 'in progress',
    ReportedAt: new Date(),
    ResolveAt: null,
  }
}