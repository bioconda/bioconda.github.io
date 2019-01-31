.. _`bbmap`:

bbmap
=====

|downloads|

BBMap is a short read aligner\, as well as various other bioinformatic tools.

============= ===========
Home          https://sourceforge.net/projects/bbmap
Versions      38.22, 38.20, 38.19, 38.18, 38.16, 38.06, 37.99, 37.96, 37.95, 37.90, 37.78, 37.77, 37.75, 37.66, 37.62, 37.52, 37.17, 37.10, 37.02, 36.84, 36.32, 35.85
License       UC-LBL license (see package)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bbmap/meta.yaml

Documentation https://jgi.doe.gov/data-and-tools/bbtools/bb-tools-user-guide/



Links         biotools: :biotools:`bbmap`, doi: :doi:`10.1371/journal.pone.0185056`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bbmap

and update with::

   conda update bbmap


Notes
-----
BBMap is a series of Java programs\, but they come with a number of custom
wrapper shell scripts. Each of these is symlinked to the conda bin directory
during install.



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bbmap.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bbmap/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bbmap/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bbmap/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bbmap
.. |docker| image:: https://quay.io/repository/biocontainers/bbmap/status
                :target: https://quay.io/repository/biocontainers/bbmap

