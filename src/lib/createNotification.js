import { NotificationManager } from 'react-notifications'

export const createNotification = (type) => {
    return () => {
        switch (type) {
            case 'success':
                NotificationManager.success('Успешно!')
                break

            case 'error':
                NotificationManager.error('Error')
                break
            default:
                return
        }
    }
}
