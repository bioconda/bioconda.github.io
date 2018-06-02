.. _`r-nodiv`:

r-nodiv
=======

|downloads|

An implementation of the nodiv algorithm\, see Borregaard\, M.K.\, Rahbek\, C.\, Fjeldsaa\, J.\, Parra\, J.L.\, Whittaker\, R.J. \& Graham\, C.H. 2014. Node\-based analysis of species distributions. Methods in Ecology and Evolution 5\(11\)\: 1225\-1235. \<DOI\:10.1111\/2041\-210X.12283\>. Package for phylogenetic analysis of species distributions. The main function goes through each node in the phylogeny\, compares the distributions of the two descendant nodes\, and compares the result to a null model. This highlights nodes where major distributional divergence have occurred. The distributional divergence for these nodes is mapped using the SOS statistic.

============= ===========
Home          https://CRAN.R-project.org/package=nodiv
Versions      1.2.0
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nodiv



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-nodiv

and update with::

   conda update r-nodiv



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-nodiv.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-nodiv/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-nodiv/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-nodiv/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-nodiv
.. |docker| image:: https://quay.io/repository/biocontainers/r-nodiv/status
                :target: https://quay.io/repository/biocontainers/r-nodiv

