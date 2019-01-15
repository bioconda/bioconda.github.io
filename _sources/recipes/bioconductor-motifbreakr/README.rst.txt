.. _`bioconductor-motifbreakr`:

bioconductor-motifbreakr
========================

|downloads|

We introduce motifbreakR\, which allows the biologist to judge in the first place whether the sequence surrounding the polymorphism is a good match\, and in the second place how much information is gained or lost in one allele of the polymorphism relative to another. MotifbreakR is both flexible and extensible over previous offerings\; giving a choice of algorithms for interrogation of genomes with motifs from public sources that users can choose from\; these are 1\) a weighted\-sum probability matrix\, 2\) log\-probabilities\, and 3\) weighted by relative entropy. MotifbreakR can predict effects for novel or previously described variants in public databases\, making it suitable for tasks beyond the scope of its original design. Lastly\, it can be used to interrogate any genome curated within Bioconductor \(currently there are 22\).

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/motifbreakR.html
Versions      1.10.0, 1.8.0, 1.6.0, 1.4.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr



Links         biotools: :biotools:`motifbreakr`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-motifbreakr

and update with::

   conda update bioconductor-motifbreakr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-motifbreakr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-motifbreakr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-motifbreakr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-motifbreakr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-motifbreakr

