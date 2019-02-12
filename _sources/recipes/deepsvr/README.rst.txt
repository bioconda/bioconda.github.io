:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepsvr'
.. highlight: bash

deepsvr
=======

.. conda:recipe:: deepsvr
   :replaces_section_title:

   DeepSVR stands for deep somatic variant refinement. It uses deep learning to classify real somatic and anomalous variants in paired tumor sequencing data.

   :homepage: https://github.com/griffithlab/deepsvr
   :license: MIT
   :recipe: /`deepsvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsvr/meta.yaml>`_

   


.. conda:package:: deepsvr

   |downloads_deepsvr| |docker_deepsvr|

   :versions: 0.1.0-0
   
   :depends bam-readcount: 
   
   :depends click: 
   
   :depends convert_zero_one_based: 
   
   :depends h5py: 
   
   :depends keras: 2.0.4
   
   :depends matplotlib: 
   
   :depends numpy: 1.12.1
   
   :depends pandas: 0.20.3
   
   :depends python: 3.6.1
   
   :depends scikit-learn: 
   
   :depends seaborn: 
   
   :depends tensorflow: <=1.0.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepsvr

   and update with::

      conda update deepsvr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deepsvr:<tag>

   (see `deepsvr/tags`_ for valid values for ``<tag>``)


.. |downloads_deepsvr| image:: https://img.shields.io/conda/dn/bioconda/deepsvr.svg?style=flat
   :alt:   (downloads)
.. |docker_deepsvr| image:: https://quay.io/repository/biocontainers/deepsvr/status
   :target: https://quay.io/repository/biocontainers/deepsvr
.. _`deepsvr/tags`: https://quay.io/repository/biocontainers/deepsvr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepsvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepsvr/README.html