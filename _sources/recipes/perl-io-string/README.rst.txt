.. title:: Package Recipe 'perl-io-string'
.. highlight: bash


perl-io-string
==============

.. conda:recipe:: perl-io-string
   :replaces_section_title:

   Emulate file interface for in\-core strings

   :homepage: http://metacpan.org/pod/IO-String
   :license: unknown
   :recipe: /`perl-io-string <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-string>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-string/meta.yaml>`_

   


.. conda:package:: perl-io-string

   |downloads_perl-io-string| |docker_perl-io-string|

   :versions: 1.08

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-io-string|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-string

   and update with::

      conda update perl-io-string

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-string


.. |required_by_perl-io-string| conda:required_by:: perl-io-string
.. |downloads_perl-io-string| image:: https://img.shields.io/conda/dn/bioconda/perl-io-string.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-string| image:: https://quay.io/repository/biocontainers/perl-io-string/status
   :target: https://quay.io/repository/biocontainers/perl-io-string







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-string/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-string/README.html

