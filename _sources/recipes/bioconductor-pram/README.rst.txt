:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pram'
.. highlight: bash

bioconductor-pram
=================

.. conda:recipe:: bioconductor-pram
   :replaces_section_title:

   Publicly available RNA\-seq data is routinely used for retrospective analysis to elucidate new biology.  Novel transcript discovery enabled by large collections of RNA\-seq datasets has emerged as one of such analysis.  To increase the power of transcript discovery from large collections of RNA\-seq datasets\, we developed a new R package named Pooling RNA\-seq and Assembling Models \(PRAM\)\, which builds transcript models in intergenic regions from pooled RNA\-seq datasets.  This package includes functions for defining intergenic regions\, extracting and pooling related RNA\-seq alignments\, predicting\, selected\, and evaluating transcript models.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/pram.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pram/meta.yaml>`_

   


.. conda:package:: bioconductor-pram

   |downloads_bioconductor-pram| |docker_bioconductor-pram|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pram

   and update with::

      conda update bioconductor-pram

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pram:<tag>

   (see `bioconductor-pram/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pram| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pram.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pram
   :alt:   (downloads)
.. |docker_bioconductor-pram| image:: https://quay.io/repository/biocontainers/bioconductor-pram/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pram
.. _`bioconductor-pram/tags`: https://quay.io/repository/biocontainers/bioconductor-pram?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pram/README.html