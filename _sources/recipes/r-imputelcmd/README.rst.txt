.. _`r-imputelcmd`:

r-imputelcmd
============

|downloads|

The package contains a collection of functions for left\-censored missing data imputation. Left\-censoring is a special case of missing not at random \(MNAR\)  mechanism that generates non\-responses in proteomics experiments. The package also contains functions to artificially generate peptide\/protein expression data \(log\-transformed\) as random draws from a multivariate Gaussian distribution as well as a function to generate missing data \(both randomly and non\-randomly\). For comparison reasons\, the package also contains several wrapper functions for the imputation of non\-responses that are missing at random. \* New functionality has been added\: a hybrid method that allows the imputation of missing values in a more complex scenario where the missing data are both MAR and MNAR.

============= ===========
Home          https://CRAN.R-project.org/package=imputeLCMD
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-imputelcmd/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-imputelcmd

and update with::

   conda update r-imputelcmd



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-imputelcmd.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-imputelcmd/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-imputelcmd/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-imputelcmd/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-imputelcmd
.. |docker| image:: https://quay.io/repository/biocontainers/r-imputelcmd/status
                :target: https://quay.io/repository/biocontainers/r-imputelcmd

