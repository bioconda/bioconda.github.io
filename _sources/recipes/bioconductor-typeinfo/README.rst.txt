.. _`bioconductor-typeinfo`:

bioconductor-typeinfo
=====================

|downloads|

A prototype for a mechanism for specifying the types of parameters and the return value for an R function. This is meta\-information that can be used to generate stubs for servers and various interfaces to these functions. Additionally\, the arguments in a call to a typed function can be validated using the type specifications. We allow types to be specified as either i\) by class name using either inheritance \- is\(x\, className\)\, or strict instance of \- class\(x\) \%in\% className\, or ii\) a dynamic test given as an R expression which is evaluated at run\-time. More precise information and interesting tests can be done via ii\)\, but it is harder to use this information as meta\-data as it requires more effort to interpret it and it is of course run\-time information. It is typically more meaningful.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/TypeInfo.html
Versions      
License       BSD
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-typeinfo



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-typeinfo

and update with::

   conda update bioconductor-typeinfo



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-typeinfo.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-typeinfo/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-typeinfo/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-typeinfo/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-typeinfo
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-typeinfo/status
                :target: https://quay.io/repository/biocontainers/bioconductor-typeinfo

