:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bedr'
.. highlight: bash

r-bedr
======

.. conda:recipe:: r-bedr
   :replaces_section_title:

   Genomic regions processing using open\-source command line tools such as \'BEDTools\'\, \'BEDOPS\' and \'Tabix\'.  These tools offer scalable and efficient utilities to perform genome arithmetic e.g indexing\, formatting and merging. bedr API enhances access to these tools as well as offers additional utilities for genomic regions processing.

   :homepage: https://CRAN.R-project.org/package=bedr
   :license: GPL2 / GPL-2
   :recipe: /`r-bedr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedr/meta.yaml>`_

   


.. conda:package:: r-bedr

   |downloads_r-bedr| |docker_r-bedr|

   :versions: 1.0.4-1, 1.0.4-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: >=1.8.11
   
   :depends r-r.utils: >=2.0.2
   
   :depends r-testthat: >=0.7.1
   
   :depends r-venndiagram: >=1.6.4
   
   :depends r-yaml: >=2.1.10
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bedr

   and update with::

      conda update r-bedr

   or use the docker container::

      docker pull quay.io/biocontainers/r-bedr:<tag>

   (see `r-bedr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bedr| image:: https://img.shields.io/conda/dn/bioconda/r-bedr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bedr| image:: https://quay.io/repository/biocontainers/r-bedr/status
   :target: https://quay.io/repository/biocontainers/r-bedr
.. _`r-bedr/tags`: https://quay.io/repository/biocontainers/r-bedr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bedr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bedr/README.html