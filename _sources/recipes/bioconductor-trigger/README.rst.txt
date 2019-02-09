.. title:: Package Recipe 'bioconductor-trigger'
.. highlight: bash


bioconductor-trigger
====================

.. conda:recipe:: bioconductor-trigger
   :replaces_section_title:

   This R package provides tools for the statistical analysis of integrative genomic data that involve some combination of\: genotypes\, high\-dimensional intermediate traits \(e.g.\, gene expression\, protein abundance\)\, and higher\-order traits \(phenotypes\). The package includes functions to\: \(1\) construct global linkage maps between genetic markers and gene expression\; \(2\) analyze multiple\-locus linkage \(epistasis\) for gene expression\; \(3\) quantify the proportion of genome\-wide variation explained by each locus and identify eQTL hotspots\; \(4\) estimate pair\-wise causal gene regulatory probabilities and construct gene regulatory networks\; and \(5\) identify causal genes for a quantitative trait of interest.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/trigger.html
   :license: GPL-3
   :recipe: /`bioconductor-trigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trigger/meta.yaml>`_
   :links: biotools: :biotools:`trigger`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-trigger

   |downloads_bioconductor-trigger| |docker_bioconductor-trigger|

   :versions: 1.28.0, 1.26.0, 1.24.0

   :depends: :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  :conda:package:`r-qtl`  

   :required~by: |required_by_bioconductor-trigger|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trigger

   and update with::

      conda update bioconductor-trigger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-trigger


.. |required_by_bioconductor-trigger| conda:required_by:: bioconductor-trigger
.. |downloads_bioconductor-trigger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trigger.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-trigger| image:: https://quay.io/repository/biocontainers/bioconductor-trigger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trigger







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trigger/README.html

