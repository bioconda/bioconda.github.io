.. _`bioconductor-tfhaz`:

bioconductor-tfhaz
==================

|downloads|

It finds trascription factor \(TF\) high accumulation DNA zones\, i.e.\, regions along the genome where there is a high presence of different transcription factors. Starting from a dataset containing the genomic positions of TF binding regions\, for each base of the selected chromosome the accumulation of TFs is computed. Three different types of accumulation \(TF\, region and base accumulation\) are available\, together with the possibility of considering\, in the single base accumulation computing\, the TFs present not only in that single base\, but also in its neighborhood\, within a window of a given width. Two different methods for the search of TF high accumulation DNA zones\, called \"binding regions\" and \"overlaps\"\, are available. In addition\, some functions are provided in order to analyze\, visualize and compare results obtained with different input parameters.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/TFHAZ.html
Versions      1.4.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-tfhaz/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tfhaz

and update with::

   conda update bioconductor-tfhaz



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tfhaz.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tfhaz/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tfhaz/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tfhaz/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tfhaz
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tfhaz/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tfhaz

