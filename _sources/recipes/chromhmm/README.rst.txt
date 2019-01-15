.. _`chromhmm`:

chromhmm
========

|downloads|

ChromHMM is software for learning and characterizing chromatin states. ChromHMM can integrate multiple chromatin datasets such as ChIP\-seq data of various histone modifications to discover de novo the major re\-occuring combinatorial and spatial patterns of marks.

============= ===========
Home          http://compbio.mit.edu/ChromHMM/
Versions      1.15, 1.14, 1.12, 1.11
License       GPLv3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromhmm



Links         biotools: :biotools:`chromhmm`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install chromhmm

and update with::

   conda update chromhmm


Notes
-----
ChromHMM comes with about 36MB of example data which is not included in the recipe. This recipe installs a script\, \"download\_chromhmm\_data.sh\"\, which downloads the data in the proper location\, and which can be run after ChromHMM has been installed.


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/chromhmm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/chromhmm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/chromhmm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/chromhmm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/chromhmm
.. |docker| image:: https://quay.io/repository/biocontainers/chromhmm/status
                :target: https://quay.io/repository/biocontainers/chromhmm

