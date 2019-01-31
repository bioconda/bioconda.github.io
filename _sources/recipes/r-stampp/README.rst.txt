.. _`r-stampp`:

r-stampp
========

|downloads|

Allows users to calculate pairwise Nei\'s Genetic Distances \(Nei 1972\)\, pairwise Fixation Indexes \(Fst\) \(Weir \& Cockerham 1984\) and also Genomic Relationship matrixes following Yang et al. \(2010\) in mixed and single ploidy populations. Bootstrapping across loci is implemented during Fst calculation to generate confidence intervals and p\-values around pairwise Fst values. StAMPP utilises SNP genotype data of any ploidy level \(with the ability to handle missing data\) and is coded to   utilise multithreading where available to allow efficient analysis of large datasets. StAMPP is able to handle genotype data from genlight objects  allowing integration with other packages such adegenet. Please refer to LW Pembleton\, NOI Cogan \& JW Forster\, 2013\, Molecular Ecology Resources\, 13\(5\)\, 946\-952. \<doi\:10.1111\/1755\-0998.12129\> for the appropriate citation and user manual. Thank you in advance.

============= ===========
Home          https://CRAN.R-project.org/package=StAMPP
Versions      1.5.1
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-stampp/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-stampp

and update with::

   conda update r-stampp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-stampp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-stampp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-stampp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-stampp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-stampp
.. |docker| image:: https://quay.io/repository/biocontainers/r-stampp/status
                :target: https://quay.io/repository/biocontainers/r-stampp

