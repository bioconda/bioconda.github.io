:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-davidtiling'
.. highlight: bash

bioconductor-davidtiling
========================

.. conda:recipe:: bioconductor-davidtiling
   :replaces_section_title:

   This package contains the data for the paper by L. David et al. in PNAS 2006 \(PMID 16569694\)\: 8 CEL files of Affymetrix genechips\, an ExpressionSet object with the raw feature data\, a probe annotation data structure for the chip and the yeast genome annotation \(GFF file\) that was used. In addition\, some custom\-written analysis functions are provided\, as well as R scripts in the scripts directory.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/davidTiling.html
   :license: LGPL
   :recipe: /`bioconductor-davidtiling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-davidtiling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-davidtiling/meta.yaml>`_

   


.. conda:package:: bioconductor-davidtiling

   |downloads_bioconductor-davidtiling| |docker_bioconductor-davidtiling|

   :versions: 1.25.0-0, 1.24.0-1, 1.22.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-go.db: >=3.10.0,<3.11.0
   :depends bioconductor-tilingarray: >=1.64.0,<1.65.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-davidtiling

   and update with::

      conda update bioconductor-davidtiling

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-davidtiling:<tag>

   (see `bioconductor-davidtiling/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-davidtiling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-davidtiling.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-davidtiling
   :alt:   (downloads)
.. |docker_bioconductor-davidtiling| image:: https://quay.io/repository/biocontainers/bioconductor-davidtiling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-davidtiling
.. _`bioconductor-davidtiling/tags`: https://quay.io/repository/biocontainers/bioconductor-davidtiling?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-davidtiling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-davidtiling/README.html