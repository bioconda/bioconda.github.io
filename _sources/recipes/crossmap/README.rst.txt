:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crossmap'
.. highlight: bash

crossmap
========

.. conda:recipe:: crossmap
   :replaces_section_title:

   Convert genomic coordiates between assemblies

   :homepage: http://crossmap.sourceforge.net
   :license: GPLv2
   :recipe: /`crossmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crossmap/meta.yaml>`_

   


.. conda:package:: crossmap

   |downloads_crossmap| |docker_crossmap|

   :versions: 0.3.3-0, 0.3.2-0, 0.3.1-0, 0.2.8-0, 0.2.7-2, 0.2.7-1, 0.2.7-0, 0.2.5-1, 0.2.5-0, 0.2.2-3, 0.2.2-2, 0.2.2-1, 0.2.2-0, 0.2.1-1, 0.2.1-0
   
   :depends bx-python: 
   
   :depends cython: >=0.17
   
   :depends numpy: 
   
   :depends pybigwig: 
   
   :depends pysam: >=0.11.1,<0.14.0
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends ucsc-wigtobigwig: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crossmap

   and update with::

      conda update crossmap

   or use the docker container::

      docker pull quay.io/biocontainers/crossmap:<tag>

   (see `crossmap/tags`_ for valid values for ``<tag>``)


.. |downloads_crossmap| image:: https://img.shields.io/conda/dn/bioconda/crossmap.svg?style=flat
   :alt:   (downloads)
.. |docker_crossmap| image:: https://quay.io/repository/biocontainers/crossmap/status
   :target: https://quay.io/repository/biocontainers/crossmap
.. _`crossmap/tags`: https://quay.io/repository/biocontainers/crossmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crossmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crossmap/README.html