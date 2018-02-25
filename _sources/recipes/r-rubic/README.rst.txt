.. _`r-rubic`:

r-rubic
=======

|downloads|

RUBIC detects recurrent copy number aberrations using copy number breaks\, rather than recurrently amplified or deleted regions\. This allows for a vastly simplified approach as recursive peak splitting procedures and repeated re\-estimation of the background model are avoided\. Furthermore\, the false discovery rate is controlled on the level of called regions\, rather than at the probe level\.

============= ===========
Home          http://ccb.nki.nl/software/
Versions      1.0.2, 1.0.3
License       Apache-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic/1.0.2



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-rubic

and update with::

   conda update r-rubic



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-rubic.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-rubic/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-rubic/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-rubic/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-rubic
.. |docker| image:: https://quay.io/repository/biocontainers/r-rubic/status
                :target: https://quay.io/repository/biocontainers/r-rubic

