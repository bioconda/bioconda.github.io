.. _`bioconductor-eegc`:

bioconductor-eegc
=================

|downloads|

This package has been developed to evaluate cellular engineering processes for direct differentiation of stem cells or conversion \(transdifferentiation\) of somatic cells to primary cells based on high throughput gene expression data screened either by DNA microarray or RNA sequencing. The package takes gene expression profiles as inputs from three types of samples\: \(i\) somatic or stem cells to be \(trans\)differentiated \(input of the engineering process\)\, \(ii\) induced cells to be evaluated \(output of the engineering process\) and \(iii\) target primary cells \(reference for the output\). The package performs differential gene expression analysis for each pair\-wise sample comparison to identify and evaluate the transcriptional differences among the 3 types of samples \(input\, output\, reference\). The ideal goal is to have induced and primary reference cell showing overlapping profiles\, both very different from the original cells.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/eegc.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-eegc/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-eegc

and update with::

   conda update bioconductor-eegc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-eegc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-eegc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-eegc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-eegc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-eegc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-eegc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-eegc

