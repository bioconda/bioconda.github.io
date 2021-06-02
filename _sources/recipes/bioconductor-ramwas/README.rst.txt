:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ramwas'
.. highlight: bash

bioconductor-ramwas
===================

.. conda:recipe:: bioconductor-ramwas
   :replaces_section_title:
   :noindex:

   Fast Methylome\-Wide Association Study Pipeline for Enrichment Platforms

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ramwas.html
   :license: LGPL-3
   :recipe: /`bioconductor-ramwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramwas/meta.yaml>`_

   A complete toolset for methylome\-wide association studies \(MWAS\). It is specifically designed for data from enrichment based methylation assays\, but can be applied to other data as well. The analysis pipeline includes seven steps\: \(1\) scanning aligned reads from BAM files\, \(2\) calculation of quality control measures\, \(3\) creation of methylation score \(coverage\) matrix\, \(4\) principal component analysis for capturing batch effects and detection of outliers\, \(5\) association analysis with respect to phenotypes of interest while correcting for top PCs and known covariates\, \(6\) annotation of significant findings\, and \(7\) multi\-marker analysis \(methylation risk score\) using elastic net. Additionally\, RaMWAS include tools for joint analysis of methlyation and genotype data. This work is published in Bioinformatics\, Shabalin et al. \(2018\) \<doi\:10.1093\/bioinformatics\/bty069\>.


.. conda:package:: bioconductor-ramwas

   |downloads_bioconductor-ramwas| |docker_bioconductor-ramwas|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-digest: 
   :depends r-filematrix: 
   :depends r-glmnet: 
   :depends r-kernsmooth: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ramwas

   and update with::

      conda update bioconductor-ramwas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ramwas:<tag>

   (see `bioconductor-ramwas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ramwas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ramwas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ramwas
   :alt:   (downloads)
.. |docker_bioconductor-ramwas| image:: https://quay.io/repository/biocontainers/bioconductor-ramwas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ramwas
.. _`bioconductor-ramwas/tags`: https://quay.io/repository/biocontainers/bioconductor-ramwas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ramwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ramwas/README.html