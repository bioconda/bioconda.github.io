.. _`bioconductor-joda`:

bioconductor-joda
=================

|downloads|

Package \'joda\' implements three steps of an algorithm called JODA. The algorithm computes gene deregulation scores. For each gene\, its deregulation score reflects how strongly an effect of a certain regulator\'s perturbation on this gene differs between two different cell populations. The algorithm utilizes regulator knockdown expression data as well as knowledge about signaling pathways in which the regulators are involved \(formalized in a simple matrix model\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/joda.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-joda/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-joda

and update with::

   conda update bioconductor-joda



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-joda.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-joda/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-joda/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-joda/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-joda
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-joda/status
                :target: https://quay.io/repository/biocontainers/bioconductor-joda

