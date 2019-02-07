.. title:: Package Recipe 'bioconductor-qdnaseq'
.. highlight: bash


bioconductor-qdnaseq
====================

.. conda:recipe:: bioconductor-qdnaseq
   :replaces_section_title:

   Quantitative DNA sequencing for chromosomal aberrations. The genome is divided into non\-overlapping fixed\-sized bins\, number of sequence reads in each counted\, adjusted with a simultaneous two\-dimensional loess correction for sequence mappability and GC content\, and filtered to remove spurious regions in the genome. Downstream steps of segmentation and calling are also implemented via packages DNAcopy and CGHcall\, respectively.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/QDNAseq.html
   :license: GPL
   :recipe: /`bioconductor-qdnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq/meta.yaml>`_
   :links: biotools: :biotools:`qdnaseq`

   


.. conda:package:: bioconductor-qdnaseq

   |downloads_bioconductor-qdnaseq| |docker_bioconductor-qdnaseq|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-cghbase` >=1.42.0,<1.43.0 :conda:package:`bioconductor-cghcall` >=2.44.0,<2.45.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats` >=0.50.2 :conda:package:`r-r.utils` >=2.3.0 

   :required~by: |required_by_bioconductor-qdnaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qdnaseq

   and update with::

      conda update bioconductor-qdnaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-qdnaseq


.. |required_by_bioconductor-qdnaseq| conda:required_by:: bioconductor-qdnaseq
.. |downloads_bioconductor-qdnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qdnaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qdnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-qdnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qdnaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html

