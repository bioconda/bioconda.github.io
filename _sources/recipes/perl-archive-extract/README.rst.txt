.. title:: Package Recipe 'perl-archive-extract'
.. highlight: bash


perl-archive-extract
====================

.. conda:recipe:: perl-archive-extract
   :replaces_section_title:

   Generic archive extracting mechanism

   :homepage: http://metacpan.org/pod/Archive::Extract
   :license: perl_5
   :recipe: /`perl-archive-extract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract/meta.yaml>`_

   


.. conda:package:: perl-archive-extract

   |downloads_perl-archive-extract| |docker_perl-archive-extract|

   :versions: 0.80, 0.76

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-file-path`  :conda:package:`perl-ipc-cmd`  :conda:package:`perl-locale-maketext-simple`  :conda:package:`perl-module-load-conditional`  :conda:package:`perl-params-check` >=0.07 

   :required~by: |required_by_perl-archive-extract|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-archive-extract

   and update with::

      conda update perl-archive-extract

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-archive-extract


.. |required_by_perl-archive-extract| conda:required_by:: perl-archive-extract
.. |downloads_perl-archive-extract| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-extract.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-archive-extract| image:: https://quay.io/repository/biocontainers/perl-archive-extract/status
   :target: https://quay.io/repository/biocontainers/perl-archive-extract







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-extract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-extract/README.html

