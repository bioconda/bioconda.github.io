.. title:: Package Recipe 'bioconductor-dmrcate'
.. highlight: bash


bioconductor-dmrcate
====================

.. conda:recipe:: bioconductor-dmrcate
   :replaces_section_title:

   De novo identification and extraction of differentially methylated regions \(DMRs\) from the human genome using Whole Genome Bisulphite Sequencing \(WGBS\) and Illumina Infinium Array \(450K and EPIC\) data. Provides functionality for filtering probes possibly confounded by SNPs and cross\-hybridisation. Includes GRanges generation and plotting functions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DMRcate.html
   :license: file LICENSE
   :recipe: /`bioconductor-dmrcate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrcate/meta.yaml>`_
   :links: biotools: :biotools:`dmrcate`

   


.. conda:package:: bioconductor-dmrcate

   |downloads_bioconductor-dmrcate| |docker_bioconductor-dmrcate|

   :versions: 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`bioconductor-dmrcatedata` >=1.18.0,<1.19.0 :conda:package:`bioconductor-dss` >=2.30.0,<2.31.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-missmethyl` >=1.16.0,<1.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-dmrcate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmrcate

   and update with::

      conda update bioconductor-dmrcate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dmrcate


.. |required_by_bioconductor-dmrcate| conda:required_by:: bioconductor-dmrcate
.. |downloads_bioconductor-dmrcate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrcate.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dmrcate| image:: https://quay.io/repository/biocontainers/bioconductor-dmrcate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrcate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrcate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrcate/README.html

