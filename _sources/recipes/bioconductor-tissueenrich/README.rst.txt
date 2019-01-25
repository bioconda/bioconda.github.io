.. _`bioconductor-tissueenrich`:

bioconductor-tissueenrich
=========================

|downloads|

The TissueEnrich package is used to calculate enrichment of tissue\-specific genes in a set of input genes. For example\, the user can input the most highly expressed genes from RNA\-Seq data\, or gene co\-expression modules to determine which tissue\-specific genes are enriched in those datasets. Tissue\-specific genes were defined by processing RNA\-Seq data from the Human Protein Atlas \(HPA\) \(Uhlén et al. 2015\)\, GTEx \(Ardlie et al. 2015\)\, and mouse ENCODE \(Shen et al. 2012\) using the algorithm from the HPA \(Uhlén et al. 2015\).The hypergeometric test is being used to determine if the tissue\-specific genes are enriched among the input genes. Along with tissue\-specific gene enrichment\, the TissueEnrich package can also be used to define tissue\-specific genes from expression datasets provided by the user\, which can then be used to calculate tissue\-specific gene enrichments.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/TissueEnrich.html
Versions      1.0.7
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-tissueenrich/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tissueenrich

and update with::

   conda update bioconductor-tissueenrich



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tissueenrich.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tissueenrich/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tissueenrich/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tissueenrich/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tissueenrich
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tissueenrich/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tissueenrich

