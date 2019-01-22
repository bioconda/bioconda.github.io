.. _`bioconductor-buscorrect`:

bioconductor-buscorrect
=======================

|downloads|

High\-throughput experimental data are accumulating exponentially in public databases. However\, mining valid scientific discoveries from these abundant resources is hampered by technical artifacts and inherent biological heterogeneity. The former are usually termed \"batch effects\,\" and the latter is often modelled by \"subtypes.\" The R package BUScorrect fits a Bayesian hierarchical model\, the Batch\-effects\-correction\-with\-Unknown\-Subtypes model \(BUS\)\, to correct batch effects in the presence of unknown subtypes. BUS is capable of \(a\) correcting batch effects explicitly\, \(b\) grouping samples that share similar characteristics into subtypes\, \(c\) identifying features that distinguish subtypes\, and \(d\) enjoying a linear\-order computation complexity.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BUScorrect.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-buscorrect



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-buscorrect

and update with::

   conda update bioconductor-buscorrect



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-buscorrect.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-buscorrect/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-buscorrect/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-buscorrect/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-buscorrect
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-buscorrect/status
                :target: https://quay.io/repository/biocontainers/bioconductor-buscorrect

