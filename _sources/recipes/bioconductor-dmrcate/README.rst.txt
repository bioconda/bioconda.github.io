:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrcate'
.. highlight: bash

bioconductor-dmrcate
====================

.. conda:recipe:: bioconductor-dmrcate
   :replaces_section_title:
   :noindex:

   Methylation array and sequencing spatial analysis methods

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DMRcate.html
   :license: file LICENSE
   :recipe: /`bioconductor-dmrcate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcate/meta.yaml>`_
   :links: biotools: :biotools:`dmrcate`

   De novo identification and extraction of differentially methylated regions \(DMRs\) from the human genome using Whole Genome Bisulfite Sequencing \(WGBS\) and Illumina Infinium Array \(450K and EPIC\) data. Provides functionality for filtering probes possibly confounded by SNPs and cross\-hybridisation. Includes GRanges generation and plotting functions.


.. conda:package:: bioconductor-dmrcate

   |downloads_bioconductor-dmrcate| |docker_bioconductor-dmrcate|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      

   
   :depends bioconductor-bsseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-dss: ``>=2.38.0,<2.39.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gviz: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-minfi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-missmethyl: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmrcate

   and update with::

      conda update bioconductor-dmrcate

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmrcate:<tag>

   (see `bioconductor-dmrcate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmrcate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrcate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrcate
   :alt:   (downloads)
.. |docker_bioconductor-dmrcate| image:: https://quay.io/repository/biocontainers/bioconductor-dmrcate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrcate
.. _`bioconductor-dmrcate/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrcate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrcate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrcate/README.html