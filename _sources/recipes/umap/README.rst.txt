:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umap'
.. highlight: bash

umap
====

.. conda:recipe:: umap
   :replaces_section_title:

   Umap and Bismap\: tools for genome and methylome mappability

   :homepage: https://bitbucket.org/hoffmanlab/umap/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`umap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umap/meta.yaml>`_

   


.. conda:package:: umap

   |downloads_umap| |docker_umap|

   :versions: 1.1.1-0
   
   :depends argparse: 
   :depends bowtie: 
   :depends numpy: 
   :depends pandas: 
   :depends python: <3
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install umap

   and update with::

      conda update umap

   or use the docker container::

      docker pull quay.io/biocontainers/umap:<tag>

   (see `umap/tags`_ for valid values for ``<tag>``)


.. |downloads_umap| image:: https://img.shields.io/conda/dn/bioconda/umap.svg?style=flat
   :target: https://anaconda.org/bioconda/umap
   :alt:   (downloads)
.. |docker_umap| image:: https://quay.io/repository/biocontainers/umap/status
   :target: https://quay.io/repository/biocontainers/umap
.. _`umap/tags`: https://quay.io/repository/biocontainers/umap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umap/README.html