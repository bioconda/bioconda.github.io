:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idmappinganalysis'
.. highlight: bash

bioconductor-idmappinganalysis
==============================

.. conda:recipe:: bioconductor-idmappinganalysis
   :replaces_section_title:

   Identifier mapping performance analysis

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/IdMappingAnalysis.html
   :license: GPL-2
   :recipe: /`bioconductor-idmappinganalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idmappinganalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idmappinganalysis/meta.yaml>`_

   


.. conda:package:: bioconductor-idmappinganalysis

   |downloads_bioconductor-idmappinganalysis| |docker_bioconductor-idmappinganalysis|

   :versions: 1.26.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-boot: 
   :depends r-mclust: 
   :depends r-r.oo: >=1.13.0
   :depends r-rchoicedialogs: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-idmappinganalysis

   and update with::

      conda update bioconductor-idmappinganalysis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-idmappinganalysis:<tag>

   (see `bioconductor-idmappinganalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-idmappinganalysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idmappinganalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idmappinganalysis
   :alt:   (downloads)
.. |docker_bioconductor-idmappinganalysis| image:: https://quay.io/repository/biocontainers/bioconductor-idmappinganalysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idmappinganalysis
.. _`bioconductor-idmappinganalysis/tags`: https://quay.io/repository/biocontainers/bioconductor-idmappinganalysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idmappinganalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idmappinganalysis/README.html