:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneselector'
.. highlight: bash

bioconductor-geneselector
=========================

.. conda:recipe:: bioconductor-geneselector
   :replaces_section_title:

   The term \'GeneSelector\' refers to a filter selecting those genes which are consistently identified as differentially expressed using various statistical procedures. \'Selected\' genes are those present at the top of the list in various ranking methods \(currently 14\). In addition\, the stability of the findings can be taken into account in the final ranking by examining perturbed versions of the original data set\, e.g. by leaving samples\, swapping class labels\, generating bootstrap replicates or adding noise. Given multiple ranked lists\, one can use aggregation methods in order to find a synthesis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GeneSelector.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geneselector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneselector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneselector/meta.yaml>`_
   :links: biotools: :biotools:`geneselector`, doi: :doi:`10.1093/bib/bbp034`

   


.. conda:package:: bioconductor-geneselector

   |downloads_bioconductor-geneselector| |docker_bioconductor-geneselector|

   :versions: 2.32.0-0, 2.30.0-0, 2.28.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   :depends bioconductor-siggenes: >=1.56.0,<1.57.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-samr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneselector

   and update with::

      conda update bioconductor-geneselector

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneselector:<tag>

   (see `bioconductor-geneselector/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneselector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneselector.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-geneselector| image:: https://quay.io/repository/biocontainers/bioconductor-geneselector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneselector
.. _`bioconductor-geneselector/tags`: https://quay.io/repository/biocontainers/bioconductor-geneselector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneselector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneselector/README.html