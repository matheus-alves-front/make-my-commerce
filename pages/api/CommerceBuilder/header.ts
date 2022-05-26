// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    logo_size: number;
    icon_color: string;
    icon_size: number;
}

export default function headerConfig(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  const {
    logoSize,
    iconSize,
    iconColor
  } = request.body

  return response.status(200).json({
    logo_size: 200,
    icon_size: 30,
    icon_color: '#000000',
  })
}
