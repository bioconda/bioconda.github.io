.. _`trumicount`:

trumicount
==========

|downloads|

For NGS experiments using unique molecular identifiers \(UMIs\)\, molecules that are lost entirely during sequencing cause under\- estimation of the molecule count\, and amplification artifacts like PCR chimeras cause over\-estimation. TRUmiCount corrects UMI data for both types of errors\, thus improving the accuracy of measured molecule counts considerably.

============= ===========
Home          https://cibiv.github.io/trumicount/
Versions      0.9.11.1, 0.9.11, 0.9.10, 0.9.9.3
License       AGPL-3.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount


Development   https://github.com/Cibiv/trumicount


============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install trumicount

and update with::

   conda update trumicount



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/trumicount.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/trumicount/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/trumicount/README.html
.. |downloads| image:: https://anaconda.org/bioconda/trumicount/badges/downloads.svg
               :target: https://anaconda.org/bioconda/trumicount
.. |docker| image:: https://quay.io/repository/biocontainers/trumicount/status
                :target: https://quay.io/repository/biocontainers/trumicount

