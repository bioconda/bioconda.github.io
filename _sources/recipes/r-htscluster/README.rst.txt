.. _`r-htscluster`:

r-htscluster
============

|downloads|

A Poisson mixture model is implemented to cluster genes from high\- throughput transcriptome sequencing \(RNA\-seq\) data. Parameter estimation is performed using either the EM or CEM algorithm\, and the slope heuristics are used for model selection \(i.e.\, to choose the number of clusters\).

============= ===========
Home          https://CRAN.R-project.org/package=HTSCluster
Versions      
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-htscluster/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-htscluster

and update with::

   conda update r-htscluster



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-htscluster.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-htscluster/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-htscluster/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-htscluster/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-htscluster
.. |docker| image:: https://quay.io/repository/biocontainers/r-htscluster/status
                :target: https://quay.io/repository/biocontainers/r-htscluster

