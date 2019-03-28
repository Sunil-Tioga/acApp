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

var names = {}
  , results = []
  , path = 'scans/'
  , fs = require('fs');

fs.readdir(path, function(err, files){
  if (files.length > 0) {
    files.forEach(function(file){
      if (!/index/i.test(file)) {
        names = {
          host: file.split('.json')[0],
          file: file
        };
        results.push(names);
      }
    });
  }

  fs.writeFile(path+'index.json', JSON.stringify(results), function(error){
    if (error) throw error;
    console.log('Created new index.json with latest reports');
  });
});
