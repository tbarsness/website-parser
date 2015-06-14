class { '::nodejs':
  manage_package_repo       => false,
  nodejs_dev_package_ensure => 'present',
  npm_package_ensure        => 'present',
  ensure  => 'present',
  package => 'express',
  target  => '/opt/packages',
}

package { 'express':
  ensure   => 'present',
  provider => 'npm',
}

package { 'mime':
  ensure   => '1.2.4',
  provider => 'npm',
}