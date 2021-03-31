:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deco'
.. highlight: bash

bioconductor-deco
=================

.. conda:recipe:: bioconductor-deco
   :replaces_section_title:
   :noindex:

   Decomposing Heterogeneous Cohorts using Omic Data Profiling

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/deco.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-deco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deco/meta.yaml>`_

   This package discovers differential features in hetero\- and homogeneous omic data by a two\-step method including subsampling LIMMA and NSCA. DECO reveals feature associations to hidden subclasses not exclusively related to higher deregulation levels.


.. conda:package:: bioconductor-deco

   |downloads_bioconductor-deco| |docker_bioconductor-deco|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biocstyle: ``>=2.18.0,<2.19.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-made4: ``>=1.64.0,<1.65.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-ade4: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-foreign: 
   :depends r-gdata: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scatterplot3d: 
   :depends r-sfsmisc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deco

   and update with::

      conda update bioconductor-deco

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deco:<tag>

   (see `bioconductor-deco/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deco
   :alt:   (downloads)
.. |docker_bioconductor-deco| image:: https://quay.io/repository/biocontainers/bioconductor-deco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deco
.. _`bioconductor-deco/tags`: https://quay.io/repository/biocontainers/bioconductor-deco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deco/README.html