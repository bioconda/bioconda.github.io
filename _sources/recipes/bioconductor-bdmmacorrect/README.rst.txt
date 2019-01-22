.. _`bioconductor-bdmmacorrect`:

bioconductor-bdmmacorrect
=========================

|downloads|

Metagenomic sequencing techniques enable quantitative analyses of the microbiome. However\, combining the microbial data from these experiments is challenging due to the variations between experiments. The existing methods for correcting batch effects do not consider the interactions between variables—microbial taxa in microbial studies—and the overdispersion of the microbiome data. Therefore\, they are not applicable to microbiome data. We develop a new method\, Bayesian Dirichlet\-multinomial regression meta\-analysis \(BDMMA\)\, to simultaneously model the batch effects and detect the microbial taxa associated with phenotypes. BDMMA automatically models the dependence among microbial taxa and is robust to the high dimensionality of the microbiome and their association sparsity.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BDMMAcorrect.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bdmmacorrect



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bdmmacorrect

and update with::

   conda update bioconductor-bdmmacorrect



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bdmmacorrect/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bdmmacorrect
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect

