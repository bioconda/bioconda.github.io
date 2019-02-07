.. title:: Package Recipe 'unitas'
.. highlight: bash


unitas
======

.. conda:recipe:: unitas
   :replaces_section_title:

   unitas is a convenient tool for efficient annotation of small non\-coding RNA sequence datasets produced by Next Generation Sequencing.

   :homepage: http://www.smallrnagroup.uni-mainz.de/software.html
   :license: Creative Commons Attribution Non-Commercial License V2.0
   :recipe: /`unitas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitas/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1186/s12864-017-4031-9`

   


.. conda:package:: unitas

   |downloads_unitas| |docker_unitas|

   :versions: 1.6.1

   :depends: :conda:package:`dnapi`  :conda:package:`perl`  :conda:package:`perl-archive-extract`  :conda:package:`perl-file-path`  :conda:package:`perl-getopt-long`  :conda:package:`perl-lwp-simple`  :conda:package:`perl-statistics-distributions`  :conda:package:`seqmap`  

   :required~by: |required_by_unitas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unitas

   and update with::

      conda update unitas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/unitas


.. |required_by_unitas| conda:required_by:: unitas
.. |downloads_unitas| image:: https://img.shields.io/conda/dn/bioconda/unitas.svg?style=flat
   :alt:   (downloads)
.. |docker_unitas| image:: https://quay.io/repository/biocontainers/unitas/status
   :target: https://quay.io/repository/biocontainers/unitas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitas/README.html

