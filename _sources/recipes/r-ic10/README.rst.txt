.. _`r-ic10`:

r-ic10
======

|downloads|

Implementation of the classifier described in the paper \'Genome\-driven integrated classification of breast cancer validated in over 7\,500 samples\' \(Ali HR et al.\, Genome Biology 2014\). It uses copy number and\/or expression from breast cancer data\, trains a pamr classifier \(Tibshirani et al.\) with the features available and predicts the iC10 group.

============= ===========
Home          https://CRAN.R-project.org/package=iC10
Versions      1.1.3, 1.4.2
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ic10



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-ic10

and update with::

   conda update r-ic10



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-ic10.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-ic10/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-ic10/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-ic10/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-ic10
.. |docker| image:: https://quay.io/repository/biocontainers/r-ic10/status
                :target: https://quay.io/repository/biocontainers/r-ic10

