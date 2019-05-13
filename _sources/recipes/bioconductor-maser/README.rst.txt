:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maser'
.. highlight: bash

bioconductor-maser
==================

.. conda:recipe:: bioconductor-maser
   :replaces_section_title:

   This package provides functionalities for analysis\, annotation and visualizaton of alternative splicing events.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/maser.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-maser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maser/meta.yaml>`_

   


.. conda:package:: bioconductor-maser

   |downloads_bioconductor-maser| |docker_bioconductor-maser|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-gviz: >=1.26.0,<1.27.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maser

   and update with::

      conda update bioconductor-maser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maser:<tag>

   (see `bioconductor-maser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maser
   :alt:   (downloads)
.. |docker_bioconductor-maser| image:: https://quay.io/repository/biocontainers/bioconductor-maser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maser
.. _`bioconductor-maser/tags`: https://quay.io/repository/biocontainers/bioconductor-maser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maser/README.html