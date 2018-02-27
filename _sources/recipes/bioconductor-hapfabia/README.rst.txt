.. _`bioconductor-hapfabia`:

bioconductor-hapfabia
=====================

|downloads|

A package to identify very short IBD segments in large sequencing data by FABIA biclustering\. Two haplotypes are identical by descent \(IBD\) if they share a segment that both inherited from a common ancestor\. Current IBD methods reliably detect long IBD segments because many minor alleles in the segment are concordant between the two haplotypes\. However\, many cohort studies contain unrelated individuals which share only short IBD segments\. This package provides software to identify short IBD segments in sequencing data\. Knowledge of short IBD segments are relevant for phasing of genotyping data\, association studies\, and for population genetics\, where they shed light on the evolutionary history of humans\. The package supports VCF formats\, is based on sparse matrix operations\, and provides visualization of haplotype clusters in different formats\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/hapFabia.html
Versions      1.20.0
License       LGPL (>= 2.1)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hapfabia

and update with::

   conda update bioconductor-hapfabia



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hapfabia.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hapfabia/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hapfabia
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hapfabia/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hapfabia

