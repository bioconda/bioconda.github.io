.. _`bioconductor-atacseqqc`:

bioconductor-atacseqqc
======================

|downloads|

ATAC\-seq\, an assay for Transposase\-Accessible Chromatin using sequencing\, is a rapid and sensitive method for chromatin accessibility analysis\. It was developed as an alternative method to MNase\-seq\, FAIRE\-seq and DNAse\-seq\. Comparing to the other methods\, ATAC\-seq requires less amount of the biological samples and time to process\. In the process of analyzing several ATAC\-seq dataset produced in our labs\, we learned some of the unique aspects of the quality assessment for ATAC\-seq data\.To help users to quickly assess whether their ATAC\-seq experiment is successful\, we developed ATACseqQC package partially following the guideline published in Nature Method 2013 \(Greenleaf et al\.\)\, including diagnostic plot of fragment size distribution\, proportion of mitochondria reads\, nucleosome positioning pattern\, and CTCF or other Transcript Factor footprints\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/ATACseqQC.html
Versions 1.0.5, 1.2.0
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqqc

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-atacseqqc

and update with::

   conda update bioconductor-atacseqqc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-atacseqqc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-atacseqqc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-atacseqqc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-atacseqqc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-atacseqqc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-atacseqqc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-atacseqqc

