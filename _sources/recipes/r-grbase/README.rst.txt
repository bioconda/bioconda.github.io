.. _`r-grbase`:

r-grbase
========

|downloads|

The \'gRbase\' package provides general features which are used by other graphical modelling packages\, in particular by the packages \'gRain\'\, \'gRim\' and \'gRc\'. \'gRbase\' contains several data sets relevant for use in connection with graphical models. Almost all data sets used in the book Graphical Models with R \(2012\) are contained in \'gRbase\'. \'gRbase\' implements several graph algorithms \(based mainly on representing graphs as adjacency matrices \- either in the form of a standard matrix or a sparse matrix\). Some graph algorithms are\: \(i\) maximum cardinality search \(for marked and unmarked graphs\). \(ii\) moralize. \(iii\) triangulate. \(iv\) junction tree. \'gRbase\' facilitates array operations\, \'gRbase\' implements functions for testing for conditional independence. \'gRbase\' illustrates how hierarchical log\-linear models may be implemented and describes concept of graphical meta data. These features\, however\, are not maintained anymore and remains in \'gRbase\' only because there exists a paper describing these facilities\: A Common Platform for Graphical Models in R\: The \'gRbase\' Package\, Journal of Statistical Software\, Vol 14\, No 17\, 2005. NOTICE Proper functionality of \'gRbase\' requires that the packages graph\, \'Rgraphviz\' and \'RBGL\' are installed from \'bioconductor\'\; for installation instructions please refer to the web page given below.

============= ===========
Home          http://people.math.aau.dk/~sorenh/software/gR/
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grbase



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-grbase

and update with::

   conda update r-grbase



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-grbase.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-grbase/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-grbase/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-grbase/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-grbase
.. |docker| image:: https://quay.io/repository/biocontainers/r-grbase/status
                :target: https://quay.io/repository/biocontainers/r-grbase

