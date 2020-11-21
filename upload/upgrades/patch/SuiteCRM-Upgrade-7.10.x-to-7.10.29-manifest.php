<?php
$manifest = [
    'name' => 'SuiteCRM',
    'author' => 'SalesAgility',
    'type' => 'patch',
    'published_date' => '2020-11-05 12:00:00',
    'version' => '7.10.29',
    'is_uninstallable' => false,

    'acceptable_suitecrm_versions' =>
        [
            'regex_matches' =>
                [
                    '^7.10(-*)',
                    '^7.10(.*)'
                ],
        ],

    'copy_files' =>
        [
            'from_dir' => 'SuiteCRM-Upgrade-7.10.x-to-7.10.29',
            'to_dir' => '',
        ],
];
