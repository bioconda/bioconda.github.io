.. _`bioconductor-pigengene`:

bioconductor-pigengene
======================

|downloads|

Pigengene package provides an efficient way to infer biological signatures from gene expression profiles. The signatures are independent from the underlying platform\, e.g.\, the input can be microarray or RNA Seq data. It can even infer the signatures using data from one platform\, and evaluate them on the other. Pigengene identifies the modules \(clusters\) of highly coexpressed genes using coexpression network analysis\, summarizes the biological information of each module in an eigengene\, learns a Bayesian network that models the probabilistic dependencies between modules\, and builds a decision tree based on the expression of eigengenes.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/Pigengene.html
Versions      
License       GPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-pigengene/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pigengene

and update with::

   conda update bioconductor-pigengene



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pigengene.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pigengene/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pigengene/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pigengene/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pigengene
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pigengene/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pigengene

