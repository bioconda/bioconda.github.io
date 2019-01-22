.. _`bioconductor-chippeakanno`:

bioconductor-chippeakanno
=========================

|downloads|

The package includes functions to retrieve the sequences around the peak\, obtain enriched Gene Ontology \(GO\) terms\, find the nearest gene\, exon\, miRNA or custom features such as most conserved elements and other transcription factor binding sites supplied by users. Starting 2.0.5\, new functions have been added for finding the peaks with bi\-directional promoters with summary statistics \(peaksNearBDP\)\, for summarizing the occurrence of motifs in peaks \(summarizePatternInPeaks\) and for adding other IDs to annotated peaks or enrichedGO \(addGeneIDs\). This package leverages the biomaRt\, IRanges\, Biostrings\, BSgenome\, GO.db\, multtest and stat packages.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ChIPpeakAnno.html
Versions      3.14.2, 3.12.0, 3.10.2
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chippeakanno



Links         biotools: :biotools:`chippeakanno`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-chippeakanno

and update with::

   conda update bioconductor-chippeakanno



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-chippeakanno.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-chippeakanno/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-chippeakanno/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-chippeakanno/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-chippeakanno
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-chippeakanno/status
                :target: https://quay.io/repository/biocontainers/bioconductor-chippeakanno

