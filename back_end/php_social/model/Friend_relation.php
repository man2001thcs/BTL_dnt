<?php
require_once(dirname(__FILE__) . DS . "../lib/AppModel.php");
require_once(dirname(__FILE__) . DS . "../lib/Helper.php");
require_once(dirname(__FILE__) . DS . "../lib/Session.php");

class Friend_relation extends AppModel
{
	protected $table = 'friend_relation';
	protected $alias = 'FriendRelation';

	private $session = null;

	//private $cart = array();
	//private $cartNum = 0;

	protected $rules = array(
		"id" => array(
			"form" => array(
				"type" => "hidden"
			)
		),
		"user_account_1" => array(
			"form" => array(
				"type" => "text"
			),
			"notEmpty" => array(
				"rule" => "notEmpty",
				"message" => MSG_ERR_NOTEMPTY
			),
			"isEmail" => array(
				"rule" => "email",
				"message" => MSG_ERR_EMAIL
			)
		),
		"user_account_2" => array(
			"form" => array(
				"type" => "text"
			),
			"notEmpty" => array(
				"rule" => "notEmpty",
				"message" => MSG_ERR_NOTEMPTY
			),
			"isEmail" => array(
				"rule" => "email",
				"message" => MSG_ERR_EMAIL
			)
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

	//Type: 0 chưa là gì, 1 là bạn
	//, 2 là gỡ khỏi suggest list, 3 là block

	public function __construct()
	{
		parent::__construct();

		$this->session = new Session();
	}

	public function get_friend_request_all($account, $limit = 0)
	{
		$user_this = new User();

		$data_sql = $user_this->return_select_sql(
			array(
				'fields' => array('email', 'fullname', 'id'),
			)
		);

		$mlimit = $limit + 10;

		$data = $this->find(
			array(
				'joins' => array(
					'user' => array(
						'type' => "INNER",
						'on_join' => $data_sql,
						'main_key' => 'user_account_1',
						'join_key' => 'email',
						'alias_main' => 'FriendRelation',
						'alias_sub' => 'User',
					)
				),
				'conditions' => array(
					$this->alias . '.user_account_2' => $account,
					$this->alias . '.type' => 0,
				),
				'limit' => $mlimit,
			),
			'all'
		);

		return $data;
	}

	public function get_friend_request_number($account)
	{
		$user_this = new User();

		$data_sql = $user_this->return_select_sql(
			array(
				'fields' => array('email', 'fullname', 'id'),
			)
		);

		$data = $this->find(
			array(
				'joins' => array(
					'user' => array(
						'type' => "INNER",
						'on_join' => $data_sql,
						'main_key' => 'user_account_1',
						'join_key' => 'email',
						'alias_main' => 'FriendRelation',
						'alias_sub' => 'User',
					)
				),
				'conditions' => array(
					$this->alias . '.user_account_2' => $account,
					$this->alias . '.type' => 0,
				),
			),
			'all'
		);

		return sizeof($data);
	}

	public function get_mutual_friends_number($account1, $account2)
    {

        $data_sql = $this->return_select_sql(
            array(
                'conditions' => array(
					"type" => 1,
                    "user_account_1" => "LIKE " . "'" . $account2 . "'",
                ),
            )
        );

        $data = $this->find(
            array(
                'joins' => array(
                    'FriendRelation2' => array(
                        'type' => "INNER",
                        'on_join' => $data_sql,
                        'main_key' => 'user_account_2',
                        'join_key' => 'user_account_2',
                        'alias_main' => 'FriendRelation',
                        'alias_sub' => 'FriendRelation_2',
                    )
                ),
                'conditions' => array(
                    "FriendRelation.type" => 1,
                    $this->alias . ".user_account_1" =>  "LIKE " . "'" . $account1 . "'",
                ),
            ),
            'all'
        );

        return sizeof($data);
    }

	public function get_friend_request_single($account_1, $account_2)
	{

		$data = $this->find(
			array(
				'conditions' => array(
					$this->alias . '.user_account_1' => $account_1,
					$this->alias . '.user_account_2' => $account_2,
				),
			),
			'first'
		);

		return $data;
	}


	public function get_friend_state($account_1, $account_2)
	{

		$data1 = $this->find(
			array(
				'conditions' => array(
					$this->alias . '.user_account_1' => $account_1,
					$this->alias . '.user_account_2' => $account_2,
					$this->alias . '.type' => "IN(0,1,2,3)",
				),
			),
			'first'
		);

		$data2 = $this->find(
			array(
				'conditions' => array(
					$this->alias . '.user_account_1' => $account_2,
					$this->alias . '.user_account_2' => $account_1,
					$this->alias . '.type' => "IN(0,1,2,3)",
				),
			),
			'first'
		);

		return array("first" => $data1, "second" => $data2);
	}
}