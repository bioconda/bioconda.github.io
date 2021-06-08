:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosim'
.. highlight: bash

bioconductor-mosim
==================

.. conda:recipe:: bioconductor-mosim
   :replaces_section_title:
   :noindex:

   Multi\-Omics Simulation \(MOSim\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MOSim.html
   :license: GPL-3
   :recipe: /`bioconductor-mosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosim/meta.yaml>`_

   MOSim package simulates multi\-omic experiments that mimic regulatory mechanisms within the cell\, allowing flexible experimental design including time course and multiple groups.


.. conda:package:: bioconductor-mosim

   |downloads_bioconductor-mosim| |docker_bioconductor-mosim|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hiddenmarkov: 
   :depends r-lazyeval: 
   :depends r-matrixstats: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mosim

   and update with::

      conda update bioconductor-mosim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mosim:<tag>

   (see `bioconductor-mosim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mosim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosim
   :alt:   (downloads)
.. |docker_bioconductor-mosim| image:: https://quay.io/repository/biocontainers/bioconductor-mosim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosim
.. _`bioconductor-mosim/tags`: https://quay.io/repository/biocontainers/bioconductor-mosim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosim/README.html