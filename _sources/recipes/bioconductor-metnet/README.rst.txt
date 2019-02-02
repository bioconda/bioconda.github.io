.. _`bioconductor-metnet`:

bioconductor-metnet
===================

|downloads|

MetNet contains functionality to infer metabolic network topologies from quantitative data and high\-resolution mass\/charge information. Using statistical models \(including correlation\, mutual information\, regression and Bayes statistics\) and quantitative data \(intensity values of features\) adjacency matrices are inferred that can be combined to a consensus matrix. Mass differences calculated between mass\/charge values of features will be matched against a data frame of supplied mass\/charge differences referring to transformations of enzymatic activities. In a third step\, the two matrices are combined to form a adjacency matrix inferred from both quantitative and structure information.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/MetNet.html
Versions      1.0.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-metnet/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-metnet

and update with::

   conda update bioconductor-metnet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-metnet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-metnet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-metnet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-metnet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-metnet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-metnet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-metnet

