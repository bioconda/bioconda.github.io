:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treecluster'
.. highlight: bash

treecluster
===========

.. conda:recipe:: treecluster
   :replaces_section_title:
   :noindex:

   Identify clusters in phylogenetic trees based on a distance threshold and other constraints

   :homepage: https://github.com/niemasd/TreeCluster
   :license: GPL3 / GPL-3.0-only
   :recipe: /`treecluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treecluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treecluster/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0221068`

   


.. conda:package:: treecluster

   |downloads_treecluster| |docker_treecluster|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends niemads: 
   :depends python: 
   :depends treeswift: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treecluster

   and update with::

      conda update treecluster

   or use the docker container::

      docker pull quay.io/biocontainers/treecluster:<tag>

   (see `treecluster/tags`_ for valid values for ``<tag>``)


.. |downloads_treecluster| image:: https://img.shields.io/conda/dn/bioconda/treecluster.svg?style=flat
   :target: https://anaconda.org/bioconda/treecluster
   :alt:   (downloads)
.. |docker_treecluster| image:: https://quay.io/repository/biocontainers/treecluster/status
   :target: https://quay.io/repository/biocontainers/treecluster
.. _`treecluster/tags`: https://quay.io/repository/biocontainers/treecluster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treecluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treecluster/README.html