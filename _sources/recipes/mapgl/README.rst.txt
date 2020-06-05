:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapgl'
.. highlight: bash

mapgl
=====

.. conda:recipe:: mapgl
   :replaces_section_title:
   :noindex:

   Prediction of lineage\-specific gain and loss of sequence elements using phylogenetic maximum parsimony.

   :homepage: https://github.com/adadiehl/mapGL
   :license: MIT / MIT
   :recipe: /`mapgl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapgl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapgl/meta.yaml>`_

   


.. conda:package:: mapgl

   |downloads_mapgl| |docker_mapgl|

   :versions:
      
      

      ``1.0.1-0``,  ``0.1.1-0``,  ``0.0.6-0``

      

   
   :depends bx-python: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapgl

   and update with::

      conda update mapgl

   or use the docker container::

      docker pull quay.io/biocontainers/mapgl:<tag>

   (see `mapgl/tags`_ for valid values for ``<tag>``)


.. |downloads_mapgl| image:: https://img.shields.io/conda/dn/bioconda/mapgl.svg?style=flat
   :target: https://anaconda.org/bioconda/mapgl
   :alt:   (downloads)
.. |docker_mapgl| image:: https://quay.io/repository/biocontainers/mapgl/status
   :target: https://quay.io/repository/biocontainers/mapgl
.. _`mapgl/tags`: https://quay.io/repository/biocontainers/mapgl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapgl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapgl/README.html