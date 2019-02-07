.. title:: Package Recipe 'perl-file-fetch'
.. highlight: bash


perl-file-fetch
===============

.. conda:recipe:: perl-file-fetch
   :replaces_section_title:

   Generic file fetching code

   :homepage: http://metacpan.org/pod/File::Fetch
   :license: perl_5
   :recipe: /`perl-file-fetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-fetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-fetch/meta.yaml>`_

   


.. conda:package:: perl-file-fetch

   |downloads_perl-file-fetch| |docker_perl-file-fetch|

   :versions: 0.56, 0.48

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-file-path`  :conda:package:`perl-ipc-cmd`  :conda:package:`perl-locale-maketext-simple`  :conda:package:`perl-module-load-conditional`  :conda:package:`perl-params-check`  

   :required~by: |required_by_perl-file-fetch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-fetch

   and update with::

      conda update perl-file-fetch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-fetch


.. |required_by_perl-file-fetch| conda:required_by:: perl-file-fetch
.. |downloads_perl-file-fetch| image:: https://img.shields.io/conda/dn/bioconda/perl-file-fetch.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-fetch| image:: https://quay.io/repository/biocontainers/perl-file-fetch/status
   :target: https://quay.io/repository/biocontainers/perl-file-fetch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-fetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-fetch/README.html

