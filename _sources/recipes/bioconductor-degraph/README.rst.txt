.. _`bioconductor-degraph`:

bioconductor-degraph
====================

|downloads|

DEGraph implements recent hypothesis testing methods which directly assess whether a particular gene network is differentially expressed between two conditions\. This is to be contrasted with the more classical two\-step approaches which first test individual genes\, then test gene sets for enrichment in differentially expressed genes\. These recent methods take into account the topology of the network to yield more powerful detection procedures\. DEGraph provides methods to easily test all KEGG pathways for differential expression on any gene expression data set and tools to visualize the results\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/DEGraph.html
Versions 1.30.0
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degraph

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-degraph

and update with::

   conda update bioconductor-degraph



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-degraph.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-degraph/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-degraph/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-degraph/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-degraph
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-degraph/status
                :target: https://quay.io/repository/biocontainers/bioconductor-degraph

