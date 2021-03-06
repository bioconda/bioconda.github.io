:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrosome'
.. highlight: bash

centrosome
==========

.. conda:recipe:: centrosome
   :replaces_section_title:
   :noindex:

   An open source image processing library. Dependency for CellProfiler

   :homepage: https://github.com/CellProfiler/centrosome
   :license: BSD 3
   :recipe: /`centrosome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrosome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrosome/meta.yaml>`_

   


.. conda:package:: centrosome

   |downloads_centrosome| |docker_centrosome|

   :versions:
      
      

      ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``

      

   
   :depends deprecation: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pillow: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scikit-image: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install centrosome

   and update with::

      conda update centrosome

   or use the docker container::

      docker pull quay.io/biocontainers/centrosome:<tag>

   (see `centrosome/tags`_ for valid values for ``<tag>``)


.. |downloads_centrosome| image:: https://img.shields.io/conda/dn/bioconda/centrosome.svg?style=flat
   :target: https://anaconda.org/bioconda/centrosome
   :alt:   (downloads)
.. |docker_centrosome| image:: https://quay.io/repository/biocontainers/centrosome/status
   :target: https://quay.io/repository/biocontainers/centrosome
.. _`centrosome/tags`: https://quay.io/repository/biocontainers/centrosome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrosome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrosome/README.html