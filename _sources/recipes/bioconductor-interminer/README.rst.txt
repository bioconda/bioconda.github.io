.. _`bioconductor-interminer`:

bioconductor-interminer
=======================

|downloads|

Databases based on the InterMine platform such as FlyMine\, modMine \(modENCODE\)\, RatMine\, YeastMine\, HumanMine and TargetMine are integrated databases of genomic\, expression and protein data for various organisms. Integrating data makes it possible to run sophisticated data mining queries that span domains of biological knowledge. This R package provides interfaces with these databases through webservices. It makes most from the correspondence of the data frame object in R and the table object in databases\, while hiding the details of data exchange through XML or JSON.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/InterMineR.html
Versions      1.0.0, 1.2.1
License       LGPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interminer



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-interminer

and update with::

   conda update bioconductor-interminer



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-interminer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-interminer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-interminer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-interminer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-interminer
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-interminer/status
                :target: https://quay.io/repository/biocontainers/bioconductor-interminer

