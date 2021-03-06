:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eisar'
.. highlight: bash

bioconductor-eisar
==================

.. conda:recipe:: bioconductor-eisar
   :replaces_section_title:
   :noindex:

   Exon\-Intron Split Analysis \(EISA\) in R

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/eisaR.html
   :license: GPL-3
   :recipe: /`bioconductor-eisar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisar/meta.yaml>`_

   Exon\-intron split analysis \(EISA\) uses ordinary RNA\-seq data to measure changes in mature RNA and pre\-mRNA reads across different experimental conditions to quantify transcriptional and post\-transcriptional regulation of gene expression. For details see Gaidatzis et al.\, Nat Biotechnol 2015. doi\: 10.1038\/nbt.3269. eisaR implements the major steps of EISA in R.


.. conda:package:: bioconductor-eisar

   |downloads_bioconductor-eisar| |docker_bioconductor-eisar|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eisar

   and update with::

      conda update bioconductor-eisar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eisar:<tag>

   (see `bioconductor-eisar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eisar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eisar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eisar
   :alt:   (downloads)
.. |docker_bioconductor-eisar| image:: https://quay.io/repository/biocontainers/bioconductor-eisar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eisar
.. _`bioconductor-eisar/tags`: https://quay.io/repository/biocontainers/bioconductor-eisar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eisar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eisar/README.html