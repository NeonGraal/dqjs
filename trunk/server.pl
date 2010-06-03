use strict;

$| = 1;

use HTTP::Daemon;
use HTTP::Status qw(:constants);

my($F, $path);
my $d = HTTP::Daemon->new || die;
print "Please contact me at: <URL:", $d->url, ">\n";
system "start ".$d->url;
while (my $c = $d->accept) {
	while (my $r = $c->get_request) {
		$path = substr($r->uri->path, 1);
		if ($r->method eq 'GET') {
			if ($r->uri->path eq "/") {
				$c->send_file_response("default.htm");
			} elsif (-r $path) {
				$c->send_file_response($path);
			} elsif ($path=~/\*/) {
				my @files = glob($path);
				$c->send_response(HTTP_OK, 'OK', undef, '["'.join('","', @files).'"]');
			} else {
				$c->send_error(HTTP_NOT_FOUND);
			}
		} elsif ($r->method eq 'PUT' and $path =~ /\.dq$/) {
			undef($F);
			eval {
				open $F, '>:utf8', $path;
				print $F $r->content;
				close $F;
			};
			if ($@) {
				$c->send_error(HTTP_INTERNAL_SERVER_ERROR, $@);
			} else {
				$c->send_file_response($path);
			}
		} elsif ($r->method eq 'DELETE' and $path =~ /\.dq$/) {
			eval {
				unlink $path;
			};
			if ($@) {
				$c->send_error(HTTP_INTERNAL_SERVER_ERROR, $@);
			} else {
				$c->send_response();
			}
		} else {
			$c->send_error(HTTP_FORBIDDEN);
		}
	}
	$c->close;
	undef($c);
}