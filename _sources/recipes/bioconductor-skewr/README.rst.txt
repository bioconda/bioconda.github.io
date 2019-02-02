.. _`bioconductor-skewr`:

bioconductor-skewr
==================

|downloads|

The skewr package is a tool for visualizing the output of the Illumina Human Methylation 450k BeadChip to aid in quality control. It creates a panel of nine plots. Six of the plots represent the density of either the methylated intensity or the unmethylated intensity given by one of three subsets of the 485\,577 total probes. These subsets include Type I\-red\, Type I\-green\, and Type II.The remaining three distributions give the density of the Beta\-values for these same three subsets. Each of the nine plots optionally displays the distributions of the \"rs\" SNP probes and the probes associated with imprinted genes as series of \'tick\' marks located above the x\-axis.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/skewr.html
Versions      1.14.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-skewr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-skewr

and update with::

   conda update bioconductor-skewr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-skewr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-skewr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-skewr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-skewr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-skewr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-skewr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-skewr

