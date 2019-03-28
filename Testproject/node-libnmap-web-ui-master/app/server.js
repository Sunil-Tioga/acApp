/*
 * node-libnmap-web-ui
 *
 * Copyright 2014 Jason Gerfen
 * All rights reserved.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

var fs = require('fs')
  , http = require('http')
  , mime = require('mime')
  , path = require('path')
  , url = require("url");

http.createServer(function(req, res) {

  var uri = url.parse(req.url).pathname
    , filename = path.join(process.cwd(), uri)
    , type = mime.lookup(filename) || 'text/plain';

  fs.exists(filename, function(exists) {
    if (!exists) {
      res.writeHead(404, {
        'Content-Type': type
      });
      res.write('404 Not Found');
      res.end();
      return;
    } else {
      if (fs.statSync(filename).isDirectory())
        filename += 'index.html';

      fs.readFile(filename, function(err, file) {
        if (err) {
          res.writeHead(500, {
            'Content-Type': type
          });
          res.write(err);
          res.end();
          return;
        }

        res.write(file, 'binary');
        res.end();
      });
    }
  });
}).listen(process.env.PORT || 3000);

app.listen(port);