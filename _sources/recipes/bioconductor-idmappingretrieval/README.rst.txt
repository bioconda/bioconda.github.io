:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idmappingretrieval'
.. highlight: bash

bioconductor-idmappingretrieval
===============================

.. conda:recipe:: bioconductor-idmappingretrieval
   :replaces_section_title:

   Data retrieval for identifier mapping performance analysis

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/IdMappingRetrieval.html
   :license: GPL-2
   :recipe: /`bioconductor-idmappingretrieval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idmappingretrieval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idmappingretrieval/meta.yaml>`_

   


.. conda:package:: bioconductor-idmappingretrieval

   |downloads_bioconductor-idmappingretrieval| |docker_bioconductor-idmappingretrieval|

   :versions: 1.30.0-0
   
   :depends bioconductor-affycompatible: >=1.42.0,<1.43.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-envisionquery: >=1.30.0,<1.31.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-r.methodss3: 
   :depends r-r.oo: 
   :depends r-rchoicedialogs: 
   :depends r-rcurl: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-idmappingretrieval

   and update with::

      conda update bioconductor-idmappingretrieval

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-idmappingretrieval:<tag>

   (see `bioconductor-idmappingretrieval/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-idmappingretrieval| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idmappingretrieval.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idmappingretrieval
   :alt:   (downloads)
.. |docker_bioconductor-idmappingretrieval| image:: https://quay.io/repository/biocontainers/bioconductor-idmappingretrieval/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idmappingretrieval
.. _`bioconductor-idmappingretrieval/tags`: https://quay.io/repository/biocontainers/bioconductor-idmappingretrieval?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idmappingretrieval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idmappingretrieval/README.html