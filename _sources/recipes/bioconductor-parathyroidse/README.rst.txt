:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-parathyroidse'
.. highlight: bash

bioconductor-parathyroidse
==========================

.. conda:recipe:: bioconductor-parathyroidse
   :replaces_section_title:

   RangedSummarizedExperiment for RNA\-Seq of primary cultures of parathyroid tumors by Haglund et al.\, J Clin Endocrinol Metab 2012.

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/parathyroidSE.html
   :license: LGPL
   :recipe: /`bioconductor-parathyroidse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parathyroidse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parathyroidse/meta.yaml>`_

   This package provides RangedSummarizedExperiment objects of read counts in genes and exonic parts for paired\-end RNA\-Seq data from experiments on primary cultures of parathyroid tumors.  The data were presented in the article \"Evidence of a Functional Estrogen Receptor in Parathyroid Adenomas\" by Haglund F\, Ma R\, Huss M\, Sulaiman L\, Lu M\, Nilsson IL\, Hoog A\, Juhlin CC\, Hartman J\, Larsson C\, J Clin Endocrinol Metab. jc.2012\-2484\, Epub 2012 Sep 28\, PMID\: 23024189.  The sequencing was performed on tumor cultures from 4 patients at 2 time points over 3 conditions \(DPN\, OHT and control\).  One control sample was omitted by the paper authors due to low quality. The package vignette describes the creation of the object from raw sequencing data provided by NCBI Gene Expression Omnibus under accession number GSE37211.  The gene and exon features are the GRCh37 Ensembl annotations.


.. conda:package:: bioconductor-parathyroidse

   |downloads_bioconductor-parathyroidse| |docker_bioconductor-parathyroidse|

   :versions: 1.24.0-0, 1.22.0-1, 1.20.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-parathyroidse

   and update with::

      conda update bioconductor-parathyroidse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-parathyroidse:<tag>

   (see `bioconductor-parathyroidse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-parathyroidse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-parathyroidse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-parathyroidse
   :alt:   (downloads)
.. |docker_bioconductor-parathyroidse| image:: https://quay.io/repository/biocontainers/bioconductor-parathyroidse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-parathyroidse
.. _`bioconductor-parathyroidse/tags`: https://quay.io/repository/biocontainers/bioconductor-parathyroidse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html