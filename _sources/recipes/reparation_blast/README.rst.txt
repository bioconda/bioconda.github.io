.. _`reparation_blast`:

reparation_blast
================

|downloads|

a pipeline that uses ribosome profiling data for a de novo open reading frame delineation in prokaryotic \(bacterial\) genomes. I changed the original reparation project to use the open\-source blast tool \(https\:\/\/blast.ncbi.nlm.nih.gov\/Blast.cgi\) instead of the commercial usearch \-\-ublast tool \(https\:\/\/drive5.com\/usearch\/manual\/ublast\_algo.html\). I did this in order to add this tool to bioconda without having licensing issues with the commercial usearch \-ublast tool. The original software was created at VIB\-UGent Center for Medical Biotechnology and Lab of Bioinformatics and Computational Genomics \(Biobix\)\, University of Gent\, Belgium\, by Elvis Ndah. \(https\:\/\/github.com\/Biobix\/REPARATION\). Be advised that the adapted version has slightly different results and is slower than the original reparation software.

============= ===========
Home          https://github.com/RickGelhausen/REPARATION_blast
Versions      v1.0.7, v1.0.6, v1.0.5, v1.0.4, v1.0.3, v1.0.2, v1.0.1
License       GPL3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/reparation_blast/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install reparation_blast

and update with::

   conda update reparation_blast



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/reparation_blast.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/reparation_blast/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/reparation_blast/README.html
.. |downloads| image:: https://anaconda.org/bioconda/reparation_blast/badges/downloads.svg
               :target: https://anaconda.org/bioconda/reparation_blast
.. |docker| image:: https://quay.io/repository/biocontainers/reparation_blast/status
                :target: https://quay.io/repository/biocontainers/reparation_blast

