.. _`picrust`:

picrust
=======

|downloads|

PICRUSt\: Phylogenetic Investigation of Communities by Reconstruction of Unobserved States

============= ===========
Home          http://picrust.github.com
Versions      1.1.3, 1.1.2, 1.1.1, 1.1.0, 1.0.1
License       GPL-3.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//picrust/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install picrust

and update with::

   conda update picrust


Notes
-----
PICRUST requires a set of large pre\-calculated data files. PICRUST contains a script\, \"download\_picrust\_files.py\"\, which downloads the data in the proper location\, and which can be run after PICRUST has been installed.


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/picrust.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/picrust/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/picrust/README.html
.. |downloads| image:: https://anaconda.org/bioconda/picrust/badges/downloads.svg
               :target: https://anaconda.org/bioconda/picrust
.. |docker| image:: https://quay.io/repository/biocontainers/picrust/status
                :target: https://quay.io/repository/biocontainers/picrust

