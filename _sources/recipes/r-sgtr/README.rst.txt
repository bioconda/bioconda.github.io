:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sgtr'
.. highlight: bash

r-sgtr
======

.. conda:recipe:: r-sgtr
   :replaces_section_title:

   Visualize population genomics analyses results in R.

   :homepage: https://github.com/SexGenomicsToolkit/sgtr
   :license: GPL3
   :recipe: /`r-sgtr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sgtr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sgtr/meta.yaml>`_

   


.. conda:package:: r-sgtr

   |downloads_r-sgtr| |docker_r-sgtr|

   :versions: 1.0.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-readr: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sgtr

   and update with::

      conda update r-sgtr

   or use the docker container::

      docker pull quay.io/biocontainers/r-sgtr:<tag>

   (see `r-sgtr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sgtr| image:: https://img.shields.io/conda/dn/bioconda/r-sgtr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sgtr
   :alt:   (downloads)
.. |docker_r-sgtr| image:: https://quay.io/repository/biocontainers/r-sgtr/status
   :target: https://quay.io/repository/biocontainers/r-sgtr
.. _`r-sgtr/tags`: https://quay.io/repository/biocontainers/r-sgtr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sgtr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sgtr/README.html