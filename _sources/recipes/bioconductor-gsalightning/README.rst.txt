:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsalightning'
.. highlight: bash

bioconductor-gsalightning
=========================

.. conda:recipe:: bioconductor-gsalightning
   :replaces_section_title:

   GSALightning provides a fast implementation of permutation\-based gene set analysis for two\-sample problem. This package is particularly useful when testing simultaneously a large number of gene sets\, or when a large number of permutations is necessary for more accurate p\-values estimation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GSALightning.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-gsalightning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsalightning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsalightning/meta.yaml>`_
   :links: biotools: :biotools:`gsalightning`, doi: :doi:`10.1093/bioinformatics/btw349`

   


.. conda:package:: bioconductor-gsalightning

   |downloads_bioconductor-gsalightning| |docker_bioconductor-gsalightning|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsalightning

   and update with::

      conda update bioconductor-gsalightning

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsalightning:<tag>

   (see `bioconductor-gsalightning/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsalightning| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsalightning.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsalightning
   :alt:   (downloads)
.. |docker_bioconductor-gsalightning| image:: https://quay.io/repository/biocontainers/bioconductor-gsalightning/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsalightning
.. _`bioconductor-gsalightning/tags`: https://quay.io/repository/biocontainers/bioconductor-gsalightning?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsalightning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsalightning/README.html