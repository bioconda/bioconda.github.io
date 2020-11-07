:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusclusterplus'
.. highlight: bash

bioconductor-consensusclusterplus
=================================

.. conda:recipe:: bioconductor-consensusclusterplus
   :replaces_section_title:
   :noindex:

   ConsensusClusterPlus

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ConsensusClusterPlus.html
   :license: GPL version 2
   :recipe: /`bioconductor-consensusclusterplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusclusterplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusclusterplus/meta.yaml>`_
   :links: biotools: :biotools:`consensusclusterplus`

   algorithm for determining cluster count and membership by stability evidence in unsupervised analysis


.. conda:package:: bioconductor-consensusclusterplus

   |downloads_bioconductor-consensusclusterplus| |docker_bioconductor-consensusclusterplus|

   :versions:
      
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``

      

   
   :depends bioconductor-all: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-consensusclusterplus

   and update with::

      conda update bioconductor-consensusclusterplus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consensusclusterplus:<tag>

   (see `bioconductor-consensusclusterplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consensusclusterplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusclusterplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusclusterplus
   :alt:   (downloads)
.. |docker_bioconductor-consensusclusterplus| image:: https://quay.io/repository/biocontainers/bioconductor-consensusclusterplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusclusterplus
.. _`bioconductor-consensusclusterplus/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusclusterplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusclusterplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusclusterplus/README.html