:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circle-map'
.. highlight: bash

circle-map
==========

.. conda:recipe:: circle-map
   :replaces_section_title:

   Circular DNA analysis tools

   :homepage: https://github.com/iprada/Circle-Map
   :license: MIT / MIT
   :recipe: /`circle-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map/meta.yaml>`_

   


.. conda:package:: circle-map

   |downloads_circle-map| |docker_circle-map|

   :versions: 1.1.3-0, 1.1.2-0, 1.1.1-0, 1.0.4-0
   
   :depends biopython: >=1.73
   :depends edlib: >=1.2.3
   :depends numba: >=0.45.0
   :depends numpy: >=1.16.3
   :depends pandas: >=0.24.2
   :depends pybedtools: >=0.8.0
   :depends pysam: >=0.15.2
   :depends python: 
   :depends python-edlib: >=1.2.3
   :depends scipy: >=1.2.1
   :depends tqdm: >=4.31.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circle-map

   and update with::

      conda update circle-map

   or use the docker container::

      docker pull quay.io/biocontainers/circle-map:<tag>

   (see `circle-map/tags`_ for valid values for ``<tag>``)


.. |downloads_circle-map| image:: https://img.shields.io/conda/dn/bioconda/circle-map.svg?style=flat
   :target: https://anaconda.org/bioconda/circle-map
   :alt:   (downloads)
.. |docker_circle-map| image:: https://quay.io/repository/biocontainers/circle-map/status
   :target: https://quay.io/repository/biocontainers/circle-map
.. _`circle-map/tags`: https://quay.io/repository/biocontainers/circle-map?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circle-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circle-map/README.html