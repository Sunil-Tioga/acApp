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

'use strict';

var control = angular.module('scanControllers', []);

control.controller('list', function ($scope, $http) {
  $http.get('scans/index.json').success(function(data) {
			$scope.hosts = data;
  });
});

control.controller('search', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('scans/' + $routeParams.id + '.json').success(function(data) {
      $scope.scan = data;
    });
  }
]);

control.controller('details', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('scans/' + $routeParams.id + '.json').success(function(data) {
      $scope.scan = data;
    });
  }
]);
