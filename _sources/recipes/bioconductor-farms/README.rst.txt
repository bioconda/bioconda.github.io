:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-farms'
.. highlight: bash

bioconductor-farms
==================

.. conda:recipe:: bioconductor-farms
   :replaces_section_title:

   FARMS \- Factor Analysis for Robust Microarray Summarization

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/farms.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-farms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-farms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-farms/meta.yaml>`_
   :links: biotools: :biotools:`farms`

   The package provides the summarization algorithm called Factor Analysis for Robust Microarray Summarization \(FARMS\) and a novel unsupervised feature selection criterion called \"I\/NI\-calls\"


.. conda:package:: bioconductor-farms

   |downloads_bioconductor-farms| |docker_bioconductor-farms|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-1, 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0
   
   :depends bioconductor-affy: >=1.66.0,<1.67.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-farms

   and update with::

      conda update bioconductor-farms

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-farms:<tag>

   (see `bioconductor-farms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-farms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-farms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-farms
   :alt:   (downloads)
.. |docker_bioconductor-farms| image:: https://quay.io/repository/biocontainers/bioconductor-farms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-farms
.. _`bioconductor-farms/tags`: https://quay.io/repository/biocontainers/bioconductor-farms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-farms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-farms/README.html