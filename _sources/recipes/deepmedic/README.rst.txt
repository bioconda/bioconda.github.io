:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmedic'
.. highlight: bash

deepmedic
=========

.. conda:recipe:: deepmedic
   :replaces_section_title:

   Efficient Multi\-Scale 3D Convolutional Neural Network for Brain Lesion Segmentation.

   :homepage: https://github.com/Kamnitsask/deepmedic
   :license: BSD
   :recipe: /`deepmedic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmedic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmedic/meta.yaml>`_

   


.. conda:package:: deepmedic

   |downloads_deepmedic| |docker_deepmedic|

   :versions: 0.6.1-0, 0.6-0, 0.5.4-0
   
   :depends nibabel: 
   
   :depends numpy: 
   
   :depends pp: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :depends six: 
   
   :depends theano: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepmedic

   and update with::

      conda update deepmedic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deepmedic:<tag>

   (see `deepmedic/tags`_ for valid values for ``<tag>``)


.. |downloads_deepmedic| image:: https://img.shields.io/conda/dn/bioconda/deepmedic.svg?style=flat
   :alt:   (downloads)
.. |docker_deepmedic| image:: https://quay.io/repository/biocontainers/deepmedic/status
   :target: https://quay.io/repository/biocontainers/deepmedic
.. _`deepmedic/tags`: https://quay.io/repository/biocontainers/deepmedic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmedic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmedic/README.html