:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coexnet'
.. highlight: bash

bioconductor-coexnet
====================

.. conda:recipe:: bioconductor-coexnet
   :replaces_section_title:
   :noindex:

   coexnet\: An R package to build CO\-EXpression NETworks from Microarray Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/coexnet.html
   :license: LGPL
   :recipe: /`bioconductor-coexnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coexnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coexnet/meta.yaml>`_

   Extracts the gene expression matrix from GEO DataSets \(.CEL files\) as a AffyBatch object. Additionally\, can make the normalization process using two different methods \(vsn and rma\). The summarization \(pass from multi\-probe to one gene\) uses two different criteria \(Maximum value and Median of the samples expression data\) and the process of gene differentially expressed analisys using two methods \(sam and acde\). The construction of the co\-expression network can be conduced using two different methods\, Pearson Correlation Coefficient \(PCC\) or Mutual Information \(MI\) and choosing a threshold value using a graph theory approach.


.. conda:package:: bioconductor-coexnet

   |downloads_bioconductor-coexnet| |docker_bioconductor-coexnet|

   :versions:
      
      

      ``1.12.0-1``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-acde: ``>=1.20.0,<1.21.0``
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-geoquery: ``>=2.58.0,<2.59.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-minet: ``>=3.48.0,<3.49.0``
   :depends bioconductor-siggenes: ``>=1.64.0,<1.65.0``
   :depends bioconductor-stringdb: ``>=2.1.0,<2.2.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-vsn: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-igraph: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-coexnet

   and update with::

      conda update bioconductor-coexnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coexnet:<tag>

   (see `bioconductor-coexnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coexnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coexnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coexnet
   :alt:   (downloads)
.. |docker_bioconductor-coexnet| image:: https://quay.io/repository/biocontainers/bioconductor-coexnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coexnet
.. _`bioconductor-coexnet/tags`: https://quay.io/repository/biocontainers/bioconductor-coexnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coexnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coexnet/README.html