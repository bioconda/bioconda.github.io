.. title:: Package Recipe 'merfishtools'
.. highlight: bash


merfishtools
============

.. conda:recipe:: merfishtools
   :replaces_section_title:

   MERFISHtools implement a Bayesian framework for accurately predicting gene or transcript expression from MERFISH data. On top\, differential expression analysis can be performed for two or multiple conditions\, including credible intervals for fold change and coefficient of variation\, and controlling the expected false discovery rate.

   :homepage: https://merfishtools.github.io
   :license: MIT
   :recipe: /`merfishtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfishtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfishtools/meta.yaml>`_

   


.. conda:package:: merfishtools

   |downloads_merfishtools| |docker_merfishtools|

   :versions: 1.5.0, 1.4.0, 1.3.0, 1.2.0, 1.1.0, 1.0.0, 0.9.1

   :depends: :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`pandas`  :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_merfishtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install merfishtools

   and update with::

      conda update merfishtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/merfishtools


.. |required_by_merfishtools| conda:required_by:: merfishtools
.. |downloads_merfishtools| image:: https://img.shields.io/conda/dn/bioconda/merfishtools.svg?style=flat
   :alt:   (downloads)
.. |docker_merfishtools| image:: https://quay.io/repository/biocontainers/merfishtools/status
   :target: https://quay.io/repository/biocontainers/merfishtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merfishtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merfishtools/README.html

