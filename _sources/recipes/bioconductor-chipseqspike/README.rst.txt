.. title:: Package Recipe 'bioconductor-chipseqspike'
.. highlight: bash


bioconductor-chipseqspike
=========================

.. conda:recipe:: bioconductor-chipseqspike
   :replaces_section_title:

   Chromatin Immuno\-Precipitation followed by Sequencing \(ChIP\-Seq\) is used to determine the binding sites of any protein of interest\, such as transcription factors or histones with or without a specific modification\, at a genome scale. The many steps of the protocol can introduce biases that make ChIP\-Seq more qualitative than quantitative. For instance\, it was shown that global histone modification differences are not caught by traditional downstream data normalization techniques. A case study reported no differences in histone H3 lysine\-27 trimethyl \(H3K27me3\) upon Ezh2 inhibitor treatment. To tackle this problem\, external spike\-in control were used to keep track of technical biases between conditions. Exogenous DNA from a different non\-closely related species was inserted during the protocol to infer scaling factors that enabled an accurate normalization\, thus revealing the inhibitor effect. ChIPSeqSpike offers tools for ChIP\-Seq spike\-in normalization. Ready to use scaled bigwig files and scaling factors values are obtained as output. ChIPSeqSpike also provides tools for ChIP\-Seq spike\-in assessment and analysis through a versatile collection of graphical functions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChIPSeqSpike.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chipseqspike <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqspike>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqspike/meta.yaml>`_

   


.. conda:package:: bioconductor-chipseqspike

   |downloads_bioconductor-chipseqspike| |docker_bioconductor-chipseqspike|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-seqplots` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corrplot`  :conda:package:`r-ggplot2`  :conda:package:`r-lsd`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-chipseqspike|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseqspike

   and update with::

      conda update bioconductor-chipseqspike

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chipseqspike


.. |required_by_bioconductor-chipseqspike| conda:required_by:: bioconductor-chipseqspike
.. |downloads_bioconductor-chipseqspike| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseqspike.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chipseqspike| image:: https://quay.io/repository/biocontainers/bioconductor-chipseqspike/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseqspike







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseqspike/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseqspike/README.html

