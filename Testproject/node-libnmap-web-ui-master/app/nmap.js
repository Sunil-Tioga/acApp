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

var path = 'scans/'
  , fs = require('fs')
  , lib = require('node-libnmap');

/* Create a queue based system to populate these values */
var opts = {
  range: ['192.168.2.1/24']
};

/* Perform scan on queued range(s) */
lib.nmap('scan', opts, function(err, report){
  if (err) throw err;

  report.forEach(function(item){
    var data = JSON.stringify(item[0])
      , filename = item[0].hostname || item[0].ip;

    /* Write detailed report */
    fs.writeFile(path+filename+'.json', data, function(error){
      if (error) throw error;
      console.log('Wrote report for '+filename);
    });
  });
});
