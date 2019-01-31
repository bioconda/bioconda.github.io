.. _`bioconductor-tsrchitect`:

bioconductor-tsrchitect
=======================

|downloads|

In recent years\, large\-scale transcriptional sequence data has yielded considerable insights into the nature of gene expression and regulation in eukaryotes. Techniques that identify the 5\' end of mRNAs\, most notably CAGE\, have mapped the promoter landscape across a number of model organisms. Due to the variability of TSS distributions and the transcriptional noise present in datasets\, precisely identifying the active promoter\(s\) for genes from these datasets is not straightforward. TSRchitect allows the user to efficiently identify the putative promoter \(the transcription start region\, or TSR\) from a variety of TSS profiling data types\, including both single\-end \(e.g. CAGE\) as well as paired\-end \(RAMPAGE\, PEAT\, STRIPE\-seq\). In addition\, \(new with version 1.3.0\) TSRchitect provides the ability to import aligned EST and cDNA data. Along with the coordiantes of identified TSRs\, TSRchitect also calculates the width\, abundance and two forms of the Shape Index\, and handles biological replicates for expression profiling. Finally\, TSRchitect imports annotation files\, allowing the user to associate identified promoters with genes and other genomic features. Three detailed examples of TSRchitect\'s utility are provided in the User\'s Guide\, included with this package.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/TSRchitect.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-tsrchitect/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tsrchitect

and update with::

   conda update bioconductor-tsrchitect



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tsrchitect.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tsrchitect/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tsrchitect/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tsrchitect/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tsrchitect
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tsrchitect/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tsrchitect

