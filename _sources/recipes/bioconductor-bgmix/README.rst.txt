:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgmix'
.. highlight: bash

bioconductor-bgmix
==================

.. conda:recipe:: bioconductor-bgmix
   :replaces_section_title:

   Bayesian models for differential gene expression

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/BGmix.html
   :license: GPL-2
   :recipe: /`bioconductor-bgmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgmix/meta.yaml>`_
   :links: biotools: :biotools:`bgmix`, doi: :doi:`10.2202/1544-6115.1314`

   Fully Bayesian mixture models for differential gene expression


.. conda:package:: bioconductor-bgmix

   |downloads_bioconductor-bgmix| |docker_bioconductor-bgmix|

   :versions: 1.46.0-0, 1.44.0-1, 1.44.0-0, 1.42.0-0, 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-kernsmooth: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bgmix

   and update with::

      conda update bioconductor-bgmix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgmix:<tag>

   (see `bioconductor-bgmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgmix
   :alt:   (downloads)
.. |docker_bioconductor-bgmix| image:: https://quay.io/repository/biocontainers/bioconductor-bgmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgmix
.. _`bioconductor-bgmix/tags`: https://quay.io/repository/biocontainers/bioconductor-bgmix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgmix/README.html