.. _`bioconductor-mapscape`:

bioconductor-mapscape
=====================

|downloads|

MapScape integrates clonal prevalence\, clonal hierarchy\, anatomic and mutational information to provide interactive visualization of spatial clonal evolution. There are four inputs to MapScape\: \(i\) the clonal phylogeny\, \(ii\) clonal prevalences\, \(iii\) an image reference\, which may be a medical image or drawing and \(iv\) pixel locations for each sample on the referenced image. Optionally\, MapScape can accept a data table of mutations for each clone and their variant allele frequencies in each sample. The output of MapScape consists of a cropped anatomical image surrounded by two representations of each tumour sample. The first\, a cellular aggregate\, visually displays the prevalence of each clone. The second shows a skeleton of the clonal phylogeny while highlighting only those clones present in the sample. Together\, these representations enable the analyst to visualize the distribution of clones throughout anatomic space.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/mapscape.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-mapscape/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mapscape

and update with::

   conda update bioconductor-mapscape



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mapscape.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mapscape/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mapscape/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mapscape/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mapscape
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mapscape/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mapscape

