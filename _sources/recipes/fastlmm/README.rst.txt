.. title:: Package Recipe 'fastlmm'
.. highlight: bash


fastlmm
=======

.. conda:recipe:: fastlmm
   :replaces_section_title:

   Fast GWAS

   :homepage: http://research.microsoft.com/en-us/um/redmond/projects/mscompbio/fastlmm/
   :license: Apache 2.0
   :recipe: /`fastlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlmm/meta.yaml>`_

   


.. conda:package:: fastlmm

   |downloads_fastlmm| |docker_fastlmm|

   :versions: 0.2.32, 0.2.24

   :depends: :conda:package:`dill`  :conda:package:`matplotlib` >=1.4.3 :conda:package:`numpy` >=1.9.3 :conda:package:`pandas` >=0.16.2 :conda:package:`pysnptools` >=0.3.13 :conda:package:`python` 2.7* :conda:package:`scikit-learn` >=0.16.1 :conda:package:`scipy` >=0.16.0 :conda:package:`statsmodels` >=0.6.1 

   :required~by: |required_by_fastlmm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastlmm

   and update with::

      conda update fastlmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastlmm


.. |required_by_fastlmm| conda:required_by:: fastlmm
.. |downloads_fastlmm| image:: https://img.shields.io/conda/dn/bioconda/fastlmm.svg?style=flat
   :alt:   (downloads)
.. |docker_fastlmm| image:: https://quay.io/repository/biocontainers/fastlmm/status
   :target: https://quay.io/repository/biocontainers/fastlmm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastlmm/README.html

