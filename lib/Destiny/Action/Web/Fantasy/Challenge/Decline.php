<?php
namespace Destiny\Action\Web\Fantasy\Challenge;

use Destiny\Common\Service\Fantasy\ChallengeService;
use Destiny\Common\Utils\Http;
use Destiny\Common\MimeType;
use Destiny\Common\AppException;
use Destiny\Common\Session;
use Destiny\Common\Annotation\Action;
use Destiny\Common\Annotation\Route;
use Destiny\Common\Annotation\HttpMethod;
use Destiny\Common\Annotation\Secure;

/**
 * @Action
 */
class Decline {

	/**
	 * @Route ("/fantasy/challenge/decline")
	 * @Secure ({"USER"})
	 *
	 * @param array $params
	 * @throws AppException
	 */
	public function execute(array $params) {
		if (! isset ( $params ['teamId'] ) || empty ( $params ['teamId'] )) {
			throw new AppException ( 'teamId required.' );
		}
		if (intval ( $params ['teamId'] ) == intval ( Session::get ( 'teamId' ) )) {
			throw new AppException ( 'Play with yourself?' );
		}
		$response = array (
			'success' => true,
			'data' => array (),
			'message' => '' 
		);
		$response ['response'] = ChallengeService::instance ()->declineChallenge ( intval ( $params ['teamId'] ), intval ( Session::get ( 'teamId' ) ) );
		$response ['message'] = ($response ['response']) ? 'Declined' : 'Failed!';
		Http::header ( Http::HEADER_CONTENTTYPE, MimeType::JSON );
		Http::sendString ( json_encode ( $response ) );
	}

}