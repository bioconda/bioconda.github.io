.. _`r-mixomics`:

r-mixomics
==========

|downloads|

Multivariate methods are well suited to large omics data sets where the number of
variables (e.g. genes, proteins, metabolites) is much larger than the number of
samples (patients, cells, mice). They have the appealing properties of reducing
the dimension of the data by using instrumental variables (components), which are
defined as combinations of all variables. Those components are then used to produce
useful graphical outputs that enable better understanding of the relationships and
correlation structures between the different data sets that are integrated. mixOmics
offers a wide range of multivariate methods for the exploration and integration
of biological datasets with a particular focus on variable selection. The package
proposes several sparse multivariate models we have developed to identify the key
variables that are highly correlated, and/or explain the biological outcome of interest.
The data that can be analysed with mixOmics may come from high throughput sequencing
technologies, such as omics data (transcriptomics, metabolomics, proteomics, metagenomics
etc) but also beyond the realm of omics (e.g. spectral imaging). The methods implemented
in mixOmics can also handle missing values without having to delete entire rows
with missing data. A non exhaustive list of methods include generalised Canonical
Correlation Analysis, sparse Partial Least Squares and sparse Discriminant Analysis.
Recently we implemented integrative methods to combine multiple data sets: horizontal
integration with regularised Generalised Canonical Correlation Analysis and vertical
integration with multi-group Partial Least Squares.


======== ===========
Home     http://www.mixOmics.org
Versions 5.2.0, 6.1.1, 6.2.0
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mixomics
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-mixomics

and update with::

   conda update r-mixomics



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-mixomics.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-mixomics/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-mixomics/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-mixomics/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-mixomics
.. |docker| image:: https://quay.io/repository/biocontainers/r-mixomics/status
                :target: https://quay.io/repository/biocontainers/r-mixomics


