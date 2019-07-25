:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-grbase'
.. highlight: bash

r-grbase
========

.. conda:recipe:: r-grbase
   :replaces_section_title:

   The \'gRbase\' package provides general features which are used by other graphical modelling packages\, in particular by the packages \'gRain\'\, \'gRim\' and \'gRc\'. \'gRbase\' contains several data sets relevant for use in connection with graphical models. Almost all data sets used in the book Graphical Models with R \(2012\) are contained in \'gRbase\'. \'gRbase\' implements several graph algorithms \(based mainly on representing graphs as adjacency matrices \- either in the form of a standard matrix or a sparse matrix\). Some graph algorithms are\: \(i\) maximum cardinality search \(for marked and unmarked graphs\). \(ii\) moralize. \(iii\) triangulate. \(iv\) junction tree. \'gRbase\' facilitates array operations\, \'gRbase\' implements functions for testing for conditional independence. \'gRbase\' illustrates how hierarchical log\-linear models may be implemented and describes concept of graphical meta data. These features\, however\, are not maintained anymore and remains in \'gRbase\' only because there exists a paper describing these facilities\: A Common Platform for Graphical Models in R\: The \'gRbase\' Package\, Journal of Statistical Software\, Vol 14\, No 17\, 2005. NOTICE Proper functionality of \'gRbase\' requires that the packages graph\, \'Rgraphviz\' and \'RBGL\' are installed from \'bioconductor\'\; for installation instructions please refer to the web page given below.

   :homepage: http://people.math.aau.dk/~sorenh/software/gR/
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-grbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grbase/meta.yaml>`_

   


.. conda:package:: r-grbase

   |downloads_r-grbase| |docker_r-grbase|

   :versions: 1.8_3.4-1, 1.8_3.4-0
   
   :depends bioconductor-graph: 
   :depends bioconductor-rbgl: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-rcpp: >=0.11.1
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-grbase

   and update with::

      conda update r-grbase

   or use the docker container::

      docker pull quay.io/biocontainers/r-grbase:<tag>

   (see `r-grbase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-grbase| image:: https://img.shields.io/conda/dn/bioconda/r-grbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-grbase
   :alt:   (downloads)
.. |docker_r-grbase| image:: https://quay.io/repository/biocontainers/r-grbase/status
   :target: https://quay.io/repository/biocontainers/r-grbase
.. _`r-grbase/tags`: https://quay.io/repository/biocontainers/r-grbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-grbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-grbase/README.html