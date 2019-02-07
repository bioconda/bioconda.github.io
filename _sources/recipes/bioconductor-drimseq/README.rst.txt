.. title:: Package Recipe 'bioconductor-drimseq'
.. highlight: bash


bioconductor-drimseq
====================

.. conda:recipe:: bioconductor-drimseq
   :replaces_section_title:

   The package provides two frameworks. One for the differential transcript usage analysis between different conditions and one for the tuQTL analysis. Both are based on modeling the counts of genomic features \(i.e.\, transcripts\) with the Dirichlet\-multinomial distribution. The package also makes available functions for visualization and exploration of the data and results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DRIMSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-drimseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drimseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drimseq/meta.yaml>`_
   :links: biotools: :biotools:`drimseq`

   


.. conda:package:: bioconductor-drimseq

   |downloads_bioconductor-drimseq| |docker_bioconductor-drimseq|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-mass`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-drimseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drimseq

   and update with::

      conda update bioconductor-drimseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-drimseq


.. |required_by_bioconductor-drimseq| conda:required_by:: bioconductor-drimseq
.. |downloads_bioconductor-drimseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drimseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-drimseq| image:: https://quay.io/repository/biocontainers/bioconductor-drimseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drimseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drimseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drimseq/README.html

