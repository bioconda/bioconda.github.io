.. _`r-wgcna`:

r-wgcna
=======

|downloads|

Functions necessary to perform Weighted Correlation Network Analysis on high\-dimensional data as originally described in Horvath and Zhang \(2005\) \<doi\:10.2202\/1544\-6115.1128\> and Langfelder and Horvath \(2008\) \<doi\:10.1186\/1471\-2105\-9\-559\>. Includes functions for rudimentary data cleaning\, construction of correlation networks\, module identification\, summarization\, and relating of variables and modules to sample traits. Also includes a number of utility functions for data manipulation and visualization.

============= ===========
Home          http://horvath.genetics.ucla.edu/html/CoexpressionNetwork/Rpackages/WGCNA/
Versions      1.66, 1.64_1, 1.61, 1.51
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-wgcna/meta.yaml



Links         biotools: :biotools:`wgcna`, doi: :doi:`10.1186/1471-2105-9-559`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-wgcna

and update with::

   conda update r-wgcna



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-wgcna.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-wgcna/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-wgcna/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-wgcna/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-wgcna
.. |docker| image:: https://quay.io/repository/biocontainers/r-wgcna/status
                :target: https://quay.io/repository/biocontainers/r-wgcna

