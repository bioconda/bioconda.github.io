.. title:: Package Recipe 'perl-statistics-lite'
.. highlight: bash


perl-statistics-lite
====================

.. conda:recipe:: perl-statistics-lite
   :replaces_section_title:

   Small stats stuff.

   :homepage: http://metacpan.org/pod/Statistics-Lite
   :license: perl_5
   :recipe: /`perl-statistics-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-lite/meta.yaml>`_

   


.. conda:package:: perl-statistics-lite

   |downloads_perl-statistics-lite| |docker_perl-statistics-lite|

   :versions: 3.62

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-statistics-lite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-statistics-lite

   and update with::

      conda update perl-statistics-lite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-statistics-lite


.. |required_by_perl-statistics-lite| conda:required_by:: perl-statistics-lite
.. |downloads_perl-statistics-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-lite.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-statistics-lite| image:: https://quay.io/repository/biocontainers/perl-statistics-lite/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-lite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-lite/README.html

