:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-discordant'
.. highlight: bash

bioconductor-discordant
=======================

.. conda:recipe:: bioconductor-discordant
   :replaces_section_title:

   Discordant is a method to determine differential correlation of molecular feature pairs from \-omics data using mixture models. Algorithm is explained further in Siska et al.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/discordant.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-discordant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant/meta.yaml>`_

   


.. conda:package:: bioconductor-discordant

   |downloads_bioconductor-discordant| |docker_bioconductor-discordant|

   :versions: 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biwt: 
   
   :depends r-gtools: 
   
   :depends r-mass: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-discordant

   and update with::

      conda update bioconductor-discordant

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-discordant:<tag>

   (see `bioconductor-discordant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-discordant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-discordant.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-discordant| image:: https://quay.io/repository/biocontainers/bioconductor-discordant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-discordant
.. _`bioconductor-discordant/tags`: https://quay.io/repository/biocontainers/bioconductor-discordant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-discordant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-discordant/README.html