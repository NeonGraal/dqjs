use strict;

$| = 1;

use HTTP::Daemon;
use HTTP::Status;

my($F, $path);
my $d = HTTP::Daemon->new || die;
print "Please contact me at: <URL:", $d->url, ">\n";
system "start ".$d->url;
while (my $c = $d->accept) {
	while (my $r = $c->get_request) {
		if ($r->method eq 'GET') {
			$path = substr($r->uri->path, 1);
			if ($r->uri->path eq "/") {
				$c->send_file_response("default.htm");
			} elsif (-r $path) {
				$c->send_file_response($path);
			} else {
				print "Unable to find '".$path."'\n";
			}
		}
		elsif ($r->method eq 'PUT' and $r->uri->path =~ /\.dq$/) {
			undef($F);
			open $F, '>:utf8', $r->uri->path;
			print $F $r->content;
			close $F;
		} else {
			$c->send_error(RC_FORBIDDEN)
		}
	}
	$c->close;
	undef($c);
}