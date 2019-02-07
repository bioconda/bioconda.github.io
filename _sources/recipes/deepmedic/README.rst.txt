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

   :versions: 0.6.1, 0.6, 0.5.4

   :depends: :conda:package:`nibabel`  :conda:package:`numpy`  :conda:package:`pp`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  :conda:package:`six`  :conda:package:`theano`  

   :required~by: |required_by_deepmedic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepmedic

   and update with::

      conda update deepmedic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deepmedic


.. |required_by_deepmedic| conda:required_by:: deepmedic
.. |downloads_deepmedic| image:: https://img.shields.io/conda/dn/bioconda/deepmedic.svg?style=flat
   :alt:   (downloads)
.. |docker_deepmedic| image:: https://quay.io/repository/biocontainers/deepmedic/status
   :target: https://quay.io/repository/biocontainers/deepmedic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmedic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmedic/README.html

