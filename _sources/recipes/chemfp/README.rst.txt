.. _`chemfp`:

chemfp
======

|downloads|

chemfp is a set of command\-lines tools for generating cheminformatics fingerprints and searching those
fingerprints by Tanimoto similarity\, as well as a Python library which can be used to build new tools.

These algorithms are designed for the dense\, 100\-10\,000 bit
fingerprints which occur in small\-molecule\/pharmaceutical
chemisty. The Tanimoto search algorithms are implemented in C for
performance and support both threshold and k\-nearest searches.

Fingerprint generation can be done either by extracting existing
fingerprint data from an SD file or by using an existing chemistry
toolkit. chemfp supports the Python libraries from Open Babel\,
OpenEye\, and RDKit toolkits.


============= ===========
Home          https://chemfp.com
Versions      1.4, 1.3, 1.3a1, 1.1p1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/chemfp/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install chemfp

and update with::

   conda update chemfp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/chemfp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/chemfp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/chemfp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/chemfp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/chemfp
.. |docker| image:: https://quay.io/repository/biocontainers/chemfp/status
                :target: https://quay.io/repository/biocontainers/chemfp

