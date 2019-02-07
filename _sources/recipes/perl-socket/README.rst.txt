.. title:: Package Recipe 'perl-socket'
.. highlight: bash


perl-socket
===========

.. conda:recipe:: perl-socket/2.027
   :replaces_section_title:

   networking constants and support functions

   :homepage: http://metacpan.org/pod/Socket
   :license: perl_5
   :recipe: /`perl-socket <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket>`_/`2.027 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket/2.027>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket/2.027/meta.yaml>`_

   


.. conda:package:: perl-socket

   |downloads_perl-socket| |docker_perl-socket|

   :versions: 2.027

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-socket|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-socket

   and update with::

      conda update perl-socket

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-socket


.. |required_by_perl-socket| conda:required_by:: perl-socket
.. |downloads_perl-socket| image:: https://img.shields.io/conda/dn/bioconda/perl-socket.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-socket| image:: https://quay.io/repository/biocontainers/perl-socket/status
   :target: https://quay.io/repository/biocontainers/perl-socket







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-socket/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-socket/README.html

