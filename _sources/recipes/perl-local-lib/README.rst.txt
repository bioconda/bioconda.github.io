.. title:: Package Recipe 'perl-local-lib'
.. highlight: bash


perl-local-lib
==============

.. conda:recipe:: perl-local-lib
   :replaces_section_title:

   create and use a local lib\/ for perl modules with PERL5LIB

   :homepage: http://metacpan.org/pod/local::lib
   :license: perl_5
   :recipe: /`perl-local-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib/meta.yaml>`_

   


.. conda:package:: perl-local-lib

   |downloads_perl-local-lib| |docker_perl-local-lib|

   :versions: 2.000024

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-extutils-makemaker`  :conda:package:`perl-module-build`  

   :required~by: |required_by_perl-local-lib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-local-lib

   and update with::

      conda update perl-local-lib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-local-lib


.. |required_by_perl-local-lib| conda:required_by:: perl-local-lib
.. |downloads_perl-local-lib| image:: https://img.shields.io/conda/dn/bioconda/perl-local-lib.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-local-lib| image:: https://quay.io/repository/biocontainers/perl-local-lib/status
   :target: https://quay.io/repository/biocontainers/perl-local-lib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-local-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-local-lib/README.html

