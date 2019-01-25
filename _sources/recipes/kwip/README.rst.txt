.. _`kwip`:

kwip
====

|downloads|

kWIP implements a de novo\, alignment free measure of sample genetic dissimilarity

============= ===========
Home          https://github.com/kdmurray91/kWIP
Versions      0.2.0
License       GNU General Public License version 3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/kwip/meta.yaml



Links         biotools: :biotools:`kWIP`, doi: :doi:`https://doi.org/10.1371/journal.pcbi.1005727`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install kwip

and update with::

   conda update kwip


Notes
-----
The k\-mer Weighted Inner Product \(kWIP\) implements a de novo\, alignment free measure of sample genetic dissimilarity which operates upon raw sequencing reads. It is able to calculate the genetic dissimilarity between samples without any reference genome\, and without assembling one.



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/kwip.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/kwip/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/kwip/README.html
.. |downloads| image:: https://anaconda.org/bioconda/kwip/badges/downloads.svg
               :target: https://anaconda.org/bioconda/kwip
.. |docker| image:: https://quay.io/repository/biocontainers/kwip/status
                :target: https://quay.io/repository/biocontainers/kwip

