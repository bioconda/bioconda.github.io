.. title:: Package Recipe 'bioconductor-seqgsea'
.. highlight: bash


bioconductor-seqgsea
====================

.. conda:recipe:: bioconductor-seqgsea
   :replaces_section_title:

   The package generally provides methods for gene set enrichment analysis of high\-throughput RNA\-Seq data by integrating differential expression and splicing. It uses negative binomial distribution to model read count data\, which accounts for sequencing biases and biological variation. Based on permutation tests\, statistical significance can also be achieved regarding each gene\'s differential expression and splicing\, respectively.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SeqGSEA.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-seqgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgsea/meta.yaml>`_
   :links: biotools: :biotools:`seqgsea`

   


.. conda:package:: bioconductor-seqgsea

   |downloads_bioconductor-seqgsea| |docker_bioconductor-seqgsea|

   :versions: 1.22.0, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-deseq` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  

   :required~by: |required_by_bioconductor-seqgsea|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqgsea

   and update with::

      conda update bioconductor-seqgsea

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqgsea


.. |required_by_bioconductor-seqgsea| conda:required_by:: bioconductor-seqgsea
.. |downloads_bioconductor-seqgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqgsea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqgsea| image:: https://quay.io/repository/biocontainers/bioconductor-seqgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqgsea







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqgsea/README.html

