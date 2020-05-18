:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaarray'
.. highlight: bash

bioconductor-metaarray
======================

.. conda:recipe:: bioconductor-metaarray
   :replaces_section_title:

   Integration of Microarray Data for Meta\-analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/metaArray.html
   :license: LGPL-2
   :recipe: /`bioconductor-metaarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaarray/meta.yaml>`_
   :links: biotools: :biotools:`metaarray`, doi: :doi:`10.1186/1471-2105-8-364`

   1\) Data transformation for meta\-analysis of microarray Data\: Transformation of gene expression data to signed probability scale \(MCMC\/EM methods\) 2\) Combined differential expression on raw scale\: Weighted Z\-score after stabilizing mean\-variance relation within platform


.. conda:package:: bioconductor-metaarray

   |downloads_bioconductor-metaarray| |docker_bioconductor-metaarray|

   :versions: 1.66.0-0, 1.64.0-0, 1.62.0-1, 1.60.0-1, 1.60.0-0, 1.58.0-0, 1.56.0-0, 1.54.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-mergemaid: >=2.59.0,<2.60.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaarray

   and update with::

      conda update bioconductor-metaarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaarray:<tag>

   (see `bioconductor-metaarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaarray
   :alt:   (downloads)
.. |docker_bioconductor-metaarray| image:: https://quay.io/repository/biocontainers/bioconductor-metaarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaarray
.. _`bioconductor-metaarray/tags`: https://quay.io/repository/biocontainers/bioconductor-metaarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaarray/README.html