:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xps'
.. highlight: bash

bioconductor-xps
================

.. conda:recipe:: bioconductor-xps
   :replaces_section_title:

   The package handles pre\-processing\, normalization\, filtering and analysis of Affymetrix GeneChip expression arrays\, including exon arrays \(Exon 1.0 ST\: core\, extended\, full probesets\)\, gene arrays \(Gene 1.0 ST\) and plate arrays on computers with 1 GB RAM only. It imports Affymetrix .CDF\, .CLF\, .PGF and .CEL as well as annotation files\, and computes e.g. RMA\, MAS5\, FARMS\, DFW\, FIRMA\, tRMA\, MAS5\-calls\, DABG\-calls\, I\/NI\-calls. It is an R wrapper to XPS \(eXpression Profiling System\)\, which is based on ROOT\, an object\-oriented framework developed at CERN. Thus\, the prior installation of ROOT is a prerequisite for the usage of this package\, however\, no knowledge of ROOT is required. ROOT is licensed under LGPL and can be downloaded from http\:\/\/root.cern.ch.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/xps.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-xps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xps/meta.yaml>`_

   


.. conda:package:: bioconductor-xps

   |downloads_bioconductor-xps| |docker_bioconductor-xps|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xps

   and update with::

      conda update bioconductor-xps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xps:<tag>

   (see `bioconductor-xps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xps
   :alt:   (downloads)
.. |docker_bioconductor-xps| image:: https://quay.io/repository/biocontainers/bioconductor-xps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xps
.. _`bioconductor-xps/tags`: https://quay.io/repository/biocontainers/bioconductor-xps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xps/README.html