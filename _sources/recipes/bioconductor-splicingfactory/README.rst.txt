:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicingfactory'
.. highlight: bash

bioconductor-splicingfactory
============================

.. conda:recipe:: bioconductor-splicingfactory
   :replaces_section_title:
   :noindex:

   Splicing Diversity Analysis for Transcriptome Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SplicingFactory.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-splicingfactory <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicingfactory>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicingfactory/meta.yaml>`_

   The SplicingFactory R package uses transcript\-level expression values to analyze splicing diversity based on various statistical measures\, like Shannon entropy or the Gini index. These measures can quantify transcript isoform diversity within samples or between conditions. Additionally\, the package analyzes the isoform diversity data\, looking for significant changes between conditions.


.. conda:package:: bioconductor-splicingfactory

   |downloads_bioconductor-splicingfactory| |docker_bioconductor-splicingfactory|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicingfactory

   and update with::

      conda update bioconductor-splicingfactory

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splicingfactory:<tag>

   (see `bioconductor-splicingfactory/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splicingfactory| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicingfactory.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splicingfactory
   :alt:   (downloads)
.. |docker_bioconductor-splicingfactory| image:: https://quay.io/repository/biocontainers/bioconductor-splicingfactory/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicingfactory
.. _`bioconductor-splicingfactory/tags`: https://quay.io/repository/biocontainers/bioconductor-splicingfactory?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicingfactory/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicingfactory/README.html