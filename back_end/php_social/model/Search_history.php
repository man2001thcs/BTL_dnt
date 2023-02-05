<?php
require_once(dirname(__FILE__) . DS . "../lib/AppModel.php");
require_once(dirname(__FILE__) . DS . "../lib/Helper.php");
require_once(dirname(__FILE__) . DS . "../lib/Session.php");

class SearchHistory extends AppModel
{
	protected $table = 'search_history';
	protected $alias = 'SearchHistory';

	private $session = null;

	//private $cart = array();
	//private $cartNum = 0;

	protected $rules = array(
		"id" => array(
			"form" => array(
				"type" => "hidden"
			)
		),
		"user_id" => array(
			"form" => array(
				"type" => "text"
			),
			"notEmpty" => array(
				"rule" => "notEmpty",
				"message" => MSG_ERR_NOTEMPTY
			),
		),
		"search_body" => array(
			"form" => array(
				"type" => "text"
			),
			"notEmpty" => array(
				"rule" => "notEmpty",
				"message" => MSG_ERR_NOTEMPTY
			),
		),
		"type" => array(
			"form" => array(
				"type" => "text"
			),
			"isNumber" => array(
				"rule" => "isNumber",
				"message" => MSG_ERR_NUMER
			)
		),

	);

	//Type: 0 là bài viết, 1 friend


	public function __construct()
	{
		parent::__construct();

		$this->session = new Session();
	}

	public function get_search_history($user_id, $type, $limit = 0)
	{
		$mlimit = $limit + 5;
		$data = $this->find(
			array(
				'conditions' => array(
					$this->alias . '.user_id' => $user_id,
					$this->alias . '.type' => intval($type),
				),
				'orders' => $this->alias . '.created' . ' DESC',
				'limit' => $mlimit,
			),
			'all'
		);
		return $data;
	}

	public function find_search_history($user_id, $type, $search_body)
	{
		$data = $this->find(
			array(
				'conditions' => array(
					$this->alias . '.user_id' => $user_id,
					$this->alias . '.type' => intval($type),
					$this->alias . '.search_body' => "LIKE " . "'" . $search_body . "'",
				),
				'orders' => $this->alias . '.created' . ' DESC',
			),
			'first'
		);

		return $data;
	}

}