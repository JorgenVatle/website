<?php
namespace Destiny\Minecraft;

use Destiny\Common\Application;
use Destiny\Common\Service;
use Doctrine\DBAL\DBALException;

/**
 * @method static MineCraftService instance()
 */
class MineCraftService extends Service {

    /**
     * @param $userid
     * @param $uuid
     * @return bool
     * @throws DBALException
     */
    public function setMinecraftUUID($userid, $uuid) {
        $conn = Application::getDbConn();
        $stmt = $conn->prepare("
          UPDATE dfl_users SET minecraftuuid = :uuid
          WHERE userId = :userid AND (minecraftuuid IS NULL OR minecraftuuid = '')
          LIMIT 1
        ");
        $stmt->bindValue('userid', $userid, \PDO::PARAM_INT);
        $stmt->bindValue('uuid', $uuid, \PDO::PARAM_STR);
        $stmt->execute();
        return (bool)$stmt->rowCount();
    }
}