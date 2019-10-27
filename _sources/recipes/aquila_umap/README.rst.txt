:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquila_umap'
.. highlight: bash

aquila_umap
===========

.. conda:recipe:: aquila_umap
   :replaces_section_title:

   This is a program to generate Umap for Aquila diploid assembly.

   :homepage: https://github.com/maiziex/Aquila_Umap
   :license: MIT
   :recipe: /`aquila_umap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_umap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_umap/meta.yaml>`_

   


.. conda:package:: aquila_umap

   |downloads_aquila_umap| |docker_aquila_umap|

   :versions: 1.0-1, 1.0-0
   
   :depends bowtie2: 
   :depends pysam: 
   :depends python: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aquila_umap

   and update with::

      conda update aquila_umap

   or use the docker container::

      docker pull quay.io/biocontainers/aquila_umap:<tag>

   (see `aquila_umap/tags`_ for valid values for ``<tag>``)


.. |downloads_aquila_umap| image:: https://img.shields.io/conda/dn/bioconda/aquila_umap.svg?style=flat
   :target: https://anaconda.org/bioconda/aquila_umap
   :alt:   (downloads)
.. |docker_aquila_umap| image:: https://quay.io/repository/biocontainers/aquila_umap/status
   :target: https://quay.io/repository/biocontainers/aquila_umap
.. _`aquila_umap/tags`: https://quay.io/repository/biocontainers/aquila_umap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquila_umap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquila_umap/README.html