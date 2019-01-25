.. _`bioconductor-easyqpcr`:

bioconductor-easyqpcr
=====================

|downloads|

This package is based on the qBase algorithms published by Hellemans et al. in 2007. The EasyqpcR package allows you to import easily qPCR data files as described in the vignette. Thereafter\, you can calculate amplification efficiencies\, relative quantities and their standard errors\, normalization factors based on the best reference genes choosen \(using the SLqPCR package\)\, and then the normalized relative quantities\, the NRQs scaled to your control and their standard errors. This package has been created for low\-throughput qPCR data analysis.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/EasyqpcR.html
Versions      
License       GPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-easyqpcr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-easyqpcr

and update with::

   conda update bioconductor-easyqpcr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-easyqpcr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-easyqpcr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-easyqpcr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-easyqpcr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-easyqpcr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-easyqpcr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-easyqpcr

