.. title:: Package Recipe 'perl-mldbm-sync'
.. highlight: bash


perl-mldbm-sync
===============

.. conda:recipe:: perl-mldbm-sync
   :replaces_section_title:

   safe concurrent access to MLDBM databases

   :homepage: http://metacpan.org/pod/MLDBM-Sync
   :license: unknown
   :recipe: /`perl-mldbm-sync <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm-sync>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm-sync/meta.yaml>`_

   


.. conda:package:: perl-mldbm-sync

   |downloads_perl-mldbm-sync| |docker_perl-mldbm-sync|

   :versions: 0.30

   :depends: :conda:package:`perl-mldbm`  :conda:package:`perl-threaded`  :conda:package:`perl-tie-cache`  

   :required~by: |required_by_perl-mldbm-sync|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mldbm-sync

   and update with::

      conda update perl-mldbm-sync

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mldbm-sync


.. |required_by_perl-mldbm-sync| conda:required_by:: perl-mldbm-sync
.. |downloads_perl-mldbm-sync| image:: https://img.shields.io/conda/dn/bioconda/perl-mldbm-sync.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mldbm-sync| image:: https://quay.io/repository/biocontainers/perl-mldbm-sync/status
   :target: https://quay.io/repository/biocontainers/perl-mldbm-sync







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mldbm-sync/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mldbm-sync/README.html

