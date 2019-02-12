:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scsr'
.. highlight: bash

bioconductor-scsr
=================

.. conda:recipe:: bioconductor-scsr
   :replaces_section_title:

   Corrects genome\-wide siRNA screens for seed mediated off\-target effect. Suitable functions to identify the effective seeds\/miRNAs and to visualize their effect are also provided in the package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scsR.html
   :license: GPL-2
   :recipe: /`bioconductor-scsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scsr/meta.yaml>`_

   


.. conda:package:: bioconductor-scsr

   |downloads_bioconductor-scsr| |docker_bioconductor-scsr|

   :versions: 1.18.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-stringdb: >=1.22.0,<1.23.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-hash: 
   
   :depends r-plyr: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-sqldf: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scsr

   and update with::

      conda update bioconductor-scsr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scsr:<tag>

   (see `bioconductor-scsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scsr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scsr| image:: https://quay.io/repository/biocontainers/bioconductor-scsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scsr
.. _`bioconductor-scsr/tags`: https://quay.io/repository/biocontainers/bioconductor-scsr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scsr/README.html