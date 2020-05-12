:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drugvsdisease'
.. highlight: bash

bioconductor-drugvsdisease
==========================

.. conda:recipe:: bioconductor-drugvsdisease
   :replaces_section_title:

   Comparison of disease and drug profiles using Gene set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/DrugVsDisease.html
   :license: GPL-3
   :recipe: /`bioconductor-drugvsdisease <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugvsdisease>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugvsdisease/meta.yaml>`_
   :links: biotools: :biotools:`drugvsdisease`, doi: :doi:`10.1038/nmeth.3252`

   This package generates ranked lists of differential gene expression for either disease or drug profiles. Input data can be downloaded from Array Express or GEO\, or from local CEL files. Ranked lists of differential expression and associated p\-values are calculated using Limma. Enrichment scores \(Subramanian et al. PNAS 2005\) are calculated to a reference set of default drug or disease profiles\, or a set of custom data supplied by the user. Network visualisation of significant scores are output in Cytoscape format.


.. conda:package:: bioconductor-drugvsdisease

   |downloads_bioconductor-drugvsdisease| |docker_bioconductor-drugvsdisease|

   :versions: 2.30.0-0, 2.28.0-1, 2.26.0-1, 2.24.2-0, 2.22.0-0, 2.20.1-0
   
   :depends bioconductor-affy: >=1.66.0,<1.67.0
   :depends bioconductor-annotate: >=1.66.0,<1.67.0
   :depends bioconductor-arrayexpress: >=1.48.0,<1.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-cmap2data: >=1.24.0,<1.25.0
   :depends bioconductor-drugvsdiseasedata: >=1.24.0,<1.25.0
   :depends bioconductor-geoquery: >=2.56.0,<2.57.0
   :depends bioconductor-hgu133a.db: >=3.2.0,<3.3.0
   :depends bioconductor-hgu133a2.db: >=3.2.0,<3.3.0
   :depends bioconductor-hgu133plus2.db: >=3.2.0,<3.3.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-qvalue: >=2.20.0,<2.21.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-runit: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drugvsdisease

   and update with::

      conda update bioconductor-drugvsdisease

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drugvsdisease:<tag>

   (see `bioconductor-drugvsdisease/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drugvsdisease| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drugvsdisease.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drugvsdisease
   :alt:   (downloads)
.. |docker_bioconductor-drugvsdisease| image:: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease
.. _`bioconductor-drugvsdisease/tags`: https://quay.io/repository/biocontainers/bioconductor-drugvsdisease?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drugvsdisease/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drugvsdisease/README.html