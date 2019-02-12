:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gigsea'
.. highlight: bash

bioconductor-gigsea
===================

.. conda:recipe:: bioconductor-gigsea
   :replaces_section_title:

   We presented the Genotype\-imputed Gene Set Enrichment Analysis \(GIGSEA\)\, a novel method that uses GWAS\-and\-eQTL\-imputed trait\-associated differential gene expression to interrogate gene set enrichment for the trait\-associated SNPs. By incorporating eQTL from large gene expression studies\, e.g. GTEx\, GIGSEA appropriately addresses such challenges for SNP enrichment as gene size\, gene boundary\, SNP distal regulation\, and multiple\-marker regulation. The weighted linear regression model\, taking as weights both imputation accuracy and model completeness\, was used to perform the enrichment test\, properly adjusting the bias due to redundancy in different gene sets. The permutation test\, furthermore\, is used to evaluate the significance of enrichment\, whose efficiency can be largely elevated by expressing the computational intensive part in terms of large matrix operation. We have shown the appropriate type I error rates for GIGSEA \(\<5\%\)\, and the preliminary results also demonstrate its good performance to uncover the real signal.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GIGSEA.html
   :license: LGPL-3
   :recipe: /`bioconductor-gigsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigsea/meta.yaml>`_

   


.. conda:package:: bioconductor-gigsea

   |downloads_bioconductor-gigsea| |docker_bioconductor-gigsea|

   :versions: 1.0.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-locfdr: 
   
   :depends r-mass: 
   
   :depends r-matrix: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gigsea

   and update with::

      conda update bioconductor-gigsea

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gigsea:<tag>

   (see `bioconductor-gigsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gigsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gigsea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gigsea| image:: https://quay.io/repository/biocontainers/bioconductor-gigsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gigsea
.. _`bioconductor-gigsea/tags`: https://quay.io/repository/biocontainers/bioconductor-gigsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gigsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gigsea/README.html