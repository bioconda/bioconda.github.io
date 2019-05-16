:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epihet'
.. highlight: bash

bioconductor-epihet
===================

.. conda:recipe:: bioconductor-epihet
   :replaces_section_title:

   epihet is an R\-package that calculates the epigenetic heterogeneity between cancer cells and\/or normal cells. The functions establish a pipeline that take in bisulfite sequencing data from multiple samples and use the data to track similarities and differences in epipolymorphism\,proportion of discordantly methylated sequencing reads \(PDR\)\,and Shannon entropy values at epialleles that are shared between the samples.epihet can be used to perform analysis on the data by creating pheatmaps\, box plots\, PCA plots\, and t\-SNE plots. MA plots can also be created by calculating the differential heterogeneity of the samples. And we construct co\-epihet network and perform network analysis.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/epihet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epihet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epihet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epihet/meta.yaml>`_

   


.. conda:package:: bioconductor-epihet

   |downloads_bioconductor-epihet| |docker_bioconductor-epihet|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epihet

   and update with::

      conda update bioconductor-epihet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epihet:<tag>

   (see `bioconductor-epihet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epihet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epihet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epihet
   :alt:   (downloads)
.. |docker_bioconductor-epihet| image:: https://quay.io/repository/biocontainers/bioconductor-epihet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epihet
.. _`bioconductor-epihet/tags`: https://quay.io/repository/biocontainers/bioconductor-epihet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epihet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epihet/README.html