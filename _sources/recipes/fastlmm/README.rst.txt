:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastlmm'
.. highlight: bash

fastlmm
=======

.. conda:recipe:: fastlmm
   :replaces_section_title:
   :noindex:

   Fast GWAS

   :homepage: http://research.microsoft.com/en-us/um/redmond/projects/mscompbio/fastlmm/
   :license: Apache 2.0
   :recipe: /`fastlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastlmm/meta.yaml>`_

   


.. conda:package:: fastlmm

   |downloads_fastlmm| |docker_fastlmm|

   :versions:
      
      

      ``0.2.32-3``,  ``0.2.32-2``,  ``0.2.32-1``,  ``0.2.32-0``,  ``0.2.24-0``

      

   
   :depends dill: 
   :depends libcxx: ``>=9.0.1``
   :depends matplotlib: ``>=1.4.3``
   :depends numpy: ``>=1.9.3``
   :depends pandas: ``>=0.16.2``
   :depends pysnptools: ``>=0.3.13``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends scikit-learn: ``>=0.16.1,<0.20``
   :depends scipy: ``>=0.16.0``
   :depends statsmodels: ``>=0.6.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastlmm

   and update with::

      conda update fastlmm

   or use the docker container::

      docker pull quay.io/biocontainers/fastlmm:<tag>

   (see `fastlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_fastlmm| image:: https://img.shields.io/conda/dn/bioconda/fastlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/fastlmm
   :alt:   (downloads)
.. |docker_fastlmm| image:: https://quay.io/repository/biocontainers/fastlmm/status
   :target: https://quay.io/repository/biocontainers/fastlmm
.. _`fastlmm/tags`: https://quay.io/repository/biocontainers/fastlmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastlmm/README.html