.. _`bioconductor-bifet`:

bioconductor-bifet
==================

|downloads|

BiFET identifies TFs whose footprints are over\-represented in target regions compared to background regions after correcting for the bias arising from the imbalance in read counts and GC contents between the target and background regions. For a given TF k\, BiFET tests the null hypothesis that the target regions have the same probability of having footprints for the TF k as the background regions while correcting for the read count and GC content bias. For this\, we use the number of target regions with footprints for TF k\, t\_k as a test statistic and calculate the p\-value as the probability of observing t\_k or more target regions with footprints under the null hypothesis.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BiFET.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-bifet/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bifet

and update with::

   conda update bioconductor-bifet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bifet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bifet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bifet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bifet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bifet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bifet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bifet

