.. _`dropletutils-scripts`:

dropletutils-scripts
====================

|downloads|

A set of wrappers for operations associated with Aaron Lun\'s DropletUtils  package. Functions in R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

============= ===========
Home          https://github.com/ebi-gene-expression-group/dropletutils-scripts
Versions      0.0.1
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropletutils-scripts


Development   https://github.com/ebi-gene-expression-group/dropletutils-scripts


============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install dropletutils-scripts

and update with::

   conda update dropletutils-scripts



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/dropletutils-scripts.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/dropletutils-scripts/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/dropletutils-scripts/README.html
.. |downloads| image:: https://anaconda.org/bioconda/dropletutils-scripts/badges/downloads.svg
               :target: https://anaconda.org/bioconda/dropletutils-scripts
.. |docker| image:: https://quay.io/repository/biocontainers/dropletutils-scripts/status
                :target: https://quay.io/repository/biocontainers/dropletutils-scripts

