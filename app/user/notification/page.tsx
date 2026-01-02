import UserWrapper from "@/components/pages/user/user-wrapper";
import NotificationCard from "@/components/shared/notification-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_NOTIFICATIONS } from "@/lib/meta";
import { NotificationType } from "@/types/notification.type";

export default function UserNotificationPage() {
  const notificationStatus = Object.values(NotificationType);

  return (
    <UserWrapper header="Notification">
      <Tabs defaultValue={NotificationType.ALL}>
        <TabsList>
          {notificationStatus.map((status) => (
            <TabsTrigger
              key={status}
              value={status}
              className="capitalize px-6"
            >
              {status}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="bg-card rounded-md p-4 mt-4 border">
          {notificationStatus.map((status) => {
            const filteredNotifications =
              status === NotificationType.ALL
                ? MOCK_NOTIFICATIONS
                : MOCK_NOTIFICATIONS.filter((n) => n.type === status);

            return (
              <TabsContent key={status} value={status}>
                <ul className="divide-y">
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((noti) => (
                      <NotificationCard key={noti.id} data={noti} />
                    ))
                  ) : (
                    <p className="text-center py-10 text-muted-foreground">
                      Không có thông báo nào trong mục này.
                    </p>
                  )}
                </ul>
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </UserWrapper>
  );
}
