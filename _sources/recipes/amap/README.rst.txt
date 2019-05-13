:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amap'
.. highlight: bash

amap
====

.. conda:recipe:: amap
   :replaces_section_title:

   AMAP is a multiple sequence alignment program based on sequence annealing.

   :homepage: https://web.archive.org/web/20060902044446/http://bio.math.berkeley.edu/amap/
   :developer docs: https://github.com/mes5k/amap-align
   :license: GPL-2
   :recipe: /`amap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amap/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btl311`

   


.. conda:package:: amap

   |downloads_amap| |docker_amap|

   :versions: 2.2-0
   
   :depends blast: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install amap

   and update with::

      conda update amap

   or use the docker container::

      docker pull quay.io/biocontainers/amap:<tag>

   (see `amap/tags`_ for valid values for ``<tag>``)


.. |downloads_amap| image:: https://img.shields.io/conda/dn/bioconda/amap.svg?style=flat
   :target: https://anaconda.org/bioconda/amap
   :alt:   (downloads)
.. |docker_amap| image:: https://quay.io/repository/biocontainers/amap/status
   :target: https://quay.io/repository/biocontainers/amap
.. _`amap/tags`: https://quay.io/repository/biocontainers/amap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amap/README.html