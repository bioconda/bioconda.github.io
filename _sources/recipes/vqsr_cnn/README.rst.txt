.. title:: Package Recipe 'vqsr_cnn'
.. highlight: bash


vqsr_cnn
========

.. conda:recipe:: vqsr_cnn
   :replaces_section_title:

   Variant quality score recalibration with Convolutional Neural Networks

   :homepage: https://broadinstitute.org/
   :license: MIT
   :recipe: /`vqsr_cnn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqsr_cnn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqsr_cnn/meta.yaml>`_

   


.. conda:package:: vqsr_cnn

   |downloads_vqsr_cnn| |docker_vqsr_cnn|

   :versions: 0.0.194, 0.0.132

   :depends: :conda:package:`biopython` >=1.70 :conda:package:`gatktool`  :conda:package:`keras` >=2.0 :conda:package:`matplotlib` >=2.1.2 :conda:package:`numpy` >=1.13.1 :conda:package:`pysam` >=0.13 :conda:package:`python`  :conda:package:`pyvcf` >=0.6.8 :conda:package:`scikit-learn` >=0.19.1 :conda:package:`scipy` >=0.19.1 :conda:package:`tensorflow`  

   :required~by: |required_by_vqsr_cnn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vqsr_cnn

   and update with::

      conda update vqsr_cnn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vqsr_cnn


.. |required_by_vqsr_cnn| conda:required_by:: vqsr_cnn
.. |downloads_vqsr_cnn| image:: https://img.shields.io/conda/dn/bioconda/vqsr_cnn.svg?style=flat
   :alt:   (downloads)
.. |docker_vqsr_cnn| image:: https://quay.io/repository/biocontainers/vqsr_cnn/status
   :target: https://quay.io/repository/biocontainers/vqsr_cnn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vqsr_cnn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vqsr_cnn/README.html

