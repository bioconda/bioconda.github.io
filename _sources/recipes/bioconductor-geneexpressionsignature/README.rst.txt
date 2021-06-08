:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneexpressionsignature'
.. highlight: bash

bioconductor-geneexpressionsignature
====================================

.. conda:recipe:: bioconductor-geneexpressionsignature
   :replaces_section_title:
   :noindex:

   Gene Expression Signature based Similarity Metric

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GeneExpressionSignature.html
   :license: GPL-2
   :recipe: /`bioconductor-geneexpressionsignature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneexpressionsignature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneexpressionsignature/meta.yaml>`_

   This package gives the implementations of the gene expression signature and its distance to each. Gene expression signature is represented as a list of genes whose expression is correlated with a biological state of interest. And its distance is defined using a nonparametric\, rank\-based pattern\-matching strategy based on the Kolmogorov\-Smirnov statistic. Gene expression signature and its distance can be used to detect similarities among the signatures of drugs\, diseases\, and biological states of interest.


.. conda:package:: bioconductor-geneexpressionsignature

   |downloads_bioconductor-geneexpressionsignature| |docker_bioconductor-geneexpressionsignature|

   :versions:
      
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneexpressionsignature

   and update with::

      conda update bioconductor-geneexpressionsignature

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneexpressionsignature:<tag>

   (see `bioconductor-geneexpressionsignature/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneexpressionsignature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneexpressionsignature.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneexpressionsignature
   :alt:   (downloads)
.. |docker_bioconductor-geneexpressionsignature| image:: https://quay.io/repository/biocontainers/bioconductor-geneexpressionsignature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneexpressionsignature
.. _`bioconductor-geneexpressionsignature/tags`: https://quay.io/repository/biocontainers/bioconductor-geneexpressionsignature?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneexpressionsignature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneexpressionsignature/README.html