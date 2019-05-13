:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mfuzz'
.. highlight: bash

bioconductor-mfuzz
==================

.. conda:recipe:: bioconductor-mfuzz
   :replaces_section_title:

   Package for noise\-robust soft clustering of gene expression time\-series data \(including a graphical user interface\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Mfuzz.html
   :license: GPL-2
   :recipe: /`bioconductor-mfuzz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfuzz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfuzz/meta.yaml>`_

   


.. conda:package:: bioconductor-mfuzz

   |downloads_bioconductor-mfuzz| |docker_bioconductor-mfuzz|

   :versions: 2.42.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-tkwidgets: >=1.60.0,<1.61.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-e1071: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mfuzz

   and update with::

      conda update bioconductor-mfuzz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mfuzz:<tag>

   (see `bioconductor-mfuzz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mfuzz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mfuzz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mfuzz
   :alt:   (downloads)
.. |docker_bioconductor-mfuzz| image:: https://quay.io/repository/biocontainers/bioconductor-mfuzz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mfuzz
.. _`bioconductor-mfuzz/tags`: https://quay.io/repository/biocontainers/bioconductor-mfuzz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mfuzz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mfuzz/README.html