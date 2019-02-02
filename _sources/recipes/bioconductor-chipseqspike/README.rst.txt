.. _`bioconductor-chipseqspike`:

bioconductor-chipseqspike
=========================

|downloads|

Chromatin Immuno\-Precipitation followed by Sequencing \(ChIP\-Seq\) is used to determine the binding sites of any protein of interest\, such as transcription factors or histones with or without a specific modification\, at a genome scale. The many steps of the protocol can introduce biases that make ChIP\-Seq more qualitative than quantitative. For instance\, it was shown that global histone modification differences are not caught by traditional downstream data normalization techniques. A case study reported no differences in histone H3 lysine\-27 trimethyl \(H3K27me3\) upon Ezh2 inhibitor treatment. To tackle this problem\, external spike\-in control were used to keep track of technical biases between conditions. Exogenous DNA from a different non\-closely related species was inserted during the protocol to infer scaling factors that enabled an accurate normalization\, thus revealing the inhibitor effect. ChIPSeqSpike offers tools for ChIP\-Seq spike\-in normalization. Ready to use scaled bigwig files and scaling factors values are obtained as output. ChIPSeqSpike also provides tools for ChIP\-Seq spike\-in assessment and analysis through a versatile collection of graphical functions.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ChIPSeqSpike.html
Versions      1.2.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-chipseqspike/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-chipseqspike

and update with::

   conda update bioconductor-chipseqspike



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-chipseqspike.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-chipseqspike/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-chipseqspike/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-chipseqspike/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-chipseqspike
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-chipseqspike/status
                :target: https://quay.io/repository/biocontainers/bioconductor-chipseqspike

