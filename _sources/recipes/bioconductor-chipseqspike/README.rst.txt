:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipseqspike'
.. highlight: bash

bioconductor-chipseqspike
=========================

.. conda:recipe:: bioconductor-chipseqspike
   :replaces_section_title:

   ChIP\-Seq data scaling according to spike\-in control

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ChIPSeqSpike.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chipseqspike <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqspike>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqspike/meta.yaml>`_

   Chromatin Immuno\-Precipitation followed by Sequencing \(ChIP\-Seq\) is used to determine the binding sites of any protein of interest\, such as transcription factors or histones with or without a specific modification\, at a genome scale. The many steps of the protocol can introduce biases that make ChIP\-Seq more qualitative than quantitative. For instance\, it was shown that global histone modification differences are not caught by traditional downstream data normalization techniques. A case study reported no differences in histone H3 lysine\-27 trimethyl \(H3K27me3\) upon Ezh2 inhibitor treatment. To tackle this problem\, external spike\-in control were used to keep track of technical biases between conditions. Exogenous DNA from a different non\-closely related species was inserted during the protocol to infer scaling factors that enabled an accurate normalization\, thus revealing the inhibitor effect. ChIPSeqSpike offers tools for ChIP\-Seq spike\-in normalization. Ready to use scaled bigwig files and scaling factors values are obtained as output. ChIPSeqSpike also provides tools for ChIP\-Seq spike\-in assessment and analysis through a versatile collection of graphical functions.


.. conda:package:: bioconductor-chipseqspike

   |downloads_bioconductor-chipseqspike| |docker_bioconductor-chipseqspike|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-seqplots: >=1.26.0,<1.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-corrplot: 
   :depends r-ggplot2: 
   :depends r-lsd: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseqspike

   and update with::

      conda update bioconductor-chipseqspike

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipseqspike:<tag>

   (see `bioconductor-chipseqspike/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipseqspike| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseqspike.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipseqspike
   :alt:   (downloads)
.. |docker_bioconductor-chipseqspike| image:: https://quay.io/repository/biocontainers/bioconductor-chipseqspike/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseqspike
.. _`bioconductor-chipseqspike/tags`: https://quay.io/repository/biocontainers/bioconductor-chipseqspike?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseqspike/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseqspike/README.html