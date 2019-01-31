.. _`bioconductor-predictionet`:

bioconductor-predictionet
=========================

|downloads|

This package contains a set of functions related to network inference combining genomic data and prior information extracted from biomedical literature and structured biological databases. The main function is able to generate networks using Bayesian or regression\-based inference methods\; while the former is limited to \< 100 of variables\, the latter may infer networks with hundreds of variables. Several statistics at the edge and node levels have been implemented \(edge stability\, predictive ability of each node\, ...\) in order to help the user to focus on high quality subnetworks. Ultimately\, this package is used in the \'Predictive Networks\' web application developed by the Dana\-Farber Cancer Institute in collaboration with Entagen.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/predictionet.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-predictionet/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-predictionet

and update with::

   conda update bioconductor-predictionet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-predictionet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-predictionet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-predictionet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-predictionet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-predictionet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-predictionet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-predictionet

