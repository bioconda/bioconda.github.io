.. _`bioconductor-eventpointer`:

bioconductor-eventpointer
=========================

|downloads|

EventPointer is an R package to identify alternative splicing events that involve either simple \(case\-control experiment\) or complex experimental designs such as time course experiments and studies including paired\-samples. The algorithm can be used to analyze data from either junction arrays \(Affymetrix Arrays\) or sequencing data \(RNA\-Seq\). The software returns a data.frame with the detected alternative splicing events\: gene name\, type of event \(cassette\, alternative 3\'\,...\,etc\)\, genomic position\, statistical significance and increment of the percent spliced in \(Delta PSI\) for all the events. The algorithm can generate a series of files to visualize the detected alternative splicing events in IGV. This eases the interpretation of results and the design of primers for standard PCR validation.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/EventPointer.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eventpointer



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-eventpointer

and update with::

   conda update bioconductor-eventpointer



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-eventpointer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-eventpointer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-eventpointer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-eventpointer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-eventpointer
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-eventpointer/status
                :target: https://quay.io/repository/biocontainers/bioconductor-eventpointer

