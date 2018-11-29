.. _`r-breakaway`:

r-breakaway
===========

|downloads|

Species richness estimation is an important problem in biodiversity analysis. This package provides methods for total species richness estimation \(observed plus unobserved\) and a method for modelling total diversity with covariates. breakaway\(\) estimates total \(observed plus unobserved\) species richness. Microbial diversity datasets are characterized by a large number of rare species and a small number of highly abundant species. The class of models implemented by breakaway\(\) is flexible enough to model both these features. breakaway\_nof1\(\) implements a similar procedure however does not require a singleton count. betta\(\) provides a method for modelling total diversity with covariates in a way that accounts for its estimated nature and thus accounts for unobserved taxa\, and betta\_random\(\) permits random effects modelling.

============= ===========
Home          https://CRAN.R-project.org/package=breakaway
Versions      3.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-breakaway



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-breakaway

and update with::

   conda update r-breakaway



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-breakaway.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-breakaway/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-breakaway/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-breakaway/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-breakaway
.. |docker| image:: https://quay.io/repository/biocontainers/r-breakaway/status
                :target: https://quay.io/repository/biocontainers/r-breakaway

