:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-clinfun'
.. highlight: bash

r-clinfun
=========

.. conda:recipe:: r-clinfun
   :replaces_section_title:

   Utilities to make your clinical collaborations easier if not fun. It contains functions for designing studies such as Simon 2\-stage and group sequential designs and for data analysis such as Jonckheere\-Terpstra test and estimating survival quantiles.

   :homepage: https://CRAN.R-project.org/package=clinfun
   :license: GPL2 / GPL-2
   :recipe: /`r-clinfun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-clinfun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-clinfun/meta.yaml>`_

   


.. conda:package:: r-clinfun

   |downloads_r-clinfun| |docker_r-clinfun|

   :versions: 1.0.15-0
   
   :depends libgcc-ng: >=7.5.0
   :depends libgfortran-ng: >=7,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-clinfun

   and update with::

      conda update r-clinfun

   or use the docker container::

      docker pull quay.io/biocontainers/r-clinfun:<tag>

   (see `r-clinfun/tags`_ for valid values for ``<tag>``)


.. |downloads_r-clinfun| image:: https://img.shields.io/conda/dn/bioconda/r-clinfun.svg?style=flat
   :target: https://anaconda.org/bioconda/r-clinfun
   :alt:   (downloads)
.. |docker_r-clinfun| image:: https://quay.io/repository/biocontainers/r-clinfun/status
   :target: https://quay.io/repository/biocontainers/r-clinfun
.. _`r-clinfun/tags`: https://quay.io/repository/biocontainers/r-clinfun?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-clinfun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-clinfun/README.html