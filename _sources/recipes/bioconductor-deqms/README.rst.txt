.. _`bioconductor-deqms`:

bioconductor-deqms
==================

|downloads|

DEqMS is developped on top of Limma. However\, Limma assumes same prior variance for all genes. In proteomics\, the accuracy of protein abundance estimates varies by the number of peptides\/PSMs quantified in both label\-free and labelled data. Proteins quantification by multiple peptides or PSMs are more accurate. DEqMS package is able to estimate different prior variances for proteins quantified by different number of PSMs\/peptides\, therefore acchieving better accuracy. The package can be applied to analyze both label\-free and labelled proteomics data.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DEqMS.html
Versions      1.0.0, 1.0.1
License       LGPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deqms



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-deqms

and update with::

   conda update bioconductor-deqms



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-deqms.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-deqms/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-deqms/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-deqms/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-deqms
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-deqms/status
                :target: https://quay.io/repository/biocontainers/bioconductor-deqms

