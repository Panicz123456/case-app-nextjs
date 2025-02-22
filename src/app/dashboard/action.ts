'use server'

import { db } from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";

export const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  await db.order.update({
    where: {
      id,
    },
    data: {
      status: newStatus,
    },
  });
};
