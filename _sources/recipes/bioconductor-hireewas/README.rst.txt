.. _`bioconductor-hireewas`:

bioconductor-hireewas
=====================

|downloads|

In epigenome\-wide association studies\, the measured signals for each sample are a mixture of methylation profiles from different cell types. The current approaches to the association detection only claim whether a cytosine\-phosphate\-guanine \(CpG\) site is associated with the phenotype or not\, but they cannot determine the cell type in which the risk\-CpG site is affected by the phenotype. We propose a solid statistical method\, HIgh REsolution \(HIRE\)\, which not only substantially improves the power of association detection at the aggregated level as compared to the existing methods but also enables the detection of risk\-CpG sites for individual cell types. The \"HIREewas\" R package is to implement HIRE model in R.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/HIREewas.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireewas



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hireewas

and update with::

   conda update bioconductor-hireewas



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hireewas.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hireewas/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hireewas/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hireewas/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hireewas
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hireewas/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hireewas

