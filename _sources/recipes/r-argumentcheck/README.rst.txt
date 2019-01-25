.. _`r-argumentcheck`:

r-argumentcheck
===============

|downloads|

The typical process of checking arguments in functions is iterative.  In this process\, an error may be returned and the user may fix it only to receive another error on a different argument.  \'ArgumentCheck\' facilitates a more helpful way to perform argument checks allowing the programmer to run all of the checks and then return all of the errors and warnings in a single message.

============= ===========
Home          https://github.com/nutterb/ArgumentCheck
Versions      0.10.2
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/r-argumentcheck/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-argumentcheck

and update with::

   conda update r-argumentcheck



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-argumentcheck.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-argumentcheck/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-argumentcheck/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-argumentcheck/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-argumentcheck
.. |docker| image:: https://quay.io/repository/biocontainers/r-argumentcheck/status
                :target: https://quay.io/repository/biocontainers/r-argumentcheck

