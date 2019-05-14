:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sorted_nearest'
.. highlight: bash

sorted_nearest
==============

.. conda:recipe:: sorted_nearest
   :replaces_section_title:

   Find nearest interval.

   :homepage: https://github.com/endrebak/sorted_nearest
   :license: BSD
   :recipe: /`sorted_nearest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sorted_nearest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sorted_nearest/meta.yaml>`_

   


.. conda:package:: sorted_nearest

   |downloads_sorted_nearest| |docker_sorted_nearest|

   :versions: 0.0.18-1, 0.0.17-1, 0.0.17-0
   
   :depends cython: 
   :depends libgcc-ng: >=7.3.0
   :depends numpy: >=1.16.3
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sorted_nearest

   and update with::

      conda update sorted_nearest

   or use the docker container::

      docker pull quay.io/biocontainers/sorted_nearest:<tag>

   (see `sorted_nearest/tags`_ for valid values for ``<tag>``)


.. |downloads_sorted_nearest| image:: https://img.shields.io/conda/dn/bioconda/sorted_nearest.svg?style=flat
   :target: https://anaconda.org/bioconda/sorted_nearest
   :alt:   (downloads)
.. |docker_sorted_nearest| image:: https://quay.io/repository/biocontainers/sorted_nearest/status
   :target: https://quay.io/repository/biocontainers/sorted_nearest
.. _`sorted_nearest/tags`: https://quay.io/repository/biocontainers/sorted_nearest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sorted_nearest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sorted_nearest/README.html