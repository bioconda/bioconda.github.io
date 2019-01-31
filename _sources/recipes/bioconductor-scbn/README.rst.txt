.. _`bioconductor-scbn`:

bioconductor-scbn
=================

|downloads|

This package provides a scale based normalization \(SCBN\) method to identify genes with differential expression between different species. It takes into account the available knowledge of conserved orthologous genes and the hypothesis testing framework to detect differentially expressed orthologous genes. The method on this package are described in the article \'A statistical normalization method and differential expression analysis for RNA\-seq data between different species\' by Yan Zhou\, Jiadi Zhu\, Tiejun Tong\, Junhui Wang\, Bingqing Lin\, Jun Zhang \(2018\, pending publication\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SCBN.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-scbn/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-scbn

and update with::

   conda update bioconductor-scbn



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-scbn.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-scbn/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-scbn/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-scbn/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-scbn
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-scbn/status
                :target: https://quay.io/repository/biocontainers/bioconductor-scbn

