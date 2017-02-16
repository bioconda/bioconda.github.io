.. _`r-splitstackshape`:

r-splitstackshape
=================

|downloads|

Online data collection tools like Google Forms often export multiple-response questions with data concatenated in cells. The concat.split (cSplit) family of functions splits such data into  separate cells. The package also includes functions to stack groups  of columns and to reshape wide data, even when the data are  "unbalanced"---something which reshape (from base R) does not handle,  and which melt and dcast from reshape2 do not easily handle.

======== ===========
Home     http://github.com/mrdwab/splitstackshape
Versions 1.4.2
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-splitstackshape
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-splitstackshape

and update with::

   conda update r-splitstackshape



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-splitstackshape.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-splitstackshape/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-splitstackshape/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-splitstackshape/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-splitstackshape
.. |docker| image:: https://quay.io/repository/biocontainers/r-splitstackshape/status
                :target: https://quay.io/repository/biocontainers/r-splitstackshape


