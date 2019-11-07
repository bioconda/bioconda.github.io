:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqgsea'
.. highlight: bash

bioconductor-seqgsea
====================

.. conda:recipe:: bioconductor-seqgsea
   :replaces_section_title:

   Gene Set Enrichment Analysis \(GSEA\) of RNA\-Seq Data\: integrating differential expression and splicing

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/SeqGSEA.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-seqgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgsea/meta.yaml>`_
   :links: biotools: :biotools:`seqgsea`

   The package generally provides methods for gene set enrichment analysis of high\-throughput RNA\-Seq data by integrating differential expression and splicing. It uses negative binomial distribution to model read count data\, which accounts for sequencing biases and biological variation. Based on permutation tests\, statistical significance can also be achieved regarding each gene\'s differential expression and splicing\, respectively.


.. conda:package:: bioconductor-seqgsea

   |downloads_bioconductor-seqgsea| |docker_bioconductor-seqgsea|

   :versions: 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends bioconductor-deseq: >=1.38.0,<1.39.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-doparallel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqgsea

   and update with::

      conda update bioconductor-seqgsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqgsea:<tag>

   (see `bioconductor-seqgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqgsea
   :alt:   (downloads)
.. |docker_bioconductor-seqgsea| image:: https://quay.io/repository/biocontainers/bioconductor-seqgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqgsea
.. _`bioconductor-seqgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-seqgsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html